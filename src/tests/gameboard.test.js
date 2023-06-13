import { ship } from "../ship";
import Gameboard from "../gameboard";

describe("Gameboard factory", () => {
    test("Can place ship at specific coordinates", () => {
        expect(Gameboard.placeShip([0, 0], ship)).toEqual(true)
    })
    test("Determine if attack hits ship", () => {
        expect(Gameboard.receiveAttack([1, 0], ship.hit())).toEqual(true)
    })
})