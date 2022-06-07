// ## Array Methods #9

// setup data

const students = [
    { id: 1, name: 'peter', score: 80, favoriteSubject: 'math' },
    { id: 2, name: 'susan', score: 99, favoriteSubject: 'history' },
    { id: 3, name: 'anna', score: 85, favoriteSubject: 'math' },
    { id: 4, name: 'john', score: 34, favoriteSubject: 'art' },
    { id: 5, name: 'bobo', score: 74, favoriteSubject: 'math' },
];

// console.log(students);

/*
#### updatedStudents (Map method)

1. add role: 'student' property to each object using MAP method
2. assign to 'updatedStudents' variable and log
*/

const updatedStudents = students.map(function (student) {
    return { ...student, role: 'student' };
});

// console.log(updatedStudents);

/*
#### highScores (Filter method & Sort method)

1. filter array and return only scores >= 80
2. assign to 'highScores' variable and log
3. assign to 'sortedHighScores' variable the 
previous output and log
*/

const highScores = students.filter((student) => student.score >= 80);

// console.log(highScores);

const sortedHighScores = highScores.sort((a, b) => a.score - b.score);

// console.log(sortedHighScores);

/*
#### specificId (Find method)

1. find specific id in array
2. assign to 'specificId' variable and log
*/

const specificId = students.find((student) => student.id === 3);

// console.log(specificId);

/*
#### averageScore (Reduce Method)

1. sum up all student.score values with reduce
2. divide by the lenght of the students array
3. assign to 'averageScore' and log
*/

// const averageScore =
//     students.reduce(function (totalScore, student) {
//         return totalScore + student.score;
//     }, 0) / students.length;

const l = students.length;

const averageScore = students.reduce((acc, curr) => acc + curr.score, 0) / l;

// console.log(averageScore);

/*
#### surver (Reduce Method)

1. list favorite subjects with reduce
    {
        english: 1,
        history: 1,
        math: 3,
    }
2. assign to survey and log
*/

// Square bracket notation will help us to understand this exercise

const subject = 'art';
const subject2 = 'math';
const total = {};
total[subject] = 'some value';
total[subject2] = 'another value';

// console.log(total);

const survey = students.reduce(function (survey, student) {
    const favSubject = student.favoriteSubject;

    if (survey[favSubject]) {
        survey[favSubject] += 1;
    } else {
        survey[favSubject] = 1;
    }

    return survey;
}, {});

console.log(survey);
