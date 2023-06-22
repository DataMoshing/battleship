import testShip from "./ship"

const Gameboard = () => {
    const rows = 10
    const columns = 10
    const board = []

    console.log(board)

    const getBoard = () => [...board]

    for (let i = 0; i < rows; i += 1) {
        board[i] = []
        for (let j = 0; j < columns; j += 1) {
            board[i][j] = null
        }
    }

    // Need to reduce array amount to a single value
    const cellCount = getBoard().reduce((row, col) => row + col.length, 0)

    const placeShip = (x, y, ship, direction) => {
        const shipsLength = ship.getLength();
        if (direction === "horizontal") {
            if (y + shipsLength > columns) {
                console.log("Cannot place ship horizontally. Out of bounds.");
                return false;
            }
            // Places ship horizontally
            for (let i = 0; i < shipsLength; i += 1) {
                board[x][y + i] = ship.name;
            }

        } else if (direction === "vertical") {
            if (x + shipsLength > rows) {
                console.log("Cannot place ship vertically. Out of bounds.");
                return false;
            }
            // Places ship vertically
            for (let i = 0; i < shipsLength; i += 1) {
                board[x + i][y] = ship.name;
            }
        } else {
            console.log("Invalid direction. Please specify 'horizontal' or 'vertical'.");
            return false
        }
        return true
    }
    return { placeShip, getBoard, cellCount }
}
const gameboard = Gameboard()

gameboard.placeShip(2, 4, testShip, "horizontal")


export default gameboard

