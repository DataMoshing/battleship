import { ship } from "../ship"

describe("Ship factory", () => {
    test("should hit ship", () => {
        expect(ship.hit()).toBe(2)
    })
})