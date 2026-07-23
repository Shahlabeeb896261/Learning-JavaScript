const arr = [1, 2, 3, 4];

// arr.push(10); // Add the element to the end of the array
// arr.push(11);
// arr.pop(); // Remove the last element from the array

// arr.unshift(0); // Add the element to the begining of the array
// arr.shift(); // Remove the first element from the array
// console.log(arr);

const marvel_heroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Vision"];
const dc_heroes = ["Batman", "Superman", "Flash", "Wonder Woman"];

const all_heroes =  marvel_heroes.concat(dc_heroes); // Merge two array into one array and return a new array copy
// console.log(all_heroes);

// console.log(arr.at(2));

let arr1 = new Array(10, 8, 6, 4, 2, 0);
// console.log(arr1);
// console.log(typeof arr1);

const findNum = arr1.find((num) => { return num > 2 }); // Find the first element in the array that satisfies the condition

console.log(findNum); 