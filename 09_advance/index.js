const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First Async Task Done");
        resolve();
    }, 1000);
});

promiseOne.then(() => {
    console.log("Promise One Consumed");
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 2 Complete");
        resolve();
    }, 1000)
}).then(() => {
    console.log("Task 2 Consumed");
});

const promiseThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async Task 3 Completed");
        resolve({username: "Shahlabeeb", password: "shaun@123"});
    }, 1000);
});

promiseThree.then((user) => {
    console.log(user);
    console.log("Task 3 Consumed");
    return user.username;
}).then((username) => {
    console.log(username);
});

const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if(!error) {
            console.log("Async Task 4 Completed");
            resolve("Async task four completed");
        } else {
            console.log("Something went wrong!");
        }
    }, 1000);
});

// promiseFour.then((str) => {
//     console.log("Promise Four resolved");
//     return str;
// }).then((str) => {
//     console.log(str);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log("Promise either resolved or rejected");
// });

async function promiseFourConsumed() {
    try {
        let response = await promiseFour;
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function getData() {
    try {
        let res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        let data = await res.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

getData();