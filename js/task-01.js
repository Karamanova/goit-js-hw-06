const categories = document.querySelector('#categories');
console.log(`Number of categories: ${categories.children.length}`);
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const itemsTitle = item.querySelector('h2');
  console.log(`Category: ${itemsTitle.textContent}`);
  const quantityElements = item.querySelectorAll('li');
  console.log(`Elements: ${quantityElements.length}`);
});