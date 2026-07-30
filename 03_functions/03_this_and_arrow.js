// This keyword concept
const user = {
    id: 1,
    name: "Shahlabeeb",
    email: "shahlabeeb@google.com",
    username: "shahlabeeb_sk",
    welcomeMessage: function(obj) {
        console.log(`The user name is ${this.name} and the email id is ${this.email}`);
    }
};

// user.welcomeMessage();
user.email = "shahlabeebsidd21@gmail.com";
// user.welcomeMessage();

// Arrow function concept
const printHi = () => {
    console.log("Print Hey");
}

// printHi();

const welcomeMessage = (name) => {
    console.log(`${name}, Welcome to our website`);
}

welcomeMessage("Shahlabeeb Siddiqui");

function printThis() {
    console.log(this);
}

// printThis();

console.log(this);

const arrowFunction = () => {
    console.log(this);
}

arrowFunction();