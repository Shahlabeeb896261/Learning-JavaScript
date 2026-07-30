const user = {
    name: "Shahlabeeb",
    email: "shahlabeeb@google.com",
    age: 23,
    isLoggedIn: false
};

// console.log(user.hasOwnProperty("name"));
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));

const user1 = {
    id: 1,
    name: "userOne",
    email: "userone@gmail.com"
};
const user2 = {
    id: 2,
    name: "userTwo",
    email: "usertwo@gmail.com"
};

const obj3 = Object.assign({}, user1, user2);
const obj4 = { ...user1, ...user2 };

// console.log(obj3);
// console.log(obj4);

const facebookUser = {
    id: 5656,
    name: "Facebook User",
    email: "facebookuser@gmail.com",
    price: "$99"
};

const { email: em } = facebookUser;
console.log(em);