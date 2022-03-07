const PARENT = document.getElementById('Agenda');

function createCells(row) {
  let html = '';
  row.forEach((cell, i) => {
    if (row.length == 3 && i == 2) {
      return html += `<td>${cell}</td><td><button type="button" class="btn btn-primary Select">Select</button></td>`;
    }
    if (i == 1 && cell == 'FALSE') {
      return html += '<td>Open</td>';
    }
    if (i == 1 && cell == 'TRUE') {
      return html += '<td>&nbsp;</td>';
    }
    return html += `<td>${cell}</td>`;
  })
  return html;
}

function createBodyRows(data) {
  let html = '';
  data.forEach(row => {
    const classes = row[1] == 'TRUE' ? ' class="table-primary"' : '';
    console.log(row[1]);
    html += `<tr${classes}>
    ${createCells(row)}
  </tr>`;
  });
  return html;
}

function createHeaderCells(row) {
  let html = '';
  row.forEach(column => {
    return html += `<th>${column}</th>`
  });
  return html
}

function buildAgendaList(response) {
  const data = response.result.values;

  let html = `<table id="agendaTable" class="table table-striped table-hover table-sm tables__align-cell-middle">
  <thead>
    <tr>
      ${createHeaderCells(data[1])}
    </tr>
  </thead>
  <tbody>
    ${createBodyRows(data.splice(2))}
  </tbody>
  </table>`;

  PARENT.innerHTML = '';
  return PARENT.innerHTML = html;
}

export default buildAgendaList;