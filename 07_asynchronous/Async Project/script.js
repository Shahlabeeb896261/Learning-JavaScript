const start = document.querySelector('.start');
const stop = document.querySelector('.stop');

const randomColor = () => {
    let val1 = Math.ceil(Math.random() * 255);
    let val2 = Math.ceil(Math.random() * 255);
    let val3 = Math.ceil(Math.random() * 255);
    return `rgb(${val1}, ${val2}, ${val3})`;
}

let startColor = null;

start.addEventListener('click', () => {
    startColor = setInterval(() => {
        document.querySelector('body').style.backgroundColor = randomColor();
    }, 1000);
});

stop.addEventListener('click', () => {
    clearInterval(startColor);
    startColor = null;
})