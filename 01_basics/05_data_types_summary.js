// Primitive data types (Call by value)
// Number
let a = 200;

// String 
let str = "This is a string";

// BigInt
let bigNumber = 332654112165544n;
// console.log(typeof bigNumber)

// Boolean
let isLoggedIn = false;

// Null
let temperature = null;

// Undefined
let username = undefined;

// Symbol
let sym1 = Symbol("Foo");
let sym2 = Symbol("Foo");
console.log(sym1 == sym2);


// Non-Primitive Data Types (Reference type)
// Array, Object, Functions

const arr = ["Spiderman", "Ironman", "Thor", "Loki"];

function myFunction() {
    console.log("This is a function");
};

const myObj = {
    name: "Shahlabeeb", 
    age: 23
}

console.log(typeof arr);
console.log(typeof myFunction);
console.log(typeof myObj);