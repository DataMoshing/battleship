const playerContainer = document.querySelector(".player-container")

const computerContainer = document.querySelector(".computer-container")

const createPlayerGrid = () => {
    for (let i = 0; i < 100; i += 1) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        playerContainer.append(cell)
    }
}

const createComputerGrid = () => {
    for (let i = 0; i < 100; i += 1) {
        const cell = document.createElement("div")
        cell.classList.add("cell")
        computerContainer.append(cell)
    }
}

createPlayerGrid()
createComputerGrid()