const TABLE = document.getElementById('AgendaTable');
const ROWS = TABLE.querySelectorAll('tr'); // NodeList of table rows to iterate over

function populateRow(list, arr) {
  list.forEach((cell, i) => {
    if (i == 1) {
      cell.innerHTML == 'Open' ? arr.push('FALSE') : arr.push('TRUE');
    }
    if (i == 3 && cell.innerHTML.search(/\d\d?\/\d\d?\/\d{4}/) != -1) {
      arr.push(cell.innerHTML);
    }
    if (i == 3 && cell.innerHTML.search(/\d\d?\/\d\d?\/\d{4}/) == -1) {
      arr.push('');
    }
  });
  return arr;
}

function createUpdateResponse() {
  const vals = [];

  [...ROWS].forEach(row => { // Iterate through table rows
    const rowArr = []; // Each row is made of an array 
    const CELLS = row.querySelectorAll('td');

    // Populate each row array with the values from the table
    populateRow(CELLS, rowArr);
    vals.push(rowArr);
  });

  const values = vals.slice(1); // This array represents the table of times & reservations that were built into the page from the Sheet
  return values;
}

export default createUpdateResponse;