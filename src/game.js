import { createComputer, createPlayer } from "./player"
import createShip from "./ship"

const createGame = () => {
    const player = createPlayer("Player")
    const computer = createComputer()

    const carrier = createShip(5, "Carrier")
    const battleship = createShip(4, "Battleship")
    const destroyer = createShip(3, "Destroyer")
    const submarine = createShip(3, "Submarine")
    const patrolBoat = createShip(2, "Patrol Boat")

    return { player, computer, carrier, battleship, destroyer, submarine, patrolBoat }
}


export default createGame

