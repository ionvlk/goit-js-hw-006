const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};

const createBoxes = (amount) => {
  const boxes = document.querySelector("#boxes");
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxes.appendChild(box);
    size += 10;
  }
};

const destroyBoxes = () => {
  document.querySelector("#boxes").innerHTML = "";
};

const controls = document.querySelector("#controls");
const createButton = controls.querySelector('[data-create]');
const destroyButton = controls.querySelector('[data-destroy]');
const input = controls.querySelector("input");

createButton.addEventListener("click", () => {
  createBoxes(Number(input.value));
});

destroyButton.addEventListener("click", destroyBoxes);
