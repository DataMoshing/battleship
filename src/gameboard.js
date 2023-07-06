import Ship from "./ship"

const Gameboard = () => {
    const rows = 10
    const columns = 10
    const board = []
    // const missedCoord = []
    const shipArr = []
    // const attackCoord = []
    console.log(board)

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
                    return "Ship hit!"
                }
                return "BLOOP! Miss."
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

    const placeHorizontal = (x, y, ship, direction) => {
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
            if (currentBoard[x][y + i].type !== "water") {
                console.log("Ships cannot overlap!")
                return false
            }
            currentBoard[x][y + i] = ship
            shipArr.push(ship)
        }
        return true
    }
    const placeVertical = (x, y, ship, direction) => {
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
            if (currentBoard[x][y + i].type !== "water") {
                console.log("Ships cannot overlap!")
                return false
            }
            currentBoard[x + i][y] = ship
            shipArr.push(ship)
        }
        return true
    }
    function receiveAttack(x, y) {
        const currentBoard = getBoard()
        const water = Water()
        if (currentBoard[x][y] === "X") {
            console.log("Cannot hit same spot!")
            return false
        }
        if (currentBoard[x][y].hit()) {
            water.hit()
            currentBoard[x][y] = "X"
            console.log(water.isHit)
        } else {
            currentBoard[x][y] = "miss"
            console.log(water.isHit)
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

const testShip = Ship(3, "Boat")
gameboard.placeHorizontal(2, 4, testShip, "horizontal")

gameboard.receiveAttack(2, 4)
gameboard.receiveAttack(2, 4)
gameboard.receiveAttack(0, 5)

// gameboard.receiveAttack(5, 4, testShip)


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