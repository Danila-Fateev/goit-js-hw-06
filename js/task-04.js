let counterValue = ;



document.querySelector("[data-action]").addEventListener("click", () => counterValue -= 1)

console.log(counterValue);

const spanEl = document.querySelector("#value");
spanEl.textContent = counterValue;
