const clock = document.querySelector('.clock');

setInterval(() => {
    let date = new Date();
    // console.log(date)
    clock.innerHTML = `${date.toLocaleTimeString()}`;
}, 1000);