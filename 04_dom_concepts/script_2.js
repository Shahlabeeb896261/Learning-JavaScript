let listItems = document.querySelector(".list-items");

// Function to add the items in webpage
function addListItem(item) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    listItems.appendChild(li);
}

addListItem("Python");
addListItem("Cpp");

// The code to edit the list item
let firstElement = document.querySelector(".list-items li:nth-child(3)");
let newLi = document.createElement("li");
newLi.textContent = "Swift";
firstElement.replaceWith(newLi);

console.log(listItems);

document.querySelector(".list-items li:nth-child(3)").remove();