import { createComputer, createPlayer } from "./player"

const displayGame = () => {
    const computer = createComputer()
    const player = createPlayer()
    let isPlayersTurn = true
    const playerContainer = document.querySelector(".player-container")
    const computerContainer = document.querySelector(".computer-container")
    const compCells = document.getElementsByClassName("c-board-cell")

    const createPlayerDisplay = () => {
        const playerBoard = player.playerGameboard.getBoard()
        console.log(playerBoard)

        for (let i = 0; i < playerBoard.length; i += 1) {
            playerBoard[i] = []
            for (let j = 0; j < playerBoard.length; j += 1) {
                const cell = document.createElement("td")
                cell.classList.add("p-board-cell")
                cell.dataset.x = i
                cell.dataset.y = j
                // cell.setAttribute("x", i)
                // cell.setAttribute("y", j)
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
        player.grid = playerBoard
        console.log(player.grid)
    }

    createPlayerDisplay()

    const createCompDisplay = () => {
        const compBoard = computer.computerGameboard.getBoard()

        for (let i = 0; i < compBoard.length; i += 1) {
            compBoard[i] = []
            for (let j = 0; j < compBoard.length; j += 1) {
                const cell = document.createElement("td")
                cell.classList.add("c-board-cell")
                cell.dataset.x = i
                cell.dataset.y = j
                // cell.setAttribute("x", i)
                // cell.setAttribute("y", j)
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
            // eslint-disable-next-line no-loop-func
            compCells[i].addEventListener("click", (e) => {
                if (compCells[i].textContent.includes("true" || "false")) {
                    return false
                }
                if (isPlayersTurn === false) {
                    return false
                }
                const xPos = e.currentTarget.getAttribute("x")
                const yPos = e.currentTarget.getAttribute("y")
                compCells[i].textContent = player.sendAttack(Number(xPos), Number(yPos), computer)
                console.log("Player attacked")
                isPlayersTurn = false
                return true
            })
        }
        return false
    }

    const displayCompAttk = () => {
        const result = computer.sendAttack(player)

        if (isPlayersTurn === true) {
            return false
        }
        const randomX = result[0]
        const randomY = result[1]
        const compResult = result[2]
        player.grid[randomX][randomY].textContent = compResult
        console.log("Computer attacked")
        isPlayersTurn = true
        return true
    }
    return { createPlayerDisplay, createCompDisplay, displayCompAttk, displayPlayerAttk }
}

const DOM = displayGame()
export default DOM

DOM.displayPlayerAttk()

setTimeout(() => {
    DOM.displayCompAttk()
}, 2000);


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