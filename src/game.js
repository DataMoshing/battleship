import { createComputer, createPlayer } from "./player"
import createShip from "./ship"

const createGame = () => {
    const player = createPlayer("Player")
    const computer = createComputer()
    console.log(player.playerGameboard.getBoard())
    console.log(computer.computerGameboard.getBoard())


    const carrier = createShip(5, "Carrier")
    const battleship = createShip(4, "Battleship")
    const destroyer = createShip(3, "Destroyer")
    const submarine = createShip(3, "Submarine")
    const patrolBoat = createShip(2, "Patrol Boat")

    return { player, computer, carrier, battleship, destroyer, submarine, patrolBoat }
}

const game = createGame()

game.player.placeShipHorizontal(3, 4, game.battleship)
game.player.placeShipVertical(0, 0, game.carrier)
game.player.placeShipHorizontal(5, 3, game.destroyer)
game.player.placeShipVertical(6, 1, game.submarine)
game.player.placeShipHorizontal(8, 6, game.patrolBoat)

// game.computer.placeShipHorizontal(game.carrier)
// game.computer.placeShipVertical(game.battleship)
// game.computer.placeShipHorizontal(game.destroyer)
// game.computer.placeShipVertical(game.submarine)
// game.computer.placeShipHorizontal(game.patrolBoat)

export default createGame

