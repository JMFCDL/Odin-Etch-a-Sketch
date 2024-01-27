let total_num_grids = 4;
let count = 0;
let temp = 0;
let length = 0;
let changeColor = "None";
let boxHeight = 50;
let storageVariable = (parseInt(localStorage.getItem("storageVariable")));
const gridHeight = 70;
const gridWidth = 70;
let check = false;


const body = document.getElementById("etch-body");
const containerSet = document.getElementById("container-settings");
const containerGrid = document.getElementById("container-grid");
const containerTitle = document.getElementById("container-title");
const box = document.getElementsByClassName("boxes");
const breaker = document.getElementsByClassName("breaker");

function gridCreation() {
    containerGrid.style.height = gridHeight + "vh";
    containerGrid.style.width = gridWidth + "vw";
    if(isNaN(storageVariable) || storageVariable === " ") {
        storageVariable = total_num_grids;
    }
    for(i = 0; i < storageVariable; i++) {
        for(j = 0; j < storageVariable; j++) {
        let grid = document.createElement("div");
        grid.setAttribute("class", "boxes");
        count++;
        containerGrid.appendChild(grid);
        }
        let breakline = document.createElement("div");
        breakline.setAttribute("class", "breaker");
        containerGrid.appendChild(breakline);
    }
}

function gridHeightAdjustment() {
    for(let i = 0; i < storageVariable*storageVariable; i++) {
        box[i].style.height= ((gridHeight/storageVariable)-0.30) + "vh";
    }
}

function removeGrids() {
    for(i = 0; i < storageVariable; i++) {
        for(j = 0; j < storageVariable; j++) {
            box[0].remove();
        }
    }
}

function removeBreaker() {
    for(i = 0; i < storageVariable; i++) {
        breaker[0].remove();
    }
}

function fillColor() {
    for(let i = 0; i < storageVariable*storageVariable; i++) {
        box[i].addEventListener("mouseover", event => {
            if(event.buttons == 1 || event.buttons == 3) {
                box[i].style.background = changeColor;
            }
        });
    }
}

function eraserButtonClick() {
    for(let i = 0; i < storageVariable*storageVariable; i++) {
        box[i].addEventListener("mouseover", event => {
            if(event.buttons == 1 || event.buttons == 3) {
                box[i].style.background = "white";
            }
        });
    }
}

function deleteGrid() {
    removeBreaker(); 
    removeGrids();
}

//creating grid structure

gridCreation();

gridHeightAdjustment();

fillColor();

let gridTitle = document.createElement("div");
gridTitle.setAttribute("id", "title-grid");
gridTitle.textContent = "Grid";
containerTitle.appendChild(gridTitle);

//creating user settings
let title = document.createElement("div");
title.setAttribute("id", "title");
title.textContent = "User Settings";
containerSet.appendChild(title);

let currentColor = document.createElement("div");
currentColor.setAttribute("id", "current");
currentColor.textContent = "Current Color: " + changeColor;
containerSet.appendChild(currentColor);

let decreaseGridBoxes = document.createElement("button");
decreaseGridBoxes.setAttribute("id", "less-boxes");
decreaseGridBoxes.textContent = "Less boxes in grid";
containerSet.appendChild(decreaseGridBoxes);

let increaseGridBoxes = document.createElement("button");
increaseGridBoxes.setAttribute("id", "more-boxes");
increaseGridBoxes.textContent = "More boxes in grid";
containerSet.appendChild(increaseGridBoxes);

let resetButtonBoxes = document.createElement("button");
resetButtonBoxes.setAttribute("id", "RBB");
resetButtonBoxes.textContent = "Reset Box Amount";
containerSet.appendChild(resetButtonBoxes);

let eraserButton = document.createElement("button");
eraserButton.setAttribute("id", "eraserB");
eraserButton.textContent = ("Eraser");
containerSet.appendChild(eraserButton);

let colorButton = document.createElement("button");
colorButton.setAttribute("id", "colorB");
colorButton.textContent = ("Color");
containerSet.appendChild(colorButton);

let blueButton = document.createElement("button");
blueButton.setAttribute("id", "blueB");
blueButton.textContent = ("Blue");
containerSet.appendChild(blueButton);

let redButton = document.createElement("button");
redButton.setAttribute("id", "redB");
redButton.textContent = ("Red");
containerSet.appendChild(redButton);

let blackButton = document.createElement("button");
blackButton.setAttribute("id", "blackB");
blackButton.textContent = ("Black");
containerSet.appendChild(blackButton);

let greenButton = document.createElement("button");
greenButton.setAttribute("id", "greenB");
greenButton.textContent = ("Green");
containerSet.appendChild(greenButton);

let resetGrid = document.createElement("button");
resetGrid.setAttribute("id", "reset");
resetGrid.textContent = "Blank Canvas";
containerSet.appendChild(resetGrid);


containerSet.addEventListener("click", event => {
    switch(event.target.id) {
        case "less-boxes":
            deleteGrid();
            storageVariable--;
            check = true;
            break;
        case "more-boxes":
            deleteGrid();
            storageVariable++;
            check = true;
            break;
        case "RBB":
            deleteGrid();
            storageVariable = total_num_grids;
            check = true;
            break;
        case "eraserB":
            eraserButtonClick();
            break;
        case "colorB":
            fillColor();
            break;
        case "blueB":
            changeColor = "blue";
            break;
        case "redB":
            changeColor = "red";
            break;
        case "blackB":
            changeColor = "black";
            break;
        case "greenB":
            changeColor = "green";
            break;
        case "reset":
            window.location.reload();
            break;
    }
    if(check === true) {
        gridCreation();
        gridHeightAdjustment();
        fillColor();
        check = false;
    }
    if(event.target.id === "eraserB") {
        eraserButtonClick();
    }
    if(event.target.id === "colorB") {
        fillColor();
    }
    localStorage.setItem("storageVariable", storageVariable);
    currentColor.textContent = "Current Color: " + changeColor;
});
