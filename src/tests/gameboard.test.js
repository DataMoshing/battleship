import Gameboard from "../gameboard"
import createShip from "../ship"

describe("Gameboard factory", () => {
    test("Does gameboard have 100 cells", () => {
        const gameboard = Gameboard()
        expect(gameboard.getBoard().reduce((acc, column) => acc + column.length, 0)).toBe(100)
    })
    test("Ships cannot overlap", () => {
        const testShip = createShip(3, "Boat")
        const testShip2 = createShip(4, "Boat")
        const gameboard = Gameboard()
        expect(gameboard.placeVertical(1, 4, testShip)).toEqual(true)
        expect(gameboard.placeHorizontal(1, 4, testShip2)).toEqual(false)
    })
    test("Ship cannot be placed outside of board", () => {
        const testShip = createShip(3, "Boat")
        const gameboard = Gameboard()
        expect(gameboard.placeHorizontal(8, 10, testShip)).toEqual(false)
    })
    test("Determine if attack hits ship", () => {
        const testShip = createShip(3, "Boat")
        const gameboard = Gameboard()
        gameboard.placeHorizontal(2, 4, testShip)
        expect(gameboard.receiveAttack(2, 4)).toEqual(true)
    })
    test("Check if all ships have been sunk", () => {
        const gameboard = Gameboard()
        expect(gameboard.allSunk()).toEqual(true)
    })
    test("Cannot allow to hit in same spot", () => {
        const testShip = createShip(3, "Boat")
        const gameboard = Gameboard()
        gameboard.placeHorizontal(2, 4, testShip)
        gameboard.receiveAttack(2, 4)
        gameboard.receiveAttack(2, 4)
        expect(gameboard.receiveAttack(2, 4)).toEqual(true)
        expect(gameboard.receiveAttack(2, 4)).toEqual(false)
    })
})