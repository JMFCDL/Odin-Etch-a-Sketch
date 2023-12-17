const total_num_grids = 16;
let count = 0;
const container = document.querySelector("#container")

for(i = 0; i < total_num_grids; i++) {
    for(j = 0; j < total_num_grids; j++) {
        let grid = document.createElement("div");
        count++;
        grid.textContent = `hello + ${count}`;
        container.appendChild(grid);
    }
    let breakline = document.createElement("p");
    breakline.setAttribute("class", "breaker");
    container.appendChild(breakline);
}