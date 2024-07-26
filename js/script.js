const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");
const container = document.getElementById("container");

slider.addEventListener("input", function(){sliderValue.innerHTML = "Grid size: " + slider.value + "x" + slider.value});

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.classList.add("grids")
    div.style.height = "50px";
    div.style.width = "50px";
    container.appendChild(div);
}

const grids = document.getElementsByClassName("grids");

for (let i = 0; i < grids.length; i++) {
    grids[i].addEventListener("mouseover", function(){grids[i].style.backgroundColor = "#2C3531"});
}