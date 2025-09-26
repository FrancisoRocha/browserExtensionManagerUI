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

    data.forEach(element => {

        const card = document.createElement('div');
        card.classList.add('card');

        // Crear Cards
        card.innerHTML = 
            `
            <div class="info__card">
                <img src="${element.logo}" alt="${element.name}" class="icon">
                <div class="info__text">
                    <p class="title light-theme">${element.name}</p>
                    <p class="text light-theme">${element.description}</p>
                </div>
            </div>
            <!-- BUTTONS -->
            <div class="buttons__card">
                <button class="button__remove light-theme">Remove</button>
                <!-- SWITCH -->
                <label class="switch">
                    <input type="checkbox">
                    <span class="slider"></span>
                    <span class="knob"></span>
                </label>
            </div>
            `;
            cardsContainer.append(card);
        });
}