import { createComputer } from "../player"
import createShip from "../ship"

describe("Player factory", () => {
    test("Computer can randomly place ships horizontally", () => {
        const computer = createComputer()
        const testShip = createShip(3, "Boat")
        expect(computer.placeShipHorizontal(testShip)).toEqual(true)
    })
    test("Computer can randomly place ships vertically", () => {
        const computer = createComputer()
        const testShip1 = createShip(2, "Boat")
        expect(computer.placeShipVertical(testShip1)).toEqual(true)
    })
})