const inputSize = document.querySelector('#font-size-control')
const spanText = document.querySelector('#text')

inputSize.addEventListener('change', inputFontSize);

function inputFontSize(event) {
    inputSize.range = event.currentTarget.value;
    spanText.style.fontSize = `${event.target.value}px`;
}