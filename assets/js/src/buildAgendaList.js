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
      const today = new Date;
      const end = new Date(cell);

      today.setHours(0, 0, 0, 0);
      return html += `<td>${(end.getTime() - today.getTime()) / (24 * 60 * 60 * 1000)}</td><td>${cell}</td>`;
    }
  })
  return html;
}

function createBodyRows(data) {
  let html = '';

  data.forEach(row => {
    const classes = row[1] == 'TRUE' ? ' class="table-primary"' : '';
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