// Settings
let foundCatDataName = 'foundCat3'; // <= Only thing that matters
let foundCat = document.getElementById("cat");
const catMeow = new Audio('Sounds/catMeow.wav');
//

const foundCatData = localStorage.getItem(foundCatDataName);

function catFound() {
    localStorage.setItem(foundCatDataName, true);
    catMeow.play();
    foundCat.hidden = true;
    foundCat.classList.remove('rockingCat');
}

foundCat.addEventListener('click',() => {
    catFound();
});

// Cat should be hidden by default before javascript runs
if (foundCatData === null) {
    foundCat.hidden = false;
    foundCat.classList.add('rockingCat');
}