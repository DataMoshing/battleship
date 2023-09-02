import { createComputer, createPlayer } from "./player"
import DOM from "./display"
// import createShip from "./ship"

const createGame = () => {
    const player = createPlayer("Player")
    const computer = createComputer()

    let isPlayersTurn = true

    const playerTurn = () => {
        if (isPlayersTurn) {
            DOM.displayPlayerAttk()
        } else {
            DOM.displayCompAttk()
        }
        // Toggle true or false each turn
        isPlayersTurn = !isPlayersTurn
    }
    return { player, computer, playerTurn }
}
const game = createGame()

// Function to start the game loop
const startGameLoop = () => {
    const interval = setInterval(() => {
        if (DOM.playerWins()) {
            DOM.togglePlayerModal()
            clearInterval(interval)
        }
        if (DOM.computerWins()) {
            DOM.toggleCompModal()
            clearInterval(interval)
        }
        game.playerTurn()
    }, 1000)
    return interval
};
// startGameLoop()

export { game, startGameLoop }