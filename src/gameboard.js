// import { createShip } from "./ship"

const Gameboard = () => {
    const rows = 10
    const colums = 10

    const board = []
    // Need to reduce array amount to a single value
    const cellCount = board.reduce((row, columns) => row + columns.length, 0)

    const getBoard = () => [...board]

    for (let i = 0; i < rows; i += 1) {
        board[i] = []
        for (let j = 0; j < colums; j += 1) {
            board[i][j] = null
        }
    }

    const placeShip = (x, y) => {
    }

    return { placeShip, getBoard, cellCount }
}

const gameboard = Gameboard()

export default gameboard