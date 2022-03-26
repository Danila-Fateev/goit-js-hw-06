const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");
const elements = [];

ingredients.forEach(el => {
  const newEl = document.createElement("li");
      newEl.textContent = el;
  newEl.classList.add("item");
    elements.push(newEl);
})

ingredientsEl.append(...elements);

// function addItemsToList(array) {
//   for (let i = 0; i < array.length; i += 1) {
//     const newEl = document.createElement("li");
//       newEl.textContent = array[i];
//   newEl.classList.add("item");
//     elements.push(newEl);
//   }
//   ingredientsEl.append(...elements);
// }
// addItemsToList(ingredients);