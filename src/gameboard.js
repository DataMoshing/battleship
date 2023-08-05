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
        const hit = () => { isHit = true };
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

    const validCoords = (x, y) => {
        if (x < 0) {
            return false
        }
        if (x > 9) {
            return false
        }
        if (y < 0) {
            return false
        }
        if (y > 9) {
            return false
        }
        return true
    }
    const getNewCoords = (x, y) => {

    }
    const placeHorizontal = (x, y, ship) => {
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()

        // Loop through ships length
        for (let i = 0; i < shipsLength; i += 1) {
            // Change ship.name back to ship
            currentBoard[x][y + i] = ship.name
            shipArr.push(ship)
        }
        return true
    }
    const placeVertical = (x, y, ship) => {
        const check = validCoords(x, y)
        if (!check) {
            const newXandY = getNewCoords(x, y)
            return placeVertical(newXandY)
        }
        const shipsLength = ship.getLength()
        const currentBoard = getBoard()

        // Loop through ships length
        for (let i = 0; i < shipsLength; i += 1) {
            // Change ship.name back to ship
            currentBoard[x + i][y] = ship.name
            shipArr.push(ship)
        }
        return true
    }
    function canShipBeHitAgain(x, y) {
        const coords = [x, y]
        const coordStr = JSON.stringify(coords)
        const attackCoordStr = JSON.stringify(attackCoord[0])

        if (coordStr === attackCoordStr) {
            console.log("Cannot hit same spot!")
            return false
        }
        return true
    }
    function receiveAttack(x, y) {
        const water = Water()
        const currentBoard = getBoard()

        if (currentBoard[x][y].hit() && canShipBeHitAgain(x, y)) {
            attackCoord.push([x, y])
            return true
        }
        water.hit()
        missedCoord.push([x, y])
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
    return { placeVertical, placeHorizontal, getBoard, cellCount, receiveAttack, allSunk, canShipBeHitAgain, validCoords }
}

const gameboard = Gameboard()

// const testShip = createShip(4, "Boat")
gameboard.allSunk()

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