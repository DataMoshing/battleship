import createGame from "./game";

const playerContainer = document.querySelector(".player-container")
const computerContainer = document.querySelector(".computer-container")
const compCells = document.getElementsByClassName("c-board-cell")

const game = createGame()

const createPlayerDisplay = () => {
    const playerBoard = game.player.playerGameboard.getBoard()

    for (let i = 0; i < playerBoard.length; i += 1) {
        playerBoard[i] = []
        for (let j = 0; j < playerBoard.length; j += 1) {
            const cell = document.createElement("td")
            cell.classList.add("p-board-cell")
            cell.setAttribute("x", i)
            cell.setAttribute("y", j)
            playerBoard[i][j] = cell
        }
    }

    for (let i = 0; i < 10; i += 1) {
        const row = document.createElement("tr")
        for (let j = 0; j < 10; j += 1) {
            row.append(playerBoard[i][j])
        }
        row.classList.add("p-board-row")
        playerContainer.append(row)
    }
    game.player.grid = playerBoard
    console.log(game.player.grid)
}

createPlayerDisplay()

const createCompDisplay = () => {
    const compBoard = game.computer.computerGameboard.getBoard()

    for (let i = 0; i < compBoard.length; i += 1) {
        compBoard[i] = []
        for (let j = 0; j < compBoard.length; j += 1) {
            const cell = document.createElement("td")
            cell.classList.add("c-board-cell")
            cell.setAttribute("x", i)
            cell.setAttribute("y", j)
            compBoard[i][j] = cell
        }
    }

    for (let i = 0; i < 10; i += 1) {
        const row = document.createElement("tr")
        for (let j = 0; j < 10; j += 1) {
            row.append(compBoard[i][j])
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
            compCells[i].textContent = game.player.sendAttack(Number(xPos), Number(yPos), game.computer)
            return true
        })
    }
}

displayPlayerAttk()

game.player.sendAttack(1, 2, game.computer)

game.computer.placeShipHorizontal(game.carrier)
game.computer.placeShipVertical(game.battleship)
game.player.placeShipHorizontal(1, 2, game.carrier)
game.player.placeShipVertical(6, 6, game.battleship)

const displayCompAttk = () => {
    const result = game.computer.sendAttack(game.player)

    const randomX = result[0]
    const randomY = result[1]
    const compResult = result[2]

    game.player.grid[randomX][randomY].textContent = compResult
}

displayCompAttk()

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