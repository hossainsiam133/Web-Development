class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
}
const p1 = new person("Siam", 23)
const p2 = new person("Talha", 20)

p1.greet()
p2.greet()