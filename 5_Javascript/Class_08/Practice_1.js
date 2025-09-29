class user {
    constructor(name, email) {
        this.name = name;
        this.email = email
    }
    view_data() {
        console.log(`Name: ${this.name} and E-Mail: ${this.email}`)
    }
}
class admin extends user {
    edit_data(name, email) {
        this.name = name
        this.email = email
    }
}
const ad = new admin("Siam", "cpsiam@gmail.com")
ad.view_data()

ad.edit_data("Siam Hossain", "cpsiam133@gmail.com")
ad.view_data()
