import createShip from "../ship"

describe("Ship factory", () => {
    test("should hit ship", () => {
        const testShip = createShip(3, "Boat")
        expect(testShip.hit()).toBe(1)
    })
    test("length of ship", () => {
        const testShip = createShip(3, "Boat")
        expect(testShip.getLength(3)).toBe(3)
    })
    test("Ship has been sunk", () => {
        const testShip = createShip(3, "Boat")
        testShip.hit()
        testShip.hit()
        testShip.hit()
        expect(testShip.isSunk()).toBe(true)
    })
    test("Ship has not been sunk", () => {
        const testShip = createShip(3, "Boat")
        testShip.hit()
        expect(testShip.isSunk()).toBe(false)
    })
})
