const total_num_grids = 4;
let count = 0;
const container = document.querySelector("#container");
const box = document.getElementsByClassName("boxes");

for(i = 0; i < total_num_grids; i++) {
    for(j = 0; j < total_num_grids; j++) {
        let grid = document.createElement("div");
        grid.setAttribute("class", "boxes");
        count++;
        grid.textContent = `${count}`;
        container.appendChild(grid);
    }
    let breakline = document.createElement("div");
    breakline.setAttribute("class", "breaker");
    container.appendChild(breakline);
}

for(let i = 0; i < total_num_grids*total_num_grids; i++) {
    box[i].style.height= "100px";
    box[i].addEventListener("mouseover", event => {
        box[i].style.background = "red";
    });
}