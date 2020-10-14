function addMultiplicationTable() {
  let table = document.createElement('table');

  for (let row = 0; row < 10; row++) {
    let tableRow = document.createElement('tr');

    for (let column = 0; column < 10; column++) {
      let tableColumn = document.createElement('td');
      let text = -1;

      if (column !== 0 && row !== 0) text = (row + 1) * (column + 1);

      if (row === 0) text = column + 1;

      if (column === 0) text = row + 1;

      if ((tableRow * tableColumn) % 3 === 0)
        tableColumn.style.backgroundColor = 'yellow';

      tableColumn.innerText = text;
      tableRow.appendChild(tableColumn);
    }

    table.appendChild(tableRow);
  }

  document.body.appendChild(table);
}

addMultiplicationTable();
