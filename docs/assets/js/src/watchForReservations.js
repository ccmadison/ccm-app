import getAgendaObject from './getAgendaObject';

const AGENDA_OBJECT = getAgendaObject();
const doubleDigitNum = (string) => string <= 9 ? '0' + string : string; // Converts a number into a string of 2 digits (e.g. 4 => '04')

function formatDateString(d) {
  let [yyyy, MM, dd, hh, mm, ss] = [
    d.getFullYear(),
    doubleDigitNum(d.getMonth() + 1),
    doubleDigitNum(d.getDate()),
    doubleDigitNum(d.getHours()),
    doubleDigitNum(d.getMinutes()),
    doubleDigitNum(d.getSeconds())
  ];
  return `${yyyy}${MM}${dd}T${hh}${mm}${ss}`;
}

function handleSubmission(e) {
  const START_LIST = e.target.querySelectorAll('[id*=startInput]'); // Create NodeList of input elements since more than one time-slot can be reserved
  const END_LIST = e.target.querySelectorAll('[id*=endInput]');
  const H2_LIST = e.target.querySelectorAll('h2'); // Each time-slot has an <h2> containing the time-slot (e.g. '4:00 PM')
  const edits = []; // Create an array to hold the time-slot edits for updating the Google Sheet later

  e.preventDefault(); // Prevent normal form submission behavior
  // Lazily imports the download() function which will be used for downloading an iCalendar .ics file later
  import('downloadjs/download').then(({ default: download }) => {
    [...START_LIST].forEach((start, i) => { // Iterate our time-slot reservations
      const row = start.parentElement.parentElement.parentElement;
      const START = new Date(start.value); // Create a Date object from the start date
      const START_END = new Date(start.value); // The end date for a 1-hour time-slot is still on the same date so we need another date object
      const end = END_LIST[i].value.toString().replace(/(\d{4})-(\d{2})-(\d{2})/, `$2/$3/$1`); // Re-arrange the end-date string
      const END = new Date(end); // Create Date object for the end-date of the reservation (last day of recurring event)
      
      const TIME = H2_LIST[i].innerHTML; // The time-slot is built into each <h2> (e.g. '4:00 PM')
      const h = TIME.replace(/^(\d\d?):.+$/, `$1`); // Isolate the hour
      const hh = TIME.search(/PM$/) !== -1 ? parseInt(h, 10) + 12 : parseInt(h, 10); // Convert to 24hr time

      START.setHours(hh); // Set the start Date objects time to the specific time-slot
      START_END.setHours(hh + 1); // Set the end Date objects time to one-our after the time-slot
      END.setHours(23, 59); // Set the end dates time
      // Create a download button for downloading .ics file for event
      const html = `<div class="col-12 text-center">
  <div class="card card-body">
    <p class="mb-0">
      <button type="button" class="btn btn-outline-primary Download">Download Calendar file (.ics)</button> with reminders
    </p>
  </div>
</div>`;
      // Create the contents for a .ics file
      const iCalString = `BEGIN:VCALENDAR
VERSION:2.0
CALSCALE:GREGORIAN
PRODID:https://ccmadison.github.io/ccm-app/
BEGIN:VEVENT
UID:${formatDateString(START)}-${formatDateString(END)}
SUMMARY:My prayer time - ${TIME}
DESCRIPTION:My prayer time for ${TIME} (until\: ${end})
STATUS:CONFIRMED
DTSTAMP:${formatDateString(START)}Z
DTSTART;TZID=America/Chicago:${formatDateString(START)}
RRULE:FREQ=DAILY;UNTIL=${formatDateString(END)}Z
DTEND;TZID=America/Chicago:${formatDateString(START_END)}
END:VEVENT
END:VCALENDAR`;
      row.insertAdjacentHTML('beforeend', html); // Inject the .ics file download button(s) into the modal
      const button = row.querySelector('.Download');

      button.addEventListener('click', (e) => { // Watch for clicks on the download button(s)
        download(iCalString, `prayer-reservation_${i + 1}.ics`, 'text/calendar');
      });
      edits.push([TIME, 'TRUE', end]); // Populate the edits array with time-slot changes for editing the Google Sheet later
    }); // END of [...START_LIST].forEach()

    const params = {
      "spreadsheetId": '1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8',
      "valueInputOption": 'USER_ENTERED'//,
      // "includeValuesInResponse": true
    }

    for (const [time, status, end] of edits) {
      const range = `Agenda!${AGENDA_OBJECT[time].status}:${AGENDA_OBJECT[time].end}`
      const update = {
        "range": range,
        "majorDimension": "COLUMNS",
        "values": [
          [status],
          [end]
        ]
      }

      params.range = range;
      console.log(update);

      const updateRequest = gapi.client.sheets.spreadsheets.values.update(params, update);

      updateRequest.then(response => {
        // Handle successful update here
        console.log(response);
        const FORM_CARD = document.getElementById('Reserve').querySelector('.card.card-body.bg-light');
        const RESERVE_BUTTON = document.getElementById('reserveSubmit');
        const html = `<div class="alert alert-success text-center mb-3" role="alert">
    <h3 class="text-success">Success!</h3>
    <p class="text-success mb-0">
      Your reservation for the daily <strong>${time}</strong> prayer time was successful! <br>
      You have reserved the ${time} prayer block until <strong>${end}</strong>.
    </p>
  </div>`;

        FORM_CARD.insertAdjacentHTML('afterbegin', html);
        // values.splice(0, 0, [''], ['Times', 'Status', 'End date of reservation']);
        RESERVE_BUTTON.disabled = true;

        // const updatedAgenda = { // buildAgendaList(response) expects a Sheets response object for a parameter
        //   result: {
        //     values: values
        //   }
        // }

        // import('./buildAgendaList').then(({ default: build }) => build(updatedAgenda));
      }, err => {
        console.error(`Error updating the spreadsheet: ${err.result.error.message}`);
      })
    }


    // const TABLE = document.getElementById('AgendaTable');
    // const ROWS = TABLE.querySelectorAll('tr'); // NodeList of table rows to iterate over
    // const vals = [];

    // [...ROWS].forEach(row => { // Iterate through table rows
    //   const rowArr = []; // Each row is made of an array
    //   const CELLS = row.querySelectorAll('td');
    //   // Populate each row array with the values from the table
    //   populateRow(CELLS, rowArr);
    //   vals.push(rowArr);
    // });
    // const values = vals.slice(1); // This array represents the table of times & reservations that were built into the page from the Sheet
    // // Loop through our edits
    // edits.forEach((edit) => {
    //   const time = edit[0]; // First item is the time-slot
    //   const editIndex = values.findIndex((row) => row[0] == time);

    //   values.splice(editIndex, 1, edit); // Replaces the desired open time-slot with our new reservations
    // });


    // edits.forEach(edit => {
    //   let [time, status, end] = edit;

    //   const editRange = `Agenda!${AGENDA_OBJECT[time].status}:${AGENDA_OBJECT[time].end}`;
    // })

    // const params = {
    //   "spreadsheetId": '1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8',
    //   "range": RANGE,
    //   "valueInputOption": 'USER_ENTERED'
    // }
    // const update = {
    //   "range": RANGE,
    //   "majorDimension": "ROWS",
    //   "values": values
    // }
    // const updateRequest = gapi.client.sheets.spreadsheets.values.update(params, update);

//     updateRequest.then(response => {
//       // Handle successful update here
//       // spreadsheets.values.update() does not return the updated spreadsheet (unless you tell it to)
//       // console.log(response);
//       const FORM_CARD = document.getElementById('Reserve').querySelector('.card.card-body.bg-light');
//       const RESERVE_BUTTON = document.getElementById('reserveSubmit');
//       const html = `<div class="alert alert-success text-center mb-3" role="alert">
//   <h3 class="text-success">Success!</h3>
//   <p class="text-success mb-0">Your reservation was successful.</p>
// </div>`;

//       FORM_CARD.insertAdjacentHTML('afterbegin', html);
//       values.splice(0, 0, [''], ['Times', 'Status', 'End date of reservation']);
//       RESERVE_BUTTON.disabled = true;

//       const updatedAgenda = { // buildAgendaList(response) expects a Sheets response object for a parameter
//         result: {
//           values: values
//         }
//       }

//       import('./buildAgendaList').then(({ default: build }) => build(updatedAgenda));
//     }, err => {
//       console.error(`Error updating the spreadsheet: ${err.result.error.message}`);
//     })
  });
}

function watchForReservations() {
  const RESERVE_FORM = document.getElementById('Reserve');

  RESERVE_FORM.addEventListener('submit', handleSubmission, false);
}

export default watchForReservations;
