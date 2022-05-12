/*Get the values from the input boxes*/

const rows = document.getElementById("rows");
const columns = document.getElementById("columns");
const submit = document.getElementById("submitbutton");
const grid = document.getElementById("grid");
const colors = {1: "#ff0000", 2:"#00ff00", 3:"#0000ff"}

submit.addEventListener("click", makeGrid);

function makeGrid() {
  console.log("somebody clicked the button");
  let numRows = rows.value;
  let numColumns = columns.value;
  console.log(numRows, numColumns);

  grid.innerHTML = "";
  for (let i = 0; i < numRows; i++) {
    let rowDiv = document.createElement("div");
    rowDiv.classList.add("row");
    rowDiv.setAttribute("id", "row" + i);
    grid.appendChild(rowDiv);
  
    for (let j = 0; j < numColumns; j++) {
      let cell = document.createElement("div");
      cell.className = "cell";
      cell.setAttribute("id", "cell" + i + j);
      cell.setAttribute("color", 1);
      cell.style.backgroundColor = colors[1];
      rowDiv.appendChild(cell);
    
      cell.addEventListener("click", changeColor);
      cell.addEventListener("mouseover", changeColor);
    }
  }
}

function changeColor(event) {
  if (event.type === "click" || (event.type === "mouseover" && event.buttons === 1) ) {
    let cell = event.target;
    let colorNumber = Number(cell.getAttribute("color"));
    colorNumber = colorNumber + 1;
    if (colorNumber > 3) {
      colorNumber = 1;
    }
    
    cell.style.backgroundColor = colors[colorNumber];
    cell.setAttribute("color", colorNumber);
  }
}
