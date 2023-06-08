const shipFactory = () => {
    let hits = 0;
    function length() {
        return this.length
    }
    function hit() {
        hits += 1
        return hits
    }

    return { length, hit }
}


const ship = shipFactory()
ship.length = 3
console.log(ship.hit())
console.log(ship.hit())
console.log(ship.hit())


console.log(ship)

export { shipFactory, ship }
