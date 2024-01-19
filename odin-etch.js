const total_num_grids = 4;
let count = 0;
let test = 1;
let colorChange = "red";
const containerGrid = document.querySelector("#container-grid");
const box = document.getElementsByClassName("boxes");

for(i = 0; i < total_num_grids; i++) {
    for(j = 0; j < total_num_grids; j++) {
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

for(let i = 0; i < total_num_grids*total_num_grids; i++) {
    box[i].style.height= "50px";
}

containerGrid.addEventListener("click", changeBGC);

function changeBGC() {
    test++;
    if(test % 2 != 0 && test > 0) {
        for(let i = 0; i < total_num_grids*total_num_grids; i++) { //mouseover event is permanently inside for loop, figure out why, this is why remove event listener won't work
            box[i].addEventListener("mouseover", function testing() {
                console.log(i);
                box[i].style.background = colorChange;
            });
        }
    }
    if(test % 2 == 0 && test > 0) {
        for(let i = 0; i < total_num_grids*total_num_grids; i++) { //mouseover event is permanently inside for loop, figure out why, this is why remove event listener won't work
            box[i].addEventListener("mouseover", function testing() {
                console.log(i);
                    box[i].style.background = "";
            });
        }
    }

}
