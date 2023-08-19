import createGame from "./game";

const playerContainer = document.querySelector(".player-container")
const computerContainer = document.querySelector(".computer-container")
// const shipContainer = document.querySelector(".ship-container")
const compCells = document.getElementsByClassName("c-board-cell")
const playerCells = document.getElementsByClassName("p-board-cell")

const game = createGame()

const createPlayerDisplay = () => {
    const board = game.player.playerGameboard.getBoard()

    for (let i = 0; i < board.length; i += 1) {
        board[i] = []
        for (let j = 0; j < board.length; j += 1) {
            const cell = document.createElement("td")
            cell.classList.add("p-board-cell")
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
        row.classList.add("p-board-row")
        playerContainer.append(row)
    }
}

createPlayerDisplay()

const createCompDisplay = () => {
    const board = game.player.playerGameboard.getBoard()

    for (let i = 0; i < board.length; i += 1) {
        board[i] = []
        for (let j = 0; j < board.length; j += 1) {
            const cell = document.createElement("td")
            cell.classList.add("c-board-cell")
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
        row.classList.add("c-board-row")
        computerContainer.append(row)
    }
}

createCompDisplay()


const displayPlayerAttk = () => {
    for (let i = 0; i < compCells.length; i += 1) {
        compCells[i].addEventListener("click", (e) => {
            if (compCells[i].textContent.includes("true" || "false")) {
                return false
            }
            const xPos = e.currentTarget.getAttribute("x")
            const yPos = e.currentTarget.getAttribute("y")
            compCells[i].textContent = game.player.sendAttack(xPos, yPos, game.computer)
            return true
        })
    }
}

game.player.placeShipHorizontal(1, 2, game.carrier)
game.computer.placeShipHorizontal(game.carrier)
game.computer.placeShipVertical(game.battleship)

const displayCompAttk = () => {
    for (let i = 0; i < playerCells.length; i += 1) {
        playerCells[i].textContent = game.computer.sendAttack(game.player)
    }
}


displayCompAttk()
displayPlayerAttk()

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