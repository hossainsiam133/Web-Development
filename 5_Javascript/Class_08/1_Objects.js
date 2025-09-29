const student = {
    name: "Siam Hossain",
    age: 23,
    greet() {

        {
            console.log(`Hello my name is ${this.name}`)
        }
    }
}
console.log(student.name)
student.greet()

// Prototype
const person = {
    gender: "Male"
}
person.__proto__ = student
console.log(person.name)