import { createComputer } from "../player"
import createShip from "../ship"

describe("Player factory", () => {
    test("Computer can randomly place ships horizontally", () => {
        const computer = createComputer()
        const testShip = createShip(3, "Boat")
        expect(computer.placeShipHorizontal(testShip)).toEqual(true)
    })
    test("Computer can randomly place ships verically", () => {
        const computer = createComputer()
        const testShip = createShip(2, "Boat")
        expect(computer.placeShipVertical(testShip)).toEqual(true)
    })
})