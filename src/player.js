import Gameboard from "./gameboard"
import createShip from "./ship"

const createPlayer = (name) => {
    const getName = () => name
    const gameboard = Gameboard()
    const getPlayerBoard = gameboard.getBoard()
    console.log(getPlayerBoard)

    const carrier = createShip(5, "Carrier")

    const playerShipHorizontal = (x, y, ship, direction) => {
        gameboard.placeHorizontal(x, y, ship, direction)
    }

    const playerShipVertical = (x, y, ship, direction) => {
        gameboard.placeVertical(x, y, ship, direction)
    }

    const makeAttack = (x, y) => {
        gameboard.receiveAttack(x, y)
    }

    const setEnemyBoard = (comp) => comp.gameboard

    const sendAttack = () => { }

    return { getName, playerShipHorizontal, playerShipVertical, makeAttack, carrier, getPlayerBoard, setEnemyBoard, sendAttack }
}


const player = createPlayer("Player")
player.playerShipHorizontal(3, 4, player.carrier, "horizontal")

const createComputer = () => {
    const computerGameboard = Gameboard()
    const getCompBoard = computerGameboard.getBoard()

    console.log(getCompBoard)

    const carrier = createShip(5, "Carrier")

    return { getCompBoard, carrier }
}

const computer = createComputer()

player.setEnemyBoard(computer)
player.sendAttack(1, 2, computer)

export { player, computer }
