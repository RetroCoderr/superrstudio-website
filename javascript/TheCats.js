const cheer = new Audio('Sounds/fnafCheer.mp3');
const cry = new Audio('Sounds/babyCry.wav');
const catMeow = new Audio('Sounds/catMeow.wav');

let cat1 = document.getElementById('cat1');
let cat2 = document.getElementById('cat2');
let cat3 = document.getElementById('cat3');
let textBox = document.getElementById('text');
let bob = document.getElementById('Bob');
let bobIsHappy;

window.onload = function() {
    let numCatsFound = 0;

    const foundCat1 = localStorage.getItem('foundCat1');
    const foundCat2 = localStorage.getItem('foundCat2');
    const foundCat3 = localStorage.getItem('foundCat3');

    if (foundCat1) {
        cat1.hidden = false;
        numCatsFound += 1;
    }
    if (foundCat2) {
        cat2.hidden = false;
        numCatsFound += 1;
    }
    if (foundCat3) {
        cat3.hidden = false;
        numCatsFound += 1;
    }

    if (numCatsFound == 3) {
        textBox.innerText = "Wow, you found Bob's cats! He is happy now.";
        bob.src = 'Images/HAPPYBOB.png';
        bobIsHappy = true
    }
};

cat1.addEventListener('click',() => {
    catMeow.play();
});
cat2.addEventListener('click',() => {
    catMeow.play();
});
cat3.addEventListener('click',() => {
    catMeow.play();
});
bob.addEventListener('click',() => {
    if (bobIsHappy){
        cheer.play();
    }
    else{
        cry.play();
    }
});