const boxesContainer = document.querySelector("#boxes");
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const input = document.querySelector('input[type="number"]');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function getRandomHexColor() {
  return `#${(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

function createBoxes() {
  const count = input.value;
  let width = 30;
  let height = 30;

  for (let i = 0; i < count; i++) {
    const box = document.createElement('div');
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    width += 10;
    height += 10;
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = '';
}
