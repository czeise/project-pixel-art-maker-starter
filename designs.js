/* eslint-env browser */

const sizeInput = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

function setColor(event) {
  const cell = event.target;
  const cellColor = document.getElementById('colorPicker').value;
  cell.style.backgroundColor = cellColor;
}

function makeGrid() {
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;

  // Clear table if any rows currently exist
  table.querySelectorAll('tr').forEach((row) => {
    row.remove();
  });

  for (let row = 0; row < height; row += 1) {
    table.appendChild(document.createElement('tr'));
    for (let column = 0; column < width; column += 1) {
      table.lastChild.appendChild(document.createElement('td'));
      table.lastChild.lastChild.addEventListener('click', setColor);
    }
  }
}

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener('submit', (event) => {
  event.preventDefault();
  makeGrid();
});
