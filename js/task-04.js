let counterValue = 0;

const spanEl = document.querySelector("#value");

document.querySelector('button[data-action="decrement"]').addEventListener("click", () => {
    counterValue -= 1;
    spanEl.textContent = counterValue;
})

document.querySelector('button[data-action="increment"]').addEventListener("click", () => {
    counterValue += 1;
    spanEl.textContent = counterValue;
})
