let inputDice = document.getElementById('dice');

let diceImageD4 = document.getElementById('d4');
diceImageD4.style.display = 'inline-block';
let diceImageD6 = document.getElementById('d6');
diceImageD6.style.display = 'none';
let diceImageD8 = document.getElementById('d8');
diceImageD8.style.display = 'none';
let diceImageD10 = document.getElementById('d10');
diceImageD10.style.display = 'none';
let diceImageD12 = document.getElementById('d12');
diceImageD12.style.display = 'none';
let diceImageD20 = document.getElementById('d20');
diceImageD20.style.display = 'none';

inputDice.addEventListener('change', function(){
    if(inputDice.value == '1d4') {
        diceImageD4.style.display = 'inline-block';
        diceImageD6.style.display = 'none';
        diceImageD8.style.display = 'none';
        diceImageD10.style.display = 'none';
        diceImageD12.style.display = 'none';
        diceImageD20.style.display = 'none';
        diceText.innerText = '';

    }
    else if(inputDice.value == '1d6') {
        diceImageD6.style.display = 'inline-block';
        diceImageD4.style.display = 'none';
        diceImageD8.style.display = 'none';
        diceImageD10.style.display = 'none';
        diceImageD12.style.display = 'none';
        diceImageD20.style.display = 'none';
        diceText.innerText = '';
    }
    else if(inputDice.value == '1d8') {
        diceImageD8.style.display = 'inline-block';
        diceImageD4.style.display = 'none';
        diceImageD6.style.display = 'none';
        diceImageD10.style.display = 'none';
        diceImageD12.style.display = 'none';
        diceImageD20.style.display = 'none';
        diceText.innerText = '';
    }
    else if(inputDice.value == '1d10') {
        diceImageD10.style.display = 'inline-block';
        diceImageD4.style.display = 'none';
        diceImageD6.style.display = 'none';
        diceImageD8.style.display = 'none';
        diceImageD12.style.display = 'none';
        diceImageD20.style.display = 'none';
        diceText.innerText = '';
    }
    else if(inputDice.value == '1d12') {
        diceImageD12.style.display = 'inline-block';
        diceImageD4.style.display = 'none';
        diceImageD6.style.display = 'none';
        diceImageD8.style.display = 'none';
        diceImageD10.style.display = 'none';
        diceImageD20.style.display = 'none';
        diceText.innerText = '';
    }
    else if(inputDice.value == '1d20') {
        diceImageD20.style.display = 'inline-block';
        diceImageD4.style.display = 'none';
        diceImageD6.style.display = 'none';
        diceImageD8.style.display = 'none';
        diceImageD10.style.display = 'none';
        diceImageD12.style.display = 'none';
        diceText.innerText = '';
    }
})

let diceText = document.getElementById('dice-text');

diceImageD4.addEventListener('click', function(){
    diceText.innerText = Math.floor(Math.random() * 4 + 1);
})

diceImageD6.addEventListener('click', function(){
    diceText.innerText = Math.floor(Math.random() * 6 + 1);
})

diceImageD8.addEventListener('click', function(){
    diceText.innerText = Math.floor(Math.random() * 8 + 1);
})

diceImageD10.addEventListener('click', function(){
    diceText.innerText = Math.floor(Math.random() * 10 + 1);
    if(diceText.innerText.length == 2) {
        diceText.style.left = '1463px'
    }
    else {
        diceText.style.left = '1470px'
    }
})

diceImageD12.addEventListener('click', function(){
    diceText.innerText = Math.floor(Math.random() * 12 + 1);
    if(diceText.innerText.length == 2) {
        diceText.style.left = '1463px'
    }
    else {
        diceText.style.left = '1470px'
    }
})

diceImageD20.addEventListener('click', function(){
    diceText.innerText = Math.floor(Math.random() * 20 + 1);
    if(diceText.innerText.length == 2) {
        diceText.style.left = '1463px'
    }
    else {
        diceText.style.left = '1470px'
    }
})


window.onload = function(){
    if (window.matchMedia("(max-width:740px)").matches) {
        let menuHamburguer = document.getElementById('menu-hamburguer');
        let menu = document.getElementById('menu');
        menu.style.display = 'none';

        menuHamburguer.addEventListener('click', function(){
            let menuContainer = document.getElementById('menu');
            if(menuContainer.style.display == 'none'){
                menuContainer.style.display = 'flex';
            }
            else{
                menuContainer.style.display = 'none';
            }
        })

    }

    else if (window.matchMedia("(min-width:741px)").matches) {
        let menu = document.getElementById('menu');
        menu.style.display = 'flex';
    }
}


//Configurando Dark Mode e Light Mode

const lightMode = document.querySelector('.light');
const darkMode = document.querySelector('.dark');
const headerMenu = document.getElementById('header-menu');

lightMode.addEventListener('click', () => {
  
})
