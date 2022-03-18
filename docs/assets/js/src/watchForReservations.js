

function handleSubmission(e) {
  e.preventDefault();
  
  import('downloadjs/download').then(({ default: download }) => {
    const target = e.target;
    const START_LIST = target.querySelectorAll('[id*=startInput]');
    const END_LIST = target.querySelectorAll('[id*=endInput]');
    const H2_LIST = target.querySelectorAll('h2');
    // const row = target.parentElement.parentElement;
  
    [...START_LIST].forEach((start, i) => {
      const row = start.parentElement.parentElement.parentElement;
      const START = new Date(start.value);
      const now = `${START.getFullYear()}${START.getMonth() + 1}${START.getDate()}T${START.getHours()}${START.getMinutes()}${START.getSeconds()}`;
      const end = END_LIST[i].value.toString().replace(/(\d{4})-(\d{2})-(\d{2})/, `$2/$3/$1`); // Re-arrange date string
      const END = new Date(end);
      const endDate = `${END.getFullYear()}${END.getMonth()}${END.getDate()}T235900`;
      const TIME = H2_LIST[i].innerHTML;
      const h = TIME.replace(/^(\d\d?):.+$/, `$1`)
      const hh = TIME.search(/PM$/) !== -1 ? parseInt(h, 10) + 12 : h < 9 ? 0 + h : h; // Convert hour to military 24hr time with 2 digits (e.g. '06' and not '6')
      const html = `<div class="col-12 text-center">
  <div class="card card-body">
    <p class="mb-0">
      <button type="button" class="btn btn-outline-primary Download">Download Calendar file (.ics)</button> with reminders
    </p>
  </div>
</div>`;
      /**
       * 
       * @TODO - Create ICS download & handle update to Google Sheet
       * 
       */
      const iCalString = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:https://ccmadison.github.io/ccm-app/
METHOD:PUBLISH
BEGIN:VEVENT
UID:${now}
ORGANIZER;CN="Organizer Name":MAILTO:organizer@example.org
SUMMARY: My daily prayer time (until: ${end})
CLASS:PUBLIC
DTSTART:TZID=America/Chicago:${START.getFullYear()}${START.getMonth()}${START.getDate()}T${hh}0000
RRULE:FREQ=DAILY;UNTIL=${endDate}
DTSTAMP:${now}
END:VEVENT
END:VCALENDAR`;
      /**
       * 
       *  @TODO - DTSTART formatting needs to be fixed so that months + days are 2 digits (e.g. '03' vs '3')
       * 
       */
      console.log(iCalString);
      row.insertAdjacentHTML('beforeend', html);
      const button = row.querySelector('.Download');

      button.addEventListener('click', (e) => {
        download(iCalString, `reservation_${i + 1}.ics`, 'text/calendar');
      });
    });
  });
}

function watchForReservations() {
  const RESERVE_FORM = document.getElementById('Reserve');

  RESERVE_FORM.addEventListener('submit', handleSubmission, false);
}

export default watchForReservations;
