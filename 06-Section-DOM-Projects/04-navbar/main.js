// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navbarBtn = document.querySelector('.navbar-btn');
const navbarLinks = document.querySelector('.navbar-links');

navbarBtn.addEventListener('click', function () {
    // console.log(navbarLinks.classList);
    // console.log(navbarLinks.classList.contains("random"));
    // console.log(navbarLinks.classList.contains("show-links"));
    // if (navbarLinks.classList.contains("show-links")) {
    //   navbarLinks.classList.remove("show-links");
    // } else {
    //   navbarLinks.classList.add("show-links");
    // }

    /* Toggles method is one liner code replacing 'if-else' statement */
    navbarLinks.classList.toggle('show-links');
});
