// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refIngredList = document.querySelector('#ingredients');
const refItems = ingredients.map((item) => {
  const refCreateElement = document.createElement('li');
  refCreateElement.classList.add('item');
  refCreateElement.textContent = item;
  return refCreateElement;
});
console.log('refItems');
refIngredList.append(...refItems)