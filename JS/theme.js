
// Toggle between light and dark Themes
const body = document.body;
const themeButton = document.querySelector('.button-theme');
const header = document.querySelector('.header');
const mainTitle = document.querySelector('.main__title');

// Función auxiliar para obtener elementos dinámicamente
function getDynamicElements() {

    return {
        filters: document.querySelectorAll('.filter__option'),
        cards: document.querySelectorAll('.card'),
        titles: document.querySelectorAll('.title'),
        buttonRemoves: document.querySelectorAll('.button__remove')
    };

}

// Función para cambiar entre temas
function switchTheme() {

    const isDarkMode = body.classList.contains('dark-theme');

    if (isDarkMode) {
        // Cambiar a light theme
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');

        header.classList.remove('dark-theme');
        header.classList.add('light-theme');

        mainTitle.classList.remove('dark-theme');
        mainTitle.classList.add('light-theme');

        themeButton.classList.remove('dark-theme');
        themeButton.classList.add('light-theme');

        // Actualizar imágenes para light theme
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = './assets/images/logo.svg';
        }

        const icon = document.querySelector('.icon__theme');
        if (icon) {
            icon.src = './assets/images/icon-moon.svg';
        }

        // Aplicar light theme a elementos dinámicos
        const elements = getDynamicElements();

        elements.filters.forEach(filter => {
            filter.classList.remove('dark-theme');
            filter.classList.add('light-theme');
        });

        elements.cards.forEach(card => {
            card.classList.remove('dark-theme');
            card.classList.add('light-theme');
        });

        elements.titles.forEach(title => {
            title.classList.remove('dark-theme');
            title.classList.add('light-theme');
        });

        elements.buttonRemoves.forEach(button => {
            button.classList.remove('dark-theme');
            button.classList.add('light-theme');
        });

    } else {
        // Cambiar a dark theme
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');

        header.classList.remove('light-theme');
        header.classList.add('dark-theme');

        mainTitle.classList.remove('light-theme');
        mainTitle.classList.add('dark-theme');

        themeButton.classList.remove('light-theme');
        themeButton.classList.add('dark-theme');

        // Actualizar imágenes para dark theme
        const logo = document.querySelector('.logo');
        if (logo) {
            logo.src = './assets/images/logolight.svg';
        }

        const icon = document.querySelector('.icon__theme');
        if (icon) {
            icon.src = './assets/images/icon-sun.svg';
        }

        // Aplicar dark theme a elementos dinámicos
        const elements = getDynamicElements();

        elements.filters.forEach(filter => {
            filter.classList.remove('light-theme');
            filter.classList.add('dark-theme');
        });

        elements.cards.forEach(card => {
            card.classList.remove('light-theme');
            card.classList.add('dark-theme');
        });

        elements.titles.forEach(title => {
            title.classList.remove('light-theme');
            title.classList.add('dark-theme');
        });

        elements.buttonRemoves.forEach(button => {
            button.classList.remove('light-theme');
            button.classList.add('dark-theme');
        });
    }
}

// Configurar el event listener una sola vez
export function toggleTheme() {

    if (themeButton) {
        themeButton.addEventListener('click', switchTheme);
    }

}

// Aplicar el tema actual a las cards que se crean dinámicamente
export function applyDarkThemeToCards() {

    const isDarkMode = body.classList.contains('dark-theme');
    const elements = getDynamicElements();

    if (isDarkMode) {
        // Aplicar dark theme
        elements.cards.forEach(card => {
            card.classList.remove('light-theme');
            card.classList.add('dark-theme');
        });

        elements.titles.forEach(title => {
            title.classList.remove('light-theme');
            title.classList.add('dark-theme');
        });

        elements.buttonRemoves.forEach(button => {
            button.classList.remove('light-theme');
            button.classList.add('dark-theme');
        });
    } else {
        // Aplicar light theme
        elements.cards.forEach(card => {
            card.classList.remove('dark-theme');
            card.classList.add('light-theme');
        });

        elements.titles.forEach(title => {
            title.classList.remove('dark-theme');
            title.classList.add('light-theme');
        });

        elements.buttonRemoves.forEach(button => {
            button.classList.remove('dark-theme');
            button.classList.add('light-theme');
        });
    }

}
