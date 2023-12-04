console.log("============ Task 5 ============");

const input = document.querySelector("#controls input");
const renderBtn = document.querySelector('#controls .create');
const destroyBtn = document.querySelector('#controls .destroy');
const boxes = document.querySelector("#boxes");

renderBtn.addEventListener("click", () => { 
    if (input.value === "" || input.value < 1 || input.value > 100) {
        return;
    } else {
        boxes.innerHTML = "";
        boxes.append(...createBoxes(input.value));
        input.value = "";
    }
});

destroyBtn.addEventListener("click", () => { 
    destroyBoxes();
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
    const boxes = [];
    let size = 30;
    for (let i = 0; i < amount; i++) {
        const box = document.createElement("div");
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        boxes.push(box);
        size += 10;
    }
    return boxes;
}

function destroyBoxes() {
    boxes.innerHTML = "";
    input.value = "";
}



console.log("================================");