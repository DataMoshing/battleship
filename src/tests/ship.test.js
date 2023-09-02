import createShip from "../ship"

describe("Ship factory", () => {
    test("Can hit ship", () => {
        const testShip = createShip(3, "Boat")
        expect(testShip.hit()).toBe(1)
    })
    test("Length of ship", () => {
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
    test("Ship can't be hit more than once", () => {
        const testShip = createShip(2, "Boat")
        testShip.hit()
        testShip.hit()
        testShip.hit()
        expect(testShip.isSunk()).toBe(false)
    })
})
