// using selector inside the element

const questions = document.querySelectorAll('.question-item');

questions.forEach(function (question) {
    const btn = question.querySelector('.question-button');
    btn.addEventListener('click', function () {
        questions.forEach(function (item) {
            if (item != question) {
                item.classList.remove('show-content');
            }
        });
        question.classList.toggle('show-content');
    });
});

// traversing the DOM

// const btns = document.querySelectorAll('.question-button');

// console.log(btns);

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-content');
//     });
// });
