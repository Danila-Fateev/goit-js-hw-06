function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const inputEl = document.querySelector('div#controls > input');
const createBtn = document.querySelector('button[data-create]');
const destroyBtn = document.querySelector('button[data-destroy]');
const boxesEl = document.querySelector('#boxes');
boxesEl.style.display = 'flex';
boxesEl.style.flexWrap = 'wrap';
boxesEl.style.alignItems = 'center';

createBtn.addEventListener('click', () => {
  for (let i = 0; i < inputEl.value; i += 1){
    const boxEl = document.createElement('div');
    boxEl.classList.add('box');
    boxEl.style.width = `${30 + i * 10}px`;
    boxEl.style.height = `${30 + i * 10}px`;
    boxEl.style.backgroundColor = `${getRandomHexColor()}`;

    boxesEl.append(boxEl)
  }
})

destroyBtn.addEventListener('click', () => boxesEl.innerHTML = '')