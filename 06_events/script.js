const ul = document.querySelector('ul');

ul.addEventListener('click', (e) => {
    console.log(e.target.tagName);
    if(e.target.tagName === 'IMG'){
        e.target.parentNode.remove();
    }
});