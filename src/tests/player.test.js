import { createComputer, createPlayer } from "../player"
import createShip from "../ship"

describe("Player factory", () => {
    test("Computer can randomly place ships horizontally", () => {
        const computer = createComputer()
        const testShip = createShip(3, "Boat")
        expect(computer.placeShipHorizontal(testShip)).toEqual(true)
    })
    test("Computer can randomly place ships vertically", () => {
        const computer = createComputer()
        const testShip = createShip(2, "Boat")
        expect(computer.placeShipVertical(testShip)).toEqual(true)
    })
    test("Computer can attack player board", () => {
        const computer = createComputer()
        const player = createPlayer("Player1")
        computer.setEnemyBoard(player)
        expect(computer.sendAttack(player)).toEqual(true)
    })
})