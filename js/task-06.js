// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const textInput = document.querySelector('#validation-input');
const length = Number(textInput.dataset.length);


textInput.addEventListener("blur", (event) => {
    if (event.currentTarget.value.length === length) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid')
    }
    else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
    
});