const container = document.getElementById("container");

for (let i = 0; i < 256; i++) {
    const div = document.createElement("div");
    div.style.height = "50px";
    div.style.width = "50px";
    container.appendChild(div);
}