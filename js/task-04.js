// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0
const btnEl = document.querySelectorAll('button');
const valueEl = document.querySelector('#value');
btnEl[0].addEventListener('click', () => {
  valueEl.textContent = counterValue -= 1
})
btnEl[1].addEventListener('click', () => {
  valueEl.textContent = counterValue += 1
})