const container = document.getElementsByClassName("container")[0];

const smallContainer = document.createElement("div");
smallContainer.className = "small-container";
smallContainer.style.width = `${800/16}px`;
smallContainer.style.height = `${800/16}px`;
smallContainer.style.backgroundColor = "#EBE9E1";
smallContainer.style.margin = "0px";
smallContainer.style.padding = "0px";

for (let i = 0; i < 256; i++) {
    container.appendChild(smallContainer.cloneNode(true));
}

const allSmallContainer = document.getElementsByClassName("small-container");
for (let i = 0; i < allSmallContainer.length; i++) {
    allSmallContainer[i].addEventListener("mouseout", function(){
        allSmallContainer[i].style.backgroundColor = "#2C3531";
    })
}