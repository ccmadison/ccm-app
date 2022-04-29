const PARENT = document.getElementById('Agenda');
const SUBMIT_BUTTON = document.getElementById('Submit');
const PARAMS = {
  "spreadsheetId": '1UyPFZVN4NIo959qxGCwP6cyKoe9fq5KHD0zE2hyGUi8',
  "valueInputOption": 'USER_ENTERED',
  "includeValuesInResponse": true
}
const UPDATE = {
  "majorDimension": "COLUMNS",
}

async function updateSheet(params, update) {
  let response = await gapi.client.sheets.spreadsheets.values.update(params, update);

  if (response.status == 200) {
    return response;
  }
  throw new Error('Error!')
}

function getDaysRemaining(time, expiration) {
  if (expiration == undefined) {
    return '&nbsp;';
  }

  const [now, today, expired, end] = [new Date, new Date, new Date, new Date(expiration)];
  const hour = time.search(/PM$/) !== -1 ? parseInt(time.replace(/(\d\d)?:00\sPM/, `$1`), 10) + 12 : time.replace(/^\d\d?:00\sAM/, `$1`);

  today.setHours(0, 0, 0, 0);
  expired.setHours((hour + 1), 0, 0, 0);
  if (today.getTime() >= end.getTime() && now.getTime() >= expired.getTime()) {
    // Update the Sheet here because a time slot has opened, but the Sheet doesn't show it yet
    import('./getAgendaObject').then(({ default: getAgendaObject }) => {
      const agendaObject = getAgendaObject();
      const range = `Agenda!${agendaObject[time].status}:${agendaObject[time].end}`;

      PARAMS.range = range;
      UPDATE.range = range;
      UPDATE.values = [
        ['FALSE'],
        ['']
      ];
      updateSheet(PARAMS, UPDATE)
        .then(response => {
          console.log(response);

          return html += `<td>${time}</td><td>Open</td><td>&nbsp;</td><td>
  <button type="button" data-hour="${time}" class="btn btn-outline-primary buttons__select Select">
    Select
  </button></td>`;
        })
        .catch(err => console.error(`Error updating Sheet: ${err.message}`, err))
    });
  } else {
    // Calculate the number of days
    return (end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000);
  }
}

function createCells(row) {
  let html = '';
  let [time, status, expiration] = row;
  
  const statusValue = status == 'FALSE' ? 'Open' : '&nbsp;';
  const endValue = expiration == undefined ? `<button type="button" data-hour="${time}" class="btn btn-outline-primary buttons__select Select">Select</button>` : expiration;
  const daysRemaining = getDaysRemaining(time, expiration);

  if (daysRemaining == undefined) {
    return html = `<td>${time}</td><td>Open</td><td>&nbsp;</td>
    <td><button type="button" data-hour="${time}" class="btn btn-outline-primary buttons__select Select">Select</button></td>`;
  }
  return `<td>${time}</td><td>${statusValue}</td><td>${daysRemaining}</td><td>${endValue}</td>`;


  // if (expiration != '') {
  //   const [now, today, expire] = [new Date, new Date, new Date];
  //   const end = new Date(end);
  //   const hour = time.search(/PM$/) !== -1 ? parseInt(time.replace(/(\d\d?):00\sPM/, `$1`), 10) + 12 : time.replace(/^\d\d?:00\sAM/, `$1`);

  //   if (today.getTime() >= end.getTime() && now.getTime() >= expire.getTime()) {
  //     // Update the Sheet here because a time slot has opened, but the Sheet doesn't show it yet
  //     import('./getAgendaObject').then(({ default: getAgendaObject }) => {
  //       const agendaObject = getAgendaObject();
  //       const range = `Agenda!${agendaObject[time].status}:${agendaObject[time].end}`;

  //       PARAMS.range = range;
  //       UPDATE.range = range;
  //       UPDATE.values = [
  //         ['FALSE'],
  //         ['']
  //       ];
  //       updateSheet(PARAMS, UPDATE)
  //         .then(response => {
  //           console.log(response);
  //           return html += `<td>${time}</td><td>Open</td><td>&nbsp;</td><td>
  // <button type="button" data-hour="${time}" class="btn btn-outline-primary buttons__select Select">
  //   Select
  // </button></td>`;
  //         })
  //         .catch(err => console.error(`Error updating Sheet: ${err.message}`, err))
  //       return undefined;
  //     });
  //   } else {
  //     return html = `<td>${time}</td><td>&nbsp;</td><td>${(end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)}</td><td>${expire}</td>`
  //   }
  // }

  // row.forEach((cell, i) => {
  //   if (i == 0) {
  //     html += `<td>${cell}</td>`;
  //   }
  //   if (i == 1 && cell == 'FALSE') {
  //     return html += `<td>Open</td><td>&nbsp;</td><td><button type="button" data-hour="${row[0]}" class="btn btn-outline-primary buttons__select Select">Select</button></td>`;
  //   }
  //   if (i == 1 && cell == 'TRUE') {
  //     html += '<td>&nbsp;</td>';
  //   }
  //   if (i == 2 && cell != '') {
  //     const [now, today, expire] = [new Date, new Date, new Date];
  //     const end = new Date(cell);
  //     const hour = row[0].search(/PM$/) !== -1 ? parseInt(row[0].replace(/(\d\d)?:00\sPM/, `$1`), 10) + 12 : row[0].replace(/^\d\d?:00\sAM/, `$1`);

  //     expire.setHours((hour + 1), 0, 0, 0);
  //     today.setHours(0, 0, 0, 0);

  //     if (today.getTime() >= end.getTime() && now.getTime() >= expire.getTime()) {
  //       // Update the Sheet here because a time slot has opened, but the Sheet doesn't show it yet
  //       import('./getAgendaObject').then(({ default: getAgendaObject }) => {
  //         const agendaObject = getAgendaObject();
  //         const range = `Agenda!${agendaObject[row[0]].status}:${agendaObject[row[0]].end}`;

  //         PARAMS.range = range;
  //         UPDATE.range = range;
  //         UPDATE.values = [
  //           ['FALSE'],
  //           ['']
  //         ];
  //         updateSheet(PARAMS, UPDATE)
  //           .then(response => console.log(response))
  //           .catch(err => console.error(`Error updating Sheet: ${err.message}`, err))
  //         return html += `<td>Open</td>
  // <td>
  //   <button type="button" data-hour="${row[0]}" class="btn btn-outline-primary buttons__select Select">
  //     Select
  //   </button>
  // </td>`;
  //       });
  //     } else {
  //       return html += `<td>${(end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)}</td><td>${cell}</td>`;
  //     }
  //   }
  // });
  // return html;
}

function createBodyRows(data) {
  let html = '';

  data.forEach(row => {
    const classes = row[1] == 'TRUE' ? ' class="bg-primary tables__white"' : '';

    html += `<tr${classes}>
    ${createCells(row)}
  </tr>`;
  });
  return html;
}

function createHeaderCells(row) {
  let html = '';

  row.forEach((column, i) => {
    if (i == 2) {
      return html += `<th>Days remaining</th><th>${column}</th>`
    }
    return html += `<th>${column}</th>`
  });
  return html
}

function buildAgendaList(response) {
  const data = response.result.values;

  let html = `<div class="table-responsive">
  <table id="AgendaTable"
   class="table table-striped table-hover table-sm table__agenda-table tables__align-cell-middle">
    <thead>
      <tr>
        ${createHeaderCells(data[1])}
      </tr>
    </thead>
    <tbody>
      ${createBodyRows(data.slice(2))}
    </tbody>
    </table>
  </div>`;

  SUBMIT_BUTTON.disabled = false;
  PARENT.innerHTML = '';
  return PARENT.innerHTML = html;
}

export default buildAgendaList;