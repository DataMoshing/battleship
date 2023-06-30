import gameboard from "../gameboard"
import { testShip, testShip2 } from "../ship"

describe("Gameboard factory", () => {
    test("Does gameboard have 100 cells", () => {
        expect(gameboard.getBoard().reduce((acc, column) => acc + column.length, 0)).toBe(100)
    })
    test("Can place ships at specific coordinates", () => {
        expect(gameboard.placeShipsVertical(1, 4, testShip, "vertical")).toEqual(true)
    })
    test("Ships cannot overlap", () => {
        expect(gameboard.placeShipsHorizontal(1, 4, testShip2, "horizontal")).toEqual(false)
    })
    test("Ship cannot be placed outside of board", () => {
        expect(gameboard.placeShipsHorizontal(2, 10, testShip, "horizontal")).toEqual(false)
    })
    test("Determine if attack hits ship", () => {
        expect(gameboard.receiveAttack(2, 4, testShip)).toEqual(true)
    })
    test("Check if all ships have been sunk", () => {
        expect(gameboard.allSunk()).toEqual(true)
    })
})