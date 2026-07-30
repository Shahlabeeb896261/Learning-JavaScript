const button = document.querySelector(".button");
button.addEventListener("click", (e) => {
    document.querySelector(".box").innerHTML = "The content has been changed";
})