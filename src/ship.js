const shipFactory = () => {
    let hits = 0;

    function length() {
        return this.length
    }

    function hit() {
        hits += 1
        return hits
    }

    function isSunk() {
        if (this.length === hits) {
            return true
        }
        return false
    }
    return { length, hit, isSunk }
}


const ship = shipFactory()
ship.length = 3

export { shipFactory, ship }
