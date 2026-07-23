function sayHi() {
    // console.log("Hi");
}
sayHi();

function sayMyName(name) {
    return `Hello My name is ${name}`;
}

let myName = sayMyName("Shahlabeeb Siddiqui");
// console.log(myName);

function greetMessage(message = "Good Morning") {
    return `Hello dear, Sir/Madam ${message}`;
}

const greet = greetMessage("Good evening");
// console.log(greet);

function addToCart(...num) {
    return num;
}

// function addToCart(val1, val2, ...num) {
//     return num;
// }

let newNum = addToCart(100, 200, 300, 400);
// console.log(newNum);

let obj = {
    id: 1,
    name: "UserOne",
    email: "userone@gmail.com"
};

function myObj(anyObj) {
    return `The id of the object is ${obj.id}, the name is ${obj.name} and the email id is ${obj.email}`;
}

let printObj = myObj(obj);
// console.log(printObj);

let myArray = [1, 2, 3, 4, 5];
function arrFun(anyArray) {
    return anyArray[1]
}

let newArr = arrFun(myArray);
console.log(newArr);