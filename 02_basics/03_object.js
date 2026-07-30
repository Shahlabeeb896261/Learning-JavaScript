let user = {
    id: 1,
    "full name": "Shahlabeeb",
    username: "shahlabeeb_sk_26",
    date_of_birth: "26-12-2002"
};

// console.log(user.id);
// console.log(user["full name"]);
// console.log(user.username);

let sym = Symbol("key1");

let new_user = {
    name: "Shahlabeeb Siddiqui",
    email: "shahlabeeb@google.com",
    [sym]: "Key1",
    "full name": {
        firstName: "Shahlabeeb",
        lastName: "Siddiqui"
    },
    age: 23
};

console.log(new_user["full name"].firstName);

const tinderUser = new Object({
    name: "Shaun",
    age: 23
});
console.log(tinderUser);

new_user.email = "shahlabeebsidd21@gmail.com";
console.log(new_user.email);