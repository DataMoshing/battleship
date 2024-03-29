import Gameboard from "../gameboard"
import createShip from "../ship"

describe("Gameboard factory", () => {
    test("Can place ships", () => {
        const gameboard = Gameboard()
        const testShip = createShip(3, "Boat")
        const testShip2 = createShip(1, "Pool Float")
        expect(gameboard.placeHorizontal(1, 4, testShip)).toEqual(true)
        expect(gameboard.placeVertical(5, 2, testShip2)).toEqual(true)
    })
    test("Check if coordinates are valid", () => {
        const gameboard = Gameboard()
        expect(gameboard.validCoords(8, 10)).toEqual(false)
    })
    test("Check if ship is inbounds of gameboard", () => {
        const gameboard = Gameboard()
        const testShip = createShip(3, "Boat")
        expect(gameboard.shipIsInbounds(8, 10, testShip)).toEqual(false)
    })
    test("Ships cannot overlap", () => {
        const testShip = createShip(3, "Boat")
        const testShip2 = createShip(4, "Boat")
        const gameboard = Gameboard()
        gameboard.placeVertical(1, 4, testShip)
        gameboard.placeHorizontal(1, 4, testShip2)
        expect(gameboard.doShipsCollide(1, 4, testShip2)).toEqual(false)
    })
    test("Determine if attack hits ship", () => {
        const testShip = createShip(3, "Boat")
        const gameboard = Gameboard()
        gameboard.placeHorizontal(2, 4, testShip)
        expect(gameboard.receiveAttack(2, 4)).toEqual(true)
    })
    test("Check if all ships have been sunk", () => {
        const gameboard = Gameboard()
        const testShip = createShip(2, "Boat")
        const testShip2 = createShip(2, "Boat")
        gameboard.placeHorizontal(1, 2, testShip)
        gameboard.placeHorizontal(5, 5, testShip2)
        gameboard.receiveAttack(1, 2)
        gameboard.receiveAttack(1, 3)
        gameboard.receiveAttack(5, 5)
        gameboard.receiveAttack(5, 6)
        expect(gameboard.allSunk()).toEqual(true)
    })
    test("Cannot allow to hit in same spot", () => {
        const testShip = createShip(2, "Boat")
        const gameboard = Gameboard()
        gameboard.placeVertical(2, 2, testShip)
        expect(gameboard.receiveAttack(2, 2)).toEqual(true)
        expect(gameboard.canShipBeHitAgain(2, 2)).toEqual(false)
    })
    test("Cannot attack outside of gameboard", () => {
        const gameboard = Gameboard()
        expect(gameboard.receiveAttack(10, 11)).toEqual(false)
    })
})