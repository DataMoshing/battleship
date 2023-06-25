import testShip from "./ship"

const Gameboard = () => {
    const rows = 10
    const columns = 10
    const board = []
    const missedCoord = []
    // console.log(missedCoord)

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

    const placeShipsHorizontal = (x, y, ship, direction) => {
        const shipsLength = ship.getLength()
        if (direction === "horizontal") {
            if (y + shipsLength > columns) {
                console.log("Cannot place ship horizontally. Out of bounds.");
                return false;
            }
            // Places ship horizontally
            for (let i = 0; i < shipsLength; i += 1) {
                board[x][y + i] = ship.name;
            }
        }
        return true
    }
    const placeShipsVertical = (x, y, ship, direction) => {
        const shipsLength = ship.getLength()
        if (direction === "vertical") {
            if (x + shipsLength > rows) {
                console.log("Cannot place ship vertically. Out of bounds.")
                return false
            }
        }
        // Places ship vertically
        for (let i = 0; i < shipsLength; i += 1) {
            board[x + i][y] = ship.name;
        }
        return true
    }
    function receiveAttack(x, y, ship) {
        // If board has coordinate with ship
        if (board[x][y]) {
            // Send hit to ship
            ship.hit()
            // Mark X where ship has been hit
            board[x][y] = "X"
            console.log(`${ship.name} has been hit!`)
            return true
        }
        // Push missed coordinates to array
        missedCoord.push(x, y)
        console.log(`Attack missed at coordinates : [${x},${y}]`)
        return false
    }
    return { placeShipsVertical, placeShipsHorizontal, getBoard, cellCount, receiveAttack }
}


const gameboard = Gameboard()

gameboard.placeShipsVertical(2, 4, testShip, "horizontal")
// gameboard.receiveAttack(2, 4, testShip)
// gameboard.receiveAttack(2, 7, testShip)
// gameboard.receiveAttack(2, 8, testShip)


export default gameboard

/* Placing ships vertically 
In each iteration  board[x + i][y] is assigned the name of the ship (ship.name) The y coordinate stays the same, while the x coordinate is incremented by i each iteration

By increasing the x coordinate by i in each iteration, the ship is placed vertically on the board.

gameboard.placeShip(2, 4, testShip, "horizontal")

shipsLength is 3
x is 2 and y is 4

Iteration 1: i = 0. board[2 + 0][4] assigns the ship name to board[2][4].
Iteration 2: i = 1. board[2 + 1][4] assigns the ship name to board[3][4].
Iteration 3: i = 2. board[2 + 2][4] assigns the ship name to board[4][4].

After these iterations, the ship occupies the cells (2, 4), (3, 4), and (4, 4)
*/