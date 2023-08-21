import Gameboard from "./gameboard"

const createComputer = () => {
    const computerGameboard = Gameboard()
    // console.log(computerGameboard.attackCoord)
    const arrayOfCoords = []
    const compAttkCoords = []
    let counter = 0

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i -= 1) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]]
        }
    }

    for (let i = 0; i < 10; i += 1) {
        for (let j = 0; j < 10; j += 1) {
            arrayOfCoords.push([i, j]);
        }
    }

    shuffleArray(arrayOfCoords)
    console.log(arrayOfCoords[0])
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
        const randomXCoords = arrayOfCoords[counter][0]
        const randomYCoords = arrayOfCoords[counter][1]

        compAttkCoords.push([randomXCoords, randomYCoords])

        const response = player.playerGameboard.receiveAttack(randomXCoords, randomYCoords)
        console.log(randomXCoords, randomYCoords);
        counter += 1;

        return [randomXCoords, randomYCoords, response]
    }

    return { computerGameboard, setEnemyBoard, placeShipHorizontal, placeShipVertical, sendAttack, arrayOfCoords }
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