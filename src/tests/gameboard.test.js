import gameboard from "../gameboard"
import Ship from "../ship"

describe("Gameboard factory", () => {
    test("Does gameboard have 100 cells", () => {
        expect(gameboard.getBoard().reduce((acc, column) => acc + column.length, 0)).toBe(100)
    })
    test("Ships cannot overlap", () => {
        const testShip = Ship(3, "Boat")
        const testShip2 = Ship(4, "Boat")
        expect(gameboard.placeShipsVertical(1, 4, testShip, "vertical")).toEqual(true)
        expect(gameboard.placeShipsHorizontal(1, 4, testShip2, "horizontal")).toEqual(false)
    })
    test("Ship cannot be placed outside of board", () => {
        const testShip = Ship(3, "Boat")
        expect(gameboard.placeShipsHorizontal(2, 10, testShip, "horizontal")).toEqual(false)
    })
    test("Determine if attack hits ship", () => {
        const testShip = Ship(3, "Boat")
        expect(gameboard.receiveAttack(2, 4, testShip)).toEqual(true)
    })
    test("Check if all ships have been sunk", () => {
        expect(gameboard.allSunk()).toEqual(true)
    })
})