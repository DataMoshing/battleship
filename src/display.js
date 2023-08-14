// import createGame from "./game"

const playerContainer = document.querySelector(".player-container")
// const computerContainer = document.querySelector(".computer-container")
// const table = document.querySelector(".table")
const cells = document.getElementsByClassName("cells")

const columns = 10;
const rows = 10
const displayPlayerGrid = (x, y) => {
    for (let i = 0; i < rows; i += 1) {
        const row = document.createElement("tr")
        playerContainer.append(row)
        for (let j = 0; j < columns; j += 1) {
            const cell = document.createElement("td")
            cell.setAttribute("x", i)
            cell.setAttribute("y", j)
            row.append(cell)
        }
    }
}
// for (let i = 0; i < 100; i += 1) {
//     const cell = document.createElement("div")
//     cell.classList.add("cells")
//     playerContainer.append(cell)
// }

displayPlayerGrid(10, 10)


for (let i = 0; i < cells.length; i += 1) {
    cells[i].setAttribute("y", 0)
    cells[i].setAttribute("x", i)
}




