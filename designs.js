/* eslint-env browser */

const sizeInput = document.getElementById('sizePicker');
const table = document.getElementById('pixelCanvas');

function makeGrid() {

// Your code goes here!

}

// When size is submitted by the user, call makeGrid()
sizeInput.addEventListener('submit', (event) => {
  event.preventDefault();
  makeGrid();
});
