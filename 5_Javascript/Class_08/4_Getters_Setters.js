class circle {
    constructor(r) {
        this.r = r
    }
    get area() {
        return 3.1415 * this.r * this.r;
    }
    set setRadius(r) {
        this.r = r;
    }
}
const c1 = new circle(3)
console.log(c1.area)
c1.setRadius = 5
console.log(c1.area)
