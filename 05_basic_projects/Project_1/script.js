const body = document.querySelector("body");
const boxes = document.querySelectorAll(".box");
console.log(boxes)

boxes.forEach((box) => {
    console.log(box);
    box.addEventListener("click", (e) => {
        console.log(e);
        console.log(e.target);
        if(e.target.innerText == "Yellow") {
            body.style.backgroundColor = "yellow";
        } else if(e.target.innerText == "White") {
            body.style.backgroundColor = "white";
        } else if(e.target.innerText == "Green") {
            body.style.backgroundColor = "green";
        } else if(e.target.innerText == "Purple") {
            body.style.backgroundColor = "purple";
        }
    })
})