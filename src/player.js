import Gameboard from "./gameboard"
import createShip from "./ship"
// import createShip from "./ship"

const createComputer = () => {
    const computerGameboard = Gameboard()
    const getCompBoard = computerGameboard.getBoard()
    console.log(getCompBoard)

    const placeShipHorizontal = (ship) => {
        let x;
        let y;
        do {
            x = Math.floor((Math.random() * 10));
            y = Math.floor((Math.random() * 10));
        }
        while
            (computerGameboard.placeHorizontal(x, y, ship, "horizontal") === false);
        computerGameboard.placeHorizontal(x, y, ship, "horizontal")
        return true
    }

    const placeShipVertical = (ship) => {
        let x;
        let y;
        do {
            x = Math.floor((Math.random() * 10));
            y = Math.floor((Math.random() * 10));
        }
        while
            (computerGameboard.placeVertical(x, y, ship, "vertical") === false);
        computerGameboard.placeVertical(x, y, ship, "vertical")
        return true
    }

    const setEnemyBoard = (player) => player.getPlayerBoard

    return { computerGameboard, setEnemyBoard, placeShipHorizontal, placeShipVertical }
}

const createPlayer = (name) => {
    const getName = () => name
    const gameboard = Gameboard()
    const getPlayerBoard = gameboard.getBoard()
    console.log(getPlayerBoard)

    const placeShipHorizontal = (x, y, ship) => {
        gameboard.placeHorizontal(x, y, ship)
    }

    const placeShipVertical = (x, y, ship) => {
        gameboard.placeVertical(x, y, ship)
    }

    const makeAttack = (x, y) => {
        gameboard.receiveAttack(x, y)
    }

    const setEnemyBoard = (comp) => comp.getCompBoard

    const sendAttack = (x, y, comp) => {
        comp.computerGameboard.receiveAttack(x, y)
    }

    return { getName, placeShipHorizontal, placeShipVertical, makeAttack, /* getPlayerBoard, */ setEnemyBoard, sendAttack }
}

const computer = createComputer()
const player = createPlayer("Player1")
player.setEnemyBoard(computer)
computer.setEnemyBoard(player)
const testShip = createShip(3, "1")
const testShip2 = createShip(3, "2")

computer.placeShipVertical(testShip)
computer.placeShipHorizontal(testShip2)

export { createComputer, createPlayer }