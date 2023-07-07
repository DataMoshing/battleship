const createShip = (shipLength, name) => {
    const hits = 0
    let sunk = false
    function getLength() {
        return this.shipLength
    }

    function hit() {
        this.hits += 1
        return this.hits
    }

    function isSunk() {
        if (this.hits >= this.shipLength) {
            sunk = true
            return sunk
        }
        sunk = false
        return sunk
    }
    return { getLength, hit, isSunk, shipLength, name, hits }
}

export default createShip

