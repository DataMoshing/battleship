import { testShip, testShip2 } from "./ship"

const Gameboard = () => {
    const rows = 10
    const columns = 10
    const board = []
    const missedCoord = []
    const shipArr = []
    console.log(board)
    console.log(shipArr)
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
        const currentBoard = getBoard()
        if (direction === "horizontal") {
            if (y + shipsLength > columns) {
                console.log("Cannot place ship horizontally, out of bounds.");
                return false;
            }
        }
        // Places ship horizontally
        for (let i = 0; i < shipsLength; i += 1) {
            if (currentBoard[x][y + i] !== null) {
                console.log("Ships cannot overlap!")
                return false
            }
            currentBoard[x][y + i] = ship.name
            shipArr.push(ship)
        }
        return true
    }
    const placeShipsVertical = (x, y, ship, direction) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()
        if (direction === "vertical") {
            if (x + shipsLength > rows) {
                console.log("Cannot place ship vertically, out of bounds.")
                return false
            }
        }
        // Places ship vertically
        for (let i = 0; i < shipsLength; i += 1) {
            if (currentBoard[x][y + i] !== null) {
                console.log("Ships cannot overlap!")
                return false
            }
            currentBoard[x + i][y] = ship.name
            shipArr.push(ship)
        }
        return true
    }
    function receiveAttack(x, y, ship) {
        const currentBoard = getBoard()
        // If board has coordinate with ship
        if (currentBoard[x][y]) {
            // Send hit to ship
            ship.hit()
            // Mark X where ship has been hit
            currentBoard[x][y] = "X"
            console.log(`${ship.name} has been hit!`)
            if (ship.isSunk()) {
                console.log(`${ship.name} has sunk!`)
            }
            return true
        }
        // Push missed coordinates to array
        missedCoord.push(x, y)
        console.log(`Attack missed at coordinates: [${x},${y}]`)
        currentBoard[x][y] = "miss"
        return false
    }
    function allSunk() {
        shipArr.every((ship) => {
            if (!ship.isSunk()) {
                console.log("All ships are not sunk.")
                return false
            }
            return console.log("All ships are sunk!")
        })
        return true
    }
    return { placeShipsVertical, placeShipsHorizontal, getBoard, cellCount, receiveAttack, allSunk }
}


const gameboard = Gameboard()

gameboard.placeShipsHorizontal(2, 4, testShip, "horizontal")
gameboard.placeShipsVertical(2, 4, testShip2, "vertical")

// gameboard.receiveAttack(2, 4, testShip)
// gameboard.receiveAttack(2, 5, testShip)
// gameboard.receiveAttack(2, 6, testShip)
// gameboard.receiveAttack(5, 4, testShip2)
// gameboard.receiveAttack(6, 4, testShip2)

// gameboard.receiveAttack(7, 2, testShip)

gameboard.allSunk()



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