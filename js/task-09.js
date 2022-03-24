function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const spanEl = document.querySelector('span.color');

const buttonEl = document.querySelector('button.change-color');
buttonEl.addEventListener('click', () => {
  const bgColor = getRandomHexColor();
  
  document.body.style.backgroundColor = bgColor;
  spanEl.textContent = bgColor;
})