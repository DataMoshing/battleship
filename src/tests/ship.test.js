import testShip from "../ship"

describe("Ship factory", () => {
    test("should hit ship", () => {
        testShip.hit()
        expect(testShip.hit()).toBe(2)
    })
    test("length of ship", () => {
        expect(testShip.getLength(3)).toBe(3)
    })
    test("Ship has not been hit", () => {
        expect(testShip.isSunk()).toBe(false)
    })
    test("Ship has been sunk", () => {
        testShip.hit()
        testShip.hit()
        testShip.hit()
        expect(testShip.isSunk()).toBe(true)
    })
})
