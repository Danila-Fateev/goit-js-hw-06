const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector("#ingredients");

ingredients.forEach(el => {
  const newEl = document.createElement("li");
  newEl.textContent = el;
  newEl.classList.add("item");
  ingredientsEl.append(newEl)
})
