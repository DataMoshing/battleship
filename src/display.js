import { createComputer, createPlayer } from "./player"
import createShip from "./ship"
import { startGameLoop } from "./game"

const displayGame = () => {
    const computer = createComputer()
    const player = createPlayer()
    let isPlayersTurn = true

    const playerContainer = document.querySelector(".player-container")
    const computerContainer = document.querySelector(".computer-container")
    const compCells = document.getElementsByClassName("c-board-cell")
    const playerModal = document.querySelector(".player")
    const closePlayerBtn = document.querySelector(".close-button")
    const compModal = document.querySelector(".computer")
    const closeCompButton = document.querySelector(".comp-close-button")
    const startBtn = document.getElementById("startBtn")

    const createPlayerDisplay = () => {
        const playerBoard = player.playerGameboard.getBoard()

        const carrier = createShip(5, "Carrier")
        const battleship = createShip(4, "Battleship")
        const destroyer = createShip(3, "Destroyer")
        const submarine = createShip(3, "Submarine")
        const patrolBoat = createShip(2, "Patrol Boat")

        player.placeShipHorizontal(0, 2, carrier)
        player.placeShipVertical(2, 5, battleship)
        player.placeShipHorizontal(7, 0, destroyer)
        player.placeShipVertical(3, 1, submarine)
        player.placeShipVertical(8, 7, patrolBoat)

        for (let i = 0; i < playerBoard.length; i += 1) {
            playerBoard[i] = []
            for (let j = 0; j < playerBoard.length; j += 1) {
                const cell = document.createElement("td")
                cell.classList.add("p-board-cell")
                cell.dataset.x = i
                cell.dataset.y = j
                playerBoard[i][j] = cell
            }
        }

        playerBoard[0][2].classList.add("carrier")
        playerBoard[0][3].classList.add("carrier")
        playerBoard[0][4].classList.add("carrier")
        playerBoard[0][5].classList.add("carrier")
        playerBoard[0][6].classList.add("carrier")

        playerBoard[2][5].classList.add("battleship")
        playerBoard[3][5].classList.add("battleship")
        playerBoard[4][5].classList.add("battleship")
        playerBoard[5][5].classList.add("battleship")

        playerBoard[7][0].classList.add("destroyer")
        playerBoard[7][1].classList.add("destroyer")
        playerBoard[7][2].classList.add("destroyer")

        playerBoard[3][1].classList.add("submarine")
        playerBoard[4][1].classList.add("submarine")
        playerBoard[5][1].classList.add("submarine")

        playerBoard[8][7].classList.add("patrol-boat")
        playerBoard[9][7].classList.add("patrol-boat")

        for (let i = 0; i < 10; i += 1) {
            const row = document.createElement("tr")
            for (let j = 0; j < 10; j += 1) {
                row.append(playerBoard[i][j])
            }
            row.classList.add("p-board-row")
            playerContainer.append(row)
        }
        player.grid = playerBoard
    }

    createPlayerDisplay()

    const createCompDisplay = () => {
        const compBoard = computer.computerGameboard.getBoard()

        const carrier = createShip(5, "Carrier")
        const battleship = createShip(4, "Battleship")
        const destroyer = createShip(3, "Destroyer")
        const submarine = createShip(3, "Submarine")
        const patrolBoat = createShip(2, "Patrol Boat")

        computer.placeShipHorizontal(carrier)
        computer.placeShipVertical(battleship)
        computer.placeShipHorizontal(destroyer)
        computer.placeShipVertical(submarine)
        computer.placeShipHorizontal(patrolBoat)

        for (let i = 0; i < compBoard.length; i += 1) {
            compBoard[i] = []
            for (let j = 0; j < compBoard.length; j += 1) {
                const cell = document.createElement("td")
                cell.classList.add("c-board-cell")
                cell.dataset.x = i
                cell.dataset.y = j
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
        computer.grid = compBoard
    }

    createCompDisplay()

    const togglePlayerModal = () => {
        playerModal.classList.toggle("show-player")
    }

    const toggleCompModal = () => {
        compModal.classList.toggle("show-computer")
    }

    const toggleStartGame = () => {
        startBtn.style.visibility = "hidden"
        startGameLoop()


    }

    const playerWins = () => {
        if (computer.computerGameboard.allSunk()) {
            return true
        }
        return false
    }

    const computerWins = () => {
        if (player.playerGameboard.allSunk()) {
            return true
        }
        return false
    }

    closePlayerBtn.addEventListener("click", togglePlayerModal)
    closeCompButton.addEventListener("click", toggleCompModal)
    startBtn.addEventListener("click", toggleStartGame)

    const displayCompAttk = () => {
        playerWins()
        computerWins()

        const result = computer.sendAttack(player)

        if (isPlayersTurn === true) {
            return false
        }
        if (result) {
            const randomX = result[0]
            const randomY = result[1]
            const compResult = result[2]
            if (compResult === false) {
                player.grid[randomX][randomY].classList.add("comp-miss")
            } else {
                player.grid[randomX][randomY].classList.add("comp-hit")
            }
            isPlayersTurn = true
            return true
        }
        return false
    }
    const displayPlayerAttk = () => {
        playerWins()
        computerWins()

        for (let i = 0; i < compCells.length; i += 1) {
            // eslint-disable-next-line no-loop-func
            compCells[i].addEventListener("click", (e) => {
                if (compCells[i].classList.value.includes("c-board-cell player-miss" || "c-board-cell player-hit")) {
                    return false
                }
                if (isPlayersTurn === false) {
                    return false
                }
                const xPos = e.currentTarget.getAttribute("data-x")
                const yPos = e.currentTarget.getAttribute("data-y")

                if (player.sendAttack
                    (Number(xPos), Number(yPos), computer) === true) {
                    compCells[i].classList.add("player-hit")
                }
                if (player.sendAttack
                    (Number(xPos), Number(yPos), computer) === false) {
                    compCells[i].classList.add("player-miss")
                }
                isPlayersTurn = false
                return true
            })
        }
        return false
    }

    return {
        createPlayerDisplay, createCompDisplay, displayCompAttk, displayPlayerAttk, player, computer, playerContainer, toggleCompModal, togglePlayerModal, playerWins,
        computerWins
    }
}

const DOM = displayGame()

export default DOM