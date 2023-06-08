const shipFactory = () => ({
    length() {
        return this.length
    },
    hit() {
        let hits = 0
        hits += 1
        console.log(hits)
        return hits
    },
    isSunk() {

    }
})


const ship = shipFactory()
ship.length = 3

console.log(ship)

export { shipFactory, ship }
