import { filtersCards } from "./buttonsFilter.js";
import { switchEvent } from "./switchs.js";
import { applyDarkThemeToCards } from "./theme.js";

//TODO: Render cards - extensions
const cardsContainer = document.querySelector('.extensions__cards');
// Traer datos del DATA Json

async function getData(){
    try{
        const res = await fetch('../data.json');
        const data = await res.json();
        return data;
    } catch(error){
        console.error(`Error fetching data: ${error}`);
    }
}

// Render Cards
export async function renderCards() {

    const data = await getData();
    console.log(data)

    const stored = JSON.parse(localStorage.getItem('extensions')) || {};

    data.forEach(element => {

        if(stored[element.name] !== undefined){
            element.isActive = stored[element.name];
        }

        const card = document.createElement('div');
        card.classList.add('card');
        if(element.isActive) card.classList.add('active');
            else card.classList.add('inactive');

        // Crear Cards
        card.innerHTML =
            `
            <section class="info__card">
                <img src="${element.logo}" alt="${element.name}" class="icon">
                <div class="info__text">
                    <p class="title light-theme">${element.name}</p>
                    <p class="text light-theme">${element.description}</p>
                </div>
            </section>
            <!-- BUTTONS -->
            <section class="buttons__card">
                <button class="button__remove light-theme">Remove</button>
                <!-- SWITCH -->
                <label class="switch">
                    <input type="checkbox" class="switch__input" ${element.isActive ? 'checked' : ''}>
                    <span class="slider"></span>
                    <span class="knob"></span>
                </label>
                <span class="visually-hidden">Enable notifications</span>
            </section>
            `;
            cardsContainer.append(card);
            //Aplicar tema oscuro al las cards
            applyDarkThemeToCards();
            switchEvent();
            removerCard();
            filtersCards();
        });
}

// Funcion para El boton de Eliminar
function removerCard(){

    const btnRemove = document.querySelectorAll('.button__remove');

    btnRemove.forEach(btn => {
        btn.addEventListener('click', () => {
            const card = btn.closest('.card');
            card.remove();
        })
    })

}