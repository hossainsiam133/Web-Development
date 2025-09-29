class person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`I am ${this.name} and I am ${this.age} years old`);
    }
    age_verification() {
        if (this.age >= 18)
            console.log("Allowed")
        else
            console.log("Not Allowed")
    }
}
class student extends person {
    constructor(name,age, salary) {
        super(name,age)
        this.salary = salary
    }
    salaries() {
        console.log(`${this.name} has a monthly salary of ${this.salary} tk.`)
    }
}
const s1 = new student("Siam Hossain", 23,13000)
s1.greet()
s1.age_verification()
s1.salaries()