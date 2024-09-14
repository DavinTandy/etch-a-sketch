const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const container = document.getElementById("container");

slider.addEventListener("input", resizeGrid);
window.addEventListener("load", resizeGrid);

function deleteElement() {
    const grid = document.getElementsByClassName("grid");

    while (grid.length > 0) {
        grid[0].parentNode.removeChild(grid[0]);
    }
}

function updateSliderText() {
    sliderValue.innerHTML = "Grid size: " + slider.value + "x" + slider.value;
}

function createGrid() {
    for (let i = 0; i < slider.value*slider.value; i++) {
        const div = document.createElement("div");

        div.classList.add("grid");
        div.style.height = 800/slider.value + "px";
        div.style.width = 800/slider.value + "px";
        
        container.appendChild(div);
    }
}

function hoverEffect() {
    const grid = document.getElementsByClassName("grid");
    const color = document.getElementById("color-picker");

    for (let i = 0; i < grid.length; i++) {
        grid[i].addEventListener("mouseover", function(){grid[i].style.backgroundColor = color.value});
    }
}

function resizeGrid() {
    deleteElement();
    updateSliderText();
    createGrid();
    hoverEffect();
}