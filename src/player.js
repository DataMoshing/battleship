import Gameboard from "./gameboard"

const createComputer = () => {
    const computerGameboard = Gameboard()

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
        console.log(player.playerGameboard.receiveAttack(x, y))
    }
    return { computerGameboard, setEnemyBoard, placeShipHorizontal, placeShipVertical, sendAttack }
}

const createPlayer = (name) => {
    const getName = () => name
    const playerGameboard = Gameboard()

    const placeShipHorizontal = (x, y, ship) => playerGameboard.placeHorizontal(x, y, ship)

    const placeShipVertical = (x, y, ship) => playerGameboard.placeVertical(x, y, ship)

    const setEnemyBoard = (comp) => comp.getCompBoard

    const sendAttack = (x, y, comp) => comp.computerGameboard.receiveAttack(x, y)

    return { getName, placeShipHorizontal, placeShipVertical, setEnemyBoard, sendAttack, playerGameboard }
}

export { createComputer, createPlayer }