const PARENT = document.getElementById('Agenda');
const SUBMIT_BUTTON = document.getElementById('Submit');

function createCells(row) {
  let html = '';
  row.forEach((cell, i) => {
    if (i == 0) {
      return html += `<td>${cell}</td>`;
    }
    if (i == 1 && cell == 'FALSE') {
      return html += `<td>Open</td><td>&nbsp;</td><td><button type="button" data-hour="${row[0]}" class="btn btn-outline-primary buttons__select Select">Select</button></td>`;
    }
    if (i == 1 && cell == 'TRUE') {
      return html += `<td>&nbsp;</td>`;
    }
    if (i == 2 && cell != '') {
      const [now, today, expire] = [new Date, new Date, new Date];
      const end = new Date(cell);
      const hour = row[0].search(/PM$/) !== -1 ? parseInt(row[0].replace(/(\d\d)?:00\sPM/, `$1`), 10) + 12 : row[0].replace(/^\d\d?:00\sAM/, `$1`);

      expire.setHours((hour + 1), 0, 0, 0);
      today.setHours(0, 0, 0, 0);

      if (today.getTime() === end.getTime()) {
        if (now.getTime() >= expire.getTime()) {
          // Update sheet here because time slot is open and sheet needs updating
          import('./createUpdateResponse').then(({ default: init }) => {
            const values = init(); // Creates object representing

            console.log(values);
            
          })
        }
        
      }

      
      // console.log(today);
      // console.log(now);
      

      return html += `<td>${(end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)}</td><td>${cell}</td>`;
    }
  })
  return html;
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