// import Ship from "./ship"
import createShip from "./ship"

const Gameboard = () => {
    const rows = 10
    const columns = 10
    const board = []
    const missedCoord = []
    const shipArr = []
    const attackCoord = []

    const getBoard = () => [...board]

    const Water = () => {
        let isHit = false
        const hit = () => {
            isHit = true
        };
        return {
            type: "water",
            hit,
            get isHit() {
                if (isHit) {
                    return "BLOOP! Miss."
                }
                return "Ship hit!"
            }
        }
    }

    for (let i = 0; i < rows; i += 1) {
        board[i] = []
        for (let j = 0; j < columns; j += 1) {
            board[i][j] = Water()
        }
    }

    // Need to reduce array amount to a single value
    const cellCount = getBoard().reduce((row, col) => row + col.length, 0)

    const placeHorizontal = (x, y, ship) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()

        if (x + shipsLength > columns) {
            console.log("Cannot place ship horizontally, out of bounds.");
            return false;
        }
        // Places ship horizontally
        for (let i = 0; i < shipsLength; i += 1) {
            if (currentBoard[x][y + i].type !== "water") {
                console.log("Ships cannot overlap!")
                return false
            }
            // Change ship.name back to ship
            currentBoard[x][y + i] = ship.name
            shipArr.push(ship)
        }
        return true
    }
    const placeVertical = (x, y, ship) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()

        if (y + shipsLength > rows) {
            console.log("Cannot place ship vertically, out of bounds.")
            return false
        }
        // Places ship vertically
        for (let i = 0; i < shipsLength; i += 1) {
            if (currentBoard[x + i][y].type !== "water") {
                console.log("Ships cannot overlap!")
                return false
            }
            // Change ship.name back to ship
            currentBoard[x + i][y] = ship.name
            shipArr.push(ship)
        }
        return true
    }
    function receiveAttack(x, y) {
        const water = Water()
        const currentBoard = getBoard()

        if (currentBoard[x][y] === "X") {
            console.log("Cannot hit same spot!")
            return false
        }
        if (currentBoard[x][y].hit()) {
            console.log(currentBoard[x][y])
            attackCoord.push(x, y)
            currentBoard[x][y] = "X"
            console.log(water.isHit)
        } else {
            water.hit()
            missedCoord.push(x, y)
            currentBoard[x][y] = "miss"
            console.log(water.isHit)
            return false
        }
        return true
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
    return { placeVertical, placeHorizontal, getBoard, cellCount, receiveAttack, allSunk }
}

const gameboard = Gameboard()
const testShip = createShip(4, "Boat")
gameboard.placeVertical(1, 3, testShip)
gameboard.receiveAttack(1, 8)

// gameboard.allSunk()

export default Gameboard

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