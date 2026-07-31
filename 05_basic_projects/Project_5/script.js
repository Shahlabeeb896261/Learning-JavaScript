const container = document.querySelector('.container');

window.addEventListener('keydown', (e) => {
    container.innerHTML = `<table>
            <thead>
                <td>Key</td>
                <td>Key Code</td>
                <td>Code</td>
            </thead>
            <tr>
                <td>${e.key === " " ? "Space" : e.key}</td>
                <td>${e.keyCode}</td>
                <td>${e.code}</td>
            </tr>
        </table>`
})