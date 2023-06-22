import gameboard from "../gameboard"
import testShip from "../ship"



describe("Gameboard factory", () => {
    test("Does gameboard have 100 cells", () => {
        expect(gameboard.getBoard().reduce((acc, column) => acc + column.length, 0)).toBe(100)
    })
    test("Can place ships at specific coordinates", () => {
        gameboard.placeShip(2, 4, testShip, "horizontal")
        expect(gameboard.placeShip(2, 4, testShip, "horizontal")).toEqual(true)
    })
    // test("Determine if attack hits ship", () => {
    //     expect(gameboard.receiveAttack([1, 0], ship.hit())).toEqual(true)
    // })
})