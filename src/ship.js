const createShip = (shipLength, name) => {
    let hits = 0
    let sunk = false
    function getLength() {
        return this.shipLength
    }

    function hit() {
        hits += 1
        return hits
    }

    function isSunk() {
        if (hits >= shipLength) {
            sunk = true
            return sunk
        }
        sunk = false
        return sunk
    }
    return { getLength, hit, isSunk, shipLength, name, hits }
}

const testShip = createShip(3, "Boat")
const testShip2 = createShip(4, "Boat 2")
export { testShip, testShip2 }

