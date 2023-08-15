import createShip from "./ship";

const playerContainer = document.querySelector(".player-container")
const shipContainer = document.querySelector(".ship-container")
const cells = document.getElementsByClassName("board-cell")

const columns = 10;
const rows = 10
const displayPlayerGrid = () => {
    for (let i = 0; i < rows; i += 1) {
        const row = document.createElement("tr")
        row.classList.add("board-row")
        playerContainer.append(row)
        for (let j = 0; j < columns; j += 1) {
            const cell = document.createElement("td")
            cell.classList.add("board-cell")
            cell.setAttribute("x", i)
            cell.setAttribute("y", j)
            row.append(cell)
        }
    }
}

displayPlayerGrid()

// const carrierDisplay = () => {
//     const carrier = createShip(5, "Carrier")
//     const carrierDiv = document.createElement("div")
//     carrierDiv.classList.add("carrier")
//     carrierDiv.setAttribute("draggable", true)

//     for (let i = 0; i < carrier.getLength(); i += 1) {
//         const carrierCell = document.createElement("div")
//         carrierCell.classList.add("carrier-cell")
//         carrierCell.setAttribute("data-index", i)
//         carrierDiv.append(carrierCell)
//         shipContainer.append(carrierDiv)
//     }
// }

// carrierDisplay()