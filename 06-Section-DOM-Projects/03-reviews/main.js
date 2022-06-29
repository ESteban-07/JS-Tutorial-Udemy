// DOM elements
const personImg = document.querySelector('#person-img');
const personName = document.querySelector('#person-name');
const personJob = document.querySelector('#person-job');
const personInfo = document.querySelector('#person-info');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Event Listeners
prevBtn.addEventListener('click', previousPerson);
nextBtn.addEventListener('click', nextPerson);
randomBtn.addEventListener('click', randomPerson);

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

// show previous person
function previousPerson() {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }

    showPerson(currentItem);
    // console.log('previous', currentItem);
}

// show next person
function nextPerson() {
    currentItem++;

    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }

    showPerson(currentItem);
    // console.log('next', currentItem);
}

// show random person
function randomPerson() {
    let randomNumber = currentItem;

    while (randomNumber == currentItem) {
        randomNumber = Math.floor(Math.random() * reviews.length);
    }

    currentItem = randomNumber;

    showPerson(currentItem);
    // console.log('random', currentItem);
}

// show person based on item
function showPerson(person) {
    personImg.setAttribute('src', reviews[person].img);
    personName.textContent = reviews[person].name;
    personJob.textContent = reviews[person].job;
    personInfo.textContent = reviews[person].info;
}
