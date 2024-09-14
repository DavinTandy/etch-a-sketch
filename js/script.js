const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const container = document.getElementById("container");
const colorButton = document.getElementById("color-picker");
const buttons = document.getElementsByClassName("button");
const rainbowColor = document.getElementById("rainbow-button");

slider.addEventListener("input", resizeGrid);
window.addEventListener("load", resizeGrid);

colorButton.addEventListener("click", removeButtonActive)

for (let i = 0; i < buttons.length - 1; i++) {
    buttons[i].addEventListener("click", function() {
        removeButtonActive();
        this.className += " button-active";
    })
}

rainbowColor.addEventListener("click", hoverEffect);
colorButton.addEventListener("click", hoverEffect);

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
    const colorList = ["#33A8C7", "#52E3E1", "#A0E426", "#FDF148", "#FFAB00", "#F77976", "#F050AE", "#D883FF", "#9336FD"];

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    if (rainbowColor.classList.contains("button-active")) {
        for (let i = 0; i < grid.length; i++) {
            function randomColor() {
                return colorList[(Math.floor(random(0, colorList.length)))];
            }

            grid[i].addEventListener("mouseover", function(){grid[i].style.backgroundColor = randomColor()});
        }
    } else {
        for (let i = 0; i < grid.length; i++) {
            grid[i].addEventListener("mouseover", function(){grid[i].style.backgroundColor = color.value});
        }
    }
}

function resizeGrid() {
    deleteElement();
    updateSliderText();
    createGrid();
    hoverEffect();
}

function removeButtonActive() {
    const currentActive = document.getElementsByClassName("button-active");
    if (currentActive.length > 0) {
        currentActive[0].className = currentActive[0].className.replace(" button-active", "");
    }
}