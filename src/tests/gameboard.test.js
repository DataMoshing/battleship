import ship from "../ship";
import gameboard from "../gameboard";

describe("Gameboard factory", () => {
    test("Does gameboard have 100 cells", () => {
        expect(gameboard.cellCount).toBe(100)
    })
    test("Can place ship at specific coordinates", () => {
        expect(gameboard.placeShip([0, 0], ship)).toEqual(true)
    })
    // test("Determine if attack hits ship", () => {
    //     expect(gameboard.receiveAttack([1, 0], ship.hit())).toEqual(true)
    // })
})