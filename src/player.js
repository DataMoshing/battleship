import Gameboard from "./gameboard"

const createComputer = () => {
    const computerGameboard = Gameboard()
    // console.log(computerGameboard.attackCoord)
    const arrayOfCoords = []
    const counter = 0

    for (let i = 0; i < 10; i += 1) {
        arrayOfCoords[i] = []
        for (let j = 0; j < 10; j += 1) {
            arrayOfCoords[i][j] = [i, j]
        }
    }
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
        const randomX = Math.floor(Math.random() * 9);
        const randomY = Math.floor(Math.random() * 9);

        const randomXCoords = arrayOfCoords[randomX][0][0]
        const randomYCoords = arrayOfCoords[randomY][0][0]

        const response = player.playerGameboard.receiveAttack(randomXCoords, randomYCoords);

        return [randomXCoords, randomYCoords, response];


    }

    return { computerGameboard, setEnemyBoard, placeShipHorizontal, placeShipVertical, sendAttack }
}

const createPlayer = (name) => {
    const getName = () => name
    const playerGameboard = Gameboard()
    // console.log(playerGameboard.attackCoord)

    const placeShipHorizontal = (x, y, ship) => playerGameboard.placeHorizontal(x, y, ship)

    const placeShipVertical = (x, y, ship) => playerGameboard.placeVertical(x, y, ship)

    const setEnemyBoard = (comp) => comp.getCompBoard

    const sendAttack = (x, y, comp) => comp.computerGameboard.receiveAttack(x, y)

    return { getName, placeShipHorizontal, placeShipVertical, setEnemyBoard, sendAttack, playerGameboard }
}

export { createComputer, createPlayer }