import createGame from "./game";

const table = document.querySelector(".player-container")
// const shipContainer = document.querySelector(".ship-container")
// const cells = document.getElementsByClassName("board-cell")
const game = createGame()

const displayPlayerGrid = () => {
    const board = game.player.playerGameboard.getBoard()

    for (let i = 0; i < board.length; i += 1) {
        board[i] = []
        for (let j = 0; j < board.length; j += 1) {
            // board[i][j] = document.createElement("div")
            const cell = document.createElement("td")
            cell.classList.add("board-cell")
            cell.setAttribute("x", i)
            cell.setAttribute("y", j)
            board[i][j] = cell
        }
    }

    for (let i = 0; i < 10; i += 1) {
        const row = document.createElement("tr")
        for (let j = 0; j < 10; j += 1) {
            row.append(board[i][j])
        }
        row.classList.add("board-row")
        table.append(row)
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