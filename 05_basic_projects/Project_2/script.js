const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const weightInput = document.querySelector('#weight');
    const heightInput = document.querySelector('#height');

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);

    const results = document.querySelector('.results');

    if (weight <= 0 || isNaN(weight)) {
        let p = document.createElement('p');
        results.innerHTML = "";
        p.appendChild(document.createTextNode(`Please Enter a valid weight ${weight}`));
        results.appendChild(p);
        weightInput.value = "";
    } else if (height <= 0 || isNaN(height)) {
        let p = document.createElement('p');
        results.innerHTML = "";
        p.appendChild(document.createTextNode(`Please Enter a valid height ${height}`));
        results.appendChild(p);
        heightInput.value = "";
    } else {
        const bmi = Number((weight / ((height * height) / 10000)).toFixed(2));
        if (bmi >= 0 && bmi < 18.5) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(`Underweight: ${bmi}`));
            results.innerHTML = "";
            results.appendChild(p);
        } else if (bmi >= 18.5 && bmi <= 24.9) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(`Healthy Weight: ${bmi}`));
            results.innerHTML = "";
            results.appendChild(p);
        } else if (bmi >= 25 && bmi <= 29.9) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(`Overweight: ${bmi}`));
            results.innerHTML = "";
            results.appendChild(p);
        } else if (bmi >= 30) {
            const p = document.createElement('p');
            p.appendChild(document.createTextNode(`Obesity: ${bmi}`));
            results.innerHTML = "";
            results.appendChild(p);
        }
    }
    form.reset();
})