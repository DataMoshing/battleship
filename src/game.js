import { createComputer, createPlayer } from "./player"
import DOM from "./display"
import createShip from "./ship"

const createGame = () => {
    const player = createPlayer("Player")
    const computer = createComputer()
    const carrier = createShip(5, "carrier")
    let isPlayersTurn = true

    const playerTurn = () => {
        if (isPlayersTurn) {
            DOM.displayPlayerAttk()
        } else {
            DOM.displayCompAttk()
        }
        // Toggle true or false each turn
        isPlayersTurn = !isPlayersTurn;
    }

    // Add event listener for the player's attacks
    // DOM.displayPlayerAttk()

    return { player, computer, carrier, playerTurn }
}

const game = createGame()
// Function to start the game loop
const startGameLoop = () => {
    const interval = setInterval(() => {
        game.playerTurn()
    }, 1000)
    return interval
};


// startGameLoop()

export default game