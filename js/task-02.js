const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsList = document.querySelector('#ingredients');
const ingredientsItems = ingredients.map(ingredient => {
  const list = document.createElement('li');
  list.classList.add('item');
  list.textContent = `${ingredient}`;
  return list;
});
ingredientsList.append(...ingredientsItems);
console.log(ingredientsItems);