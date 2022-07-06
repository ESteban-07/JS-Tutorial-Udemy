// get only unique categories - HARDEST ONE
// iterate over categories return buttons
// make sure to select buttons when they are

const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.btn-container');

// load items
window.addEventListener('DOMContentLoaded', function () {
    displayMenuButtons();
    displayMenuItems(menu);
});

function displayMenuItems(menuItems) {
    const displayMenu = menuItems
        .map((item) => {
            return `<article class="menu-item">
                <img class="menu-img" src="${item.img}" alt="${item.title}">
                <div class="item-info">
                    <header class="item-header">
                        <h4 class="item-name">${item.title}</h4>
                        <h4 class="item-price">$${item.price}</h4>
                    </header>
                    <p class="item-text">${item.desc}</p>
                </div>
            </article>`;
        })
        .join('');

    sectionCenter.innerHTML = displayMenu;
}

function displayMenuButtons() {
    const categories = menu.reduce(
        function (values, item) {
            if (!values.includes(item.category)) {
                values.push(item.category);
            }
            return values;
        },
        ['all']
    );

    let categoryBtns = categories
        .map((category) => {
            return `<button class="filter-btn" type="button" data-id="${category}">${category}</button>`;
        })
        .join('');

    btnContainer.innerHTML = categoryBtns;

    // filter items

    const filterBtns = btnContainer.querySelectorAll('.filter-btn');

    filterBtns.forEach((btn) => {
        btn.addEventListener('click', function (e) {
            const category = e.currentTarget.dataset.id;
            const menuCategory = menu.filter(
                (item) => item.category === category
            );
            if (category === 'all') {
                displayMenuItems(menu);
            } else {
                displayMenuItems(menuCategory);
            }
        });
    });
}
