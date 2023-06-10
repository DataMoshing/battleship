const shipFactory = (shipLength) => {
    let hits = 0
    let sunk = false

    function getLength(length) {
        return length
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
    return { getLength, hit, isSunk, shipLength }
}

const ship = shipFactory(3)
console.log(ship)

export { shipFactory, ship }

