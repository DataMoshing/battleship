import createShip from "./ship"
import Gameboard from "./gameboard"

const createComputer = () => {
    const computerGameboard = Gameboard()
    const getCompBoard = computerGameboard.getBoard()
    console.log(getCompBoard)

    const placeShipHorizontal = (ship) => {
        let x;
        let y;
        do {
            x = Math.floor((Math.random() * 9));
            y = Math.floor((Math.random() * 9));
        }
        while
            (computerGameboard.placeHorizontal(x, y, ship) === false);
        computerGameboard.placeHorizontal(x, y, ship)
        return true
    }

    const placeShipVertical = (ship) => {
        let x
        let y
        do {
            x = Math.floor((Math.random() * 9))
            y = Math.floor((Math.random() * 9))
        }
        while
            (computerGameboard.placeVertical(x, y, ship) === false)
        computerGameboard.placeVertical(x, y, ship)
        return true
    }

    const setEnemyBoard = (player) => player.getPlayerBoard

    const sendAttack = (player) => {
        let x
        let y
        do {
            x = Math.floor((Math.random() * 9))
            y = Math.floor((Math.random() * 9))
        }
        while (player.playerGameboard.receiveAttack(x, y))
        return true
    }

    return { computerGameboard, setEnemyBoard, placeShipHorizontal, placeShipVertical, sendAttack }
}

const createPlayer = (name) => {
    const getName = () => name
    const playerGameboard = Gameboard()
    // const getPlayerBoard = gameboard.getBoard()
    // console.log(getPlayerBoard)

    const placeShipHorizontal = (x, y, ship) => {
        playerGameboard.placeHorizontal(x, y, ship)
    }

    const placeShipVertical = (x, y, ship) => {
        playerGameboard.placeVertical(x, y, ship)
    }

    // const makeAttack = (x, y) => {
    //     playerGameboard.receiveAttack(x, y)
    // }

    const setEnemyBoard = (comp) => comp.getCompBoard

    const sendAttack = (x, y, comp) => {
        comp.computerGameboard.receiveAttack(x, y)
    }

    return { getName, placeShipHorizontal, placeShipVertical, setEnemyBoard, sendAttack, playerGameboard }
}

const computer = createComputer()
const player = createPlayer("Player1")
player.setEnemyBoard(computer)
computer.setEnemyBoard(player)
const testShip = createShip(3, "1")
const testShip2 = createShip(3, "2")
player.sendAttack(1, 2, computer)

computer.placeShipVertical(testShip)
computer.placeShipHorizontal(testShip2)
computer.sendAttack(player)

export { createComputer, createPlayer }