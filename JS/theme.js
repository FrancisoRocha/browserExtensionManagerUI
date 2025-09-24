
// Toggle between light and dark Themes
const themeButton = document.querySelector('.button-theme');
const body = document.body;
const header = document.querySelector('.header');
const mainTitle = document.querySelector('.main__title');
const filters = document.querySelectorAll('.filter__option');
const cards = document.querySelectorAll('.card');
const title = document.querySelectorAll('.title');
const buttonRemove = document.querySelectorAll('.button__remove');


export function toggleTheme(){

    themeButton.addEventListener('click', () => {

        body.classList.toggle('dark-theme');
        header.classList.toggle('dark-theme');
        mainTitle.classList.toggle('dark-theme');
        themeButton.classList.toggle('dark-theme');

        const logo = document.querySelector('.logo');
        logo.src = body.classList.contains('dark-theme')
        ? './assets/images/logolight.svg'
        : './assets/images/logo.svg';

        const icon = document.querySelector('.icon__theme');
        icon.src = body.classList.contains('dark-theme')
        ? './assets/images/icon-sun.svg'
        : './assets/images/icon-moon.svg';

        filters.forEach(filter => {
            filter.classList.toggle('dark-theme');
        })

        cards.forEach(card => {
            card.classList.toggle('dark-theme');
        })

        title.forEach(titles => {
            titles.classList.toggle('dark-theme');
        })

        buttonRemove.forEach(button => {
            button.classList.toggle('dark-theme');
        })

    })

}
