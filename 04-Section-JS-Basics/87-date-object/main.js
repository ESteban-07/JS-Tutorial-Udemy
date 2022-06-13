// Date

const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
];

// const date = new Date();
const date = new Date('7/28/2002');

let month = date.getMonth();
month = months[month];

let day = date.getDay();
day = days[day];

const dayOfMonth = date.getDate();

const year = date.getFullYear();

const sentence = `${day}, ${dayOfMonth} ${month} ${year}`;

console.log(sentence);

document.body.innerHTML = sentence;
