// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

const nameSpan = document.querySelector('#name-output');
const input = document.querySelector('#name-input');

const onInputPrinting = event => {
    nameSpan.textContent = event.currentTarget.value;
    event.currentTarget.value.trim() === '' ? nameSpan.textContent = 'Anonymous' : null;
}
input.addEventListener('input', onInputPrinting);
