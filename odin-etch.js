let total_num_grids = 4;
let count = 0;
let gridHeight = 50;
let temp = 0;
let length = 0;
let changeColor = "red";
let storageVariable = (parseInt(localStorage.getItem("storageVariable")));


const body = document.getElementById("etch-body");
const containerSet = document.getElementById("container-settings");
const containerGrid = document.getElementById("container-grid");
const box = document.getElementsByClassName("boxes");

function gridCreation() {
    console.log(`storage variable before everything is ${storageVariable}`)
    if(isNaN(storageVariable) || storageVariable === " ") {
        storageVariable = total_num_grids;
    }
    for(i = 0; i < storageVariable; i++) {
        for(j = 0; j < storageVariable; j++) {
        let grid = document.createElement("div");
        grid.setAttribute("class", "boxes");
        count++;
        grid.textContent = `${count}`;
        containerGrid.appendChild(grid);
        }
        let breakline = document.createElement("div");
        breakline.setAttribute("class", "breaker");
        containerGrid.appendChild(breakline);
    }
}

function gridHeightAdjustment() {
    for(let i = 0; i < storageVariable*storageVariable; i++) {
        box[i].style.height= gridHeight + "px";
    }
}

function removeGrids() {
    console.log(`in remove, storage is ${storageVariable}`);
    for(i = 0; i < storageVariable; i++) {
        for(j = 0; j < storageVariable; j++) {
            box[0].remove();
        }
    }
}

//creating grid structure

gridCreation();

gridHeightAdjustment();

containerGrid.addEventListener("click", event => { //color fill
    for(let i = 0; i < total_num_grids*total_num_grids; i++) {
        box[i].addEventListener("mouseover", event => {
            box[i].style.background = changeColor;
        });
    }
});

//creating user settings
let title = document.createElement("div");
title.setAttribute("id", "title");
title.textContent = "User Settings";
containerSet.appendChild(title);

let currentColor = document.createElement("div");
currentColor.setAttribute("id", "current");
currentColor.textContent = "Current Color: " + changeColor;
containerSet.appendChild(currentColor);

let decreaseGrid = document.createElement("button");
decreaseGrid.setAttribute("id", "less-grid");
decreaseGrid.textContent = "Less Grid";
containerSet.appendChild(decreaseGrid);

let increaseGrid = document.createElement("button");
increaseGrid.setAttribute("id", "more-grid");
increaseGrid.textContent = "Bigger Grid";
containerSet.appendChild(increaseGrid);

let resetButton = document.createElement("button");
resetButton.setAttribute("id", "RB");
resetButton.textContent = "Reset Grid";
containerSet.appendChild(resetButton);

containerSet.addEventListener("click", event => {
    removeGrids();
    count = 0;
    switch(event.target.id) {
        case "less-grid":
            storageVariable--;
            break;
        case "more-grid":
            storageVariable++;
            break;
        case "RB":
            storageVariable = total_num_grids;
            break;
    }
    gridCreation();
    gridHeightAdjustment();
    localStorage.setItem("storageVariable", storageVariable);
});