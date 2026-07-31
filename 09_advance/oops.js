const userOne = {
    username: "shaun123",
    password: "Dragon@1960",
    isLoggedIn: true,
    greet: function() {
        console.log(`Welcome, ${this.username}`)
    }
}

userOne.greet();

function user(username, password, isLoggedIn) {
    this.username = username,
    this.password = password,
    this.isLoggedIn = isLoggedIn
    return this
};

const waseem = new user("Mohd Wasi", "wasi@123", "true");
const suhail = new user("Mohd suhail", "suhail@123", "true");
console.log(waseem);
console.log(suhail);