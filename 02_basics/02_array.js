let arr1 = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];

const marvel_heroes = ["Spiderman", "Ironman", "Hulk", "Thor", "Vision"];
const dc_heroes = ["Batman", "Superman", "Flash", "Wonder Woman"];

const arr = [1, 2, 3, [4, 5, 6],7 ,8, [9, 10, [11, 12]]];
let newArr = arr.flat(Infinity); // Flatten the array to a specified depth
// console.log(newArr);

arr1.forEach((e) => {
    // console.log(e);
});

// console.log(arr2.includes(5)); // Check if the array contains a specific element

// console.log(marvel_heroes.keys());

// console.log(marvel_heroes.sort());

// console.log("A", arr1.slice(0,3));
// console.log("A", arr1);

// console.log("B", arr2.splice(1, 3));
// console.log("B", arr2);

console.log([...arr1, ...arr2]);