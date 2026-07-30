let num1 = 23000.650;
console.log(num1.toFixed(2));

let num2 = 1000000000;
console.log(num2.toLocaleString("en-IN"));

let num3 = 120050.360;
console.log(num3.toPrecision(4));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++
let num4 = 5.7;
console.log(Math.round(num4));
console.log(Math.floor(num4));
console.log(Math.ceil(num4));

let min = 10;
let max = 20;
console.log(Math.floor((Math.random() * (max - min + 1)) + min));