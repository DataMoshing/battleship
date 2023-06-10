import { ship } from "../ship"

describe("Ship factory", () => {
    test("should hit ship", () => {
        ship.hit()
        expect(ship.hit()).toBe(2)
    })
    test("length of ship", () => {
        expect(ship.getLength(3)).toBe(3)
    })
    test("ship has not been hit", () => {
        expect(ship.isSunk()).toBe(false)
    })
    test("ship has been sunk", () => {
        ship.hit()
        ship.hit()
        ship.hit()
        expect(ship.isSunk()).toBe(true)
    })
})
