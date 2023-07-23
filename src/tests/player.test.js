import { createPlayer, createComputer } from "../player"
import createShip from "../ship"

describe("Player factory", () => {
    test("Can send attacks to enemy board", () => {
        const player = createPlayer()
        const computer = createComputer()
        const testShip = createShip(3, "Boat")
        computer.computerGameboard.placeHorizontal(1, 4, testShip, "horizontal")
        player.setEnemyBoard(computer)
        player.sendAttack(1, 4, computer)
        player.sendAttack(1, 5, computer)
        player.sendAttack(1, 6, computer)
        expect(computer.computerGameboard.allSunk()).toEqual(true)
    })
})