const list = document.querySelector(".list");
list.style.backgroundColor = "red";

// console.log(list)

const listItems = document.querySelectorAll(".list-item");
console.log(listItems);

listItems.forEach((l, index) => {
    l.style.color = "yellow";
    console.log(l, index);
});