
// Activar o Desactivar la extension
export function switchEvent(){

    const switchExtensiones = document.querySelectorAll('.switch__input');

    switchExtensiones.forEach(sw => {
        sw.addEventListener('change', (e) => {

            const card = sw.closest('.card');
            const name = card.querySelector('.title').textContent;
            const status = e.target.checked;

            if(status){
                card.classList.add('active');
                console.log(`Extension ${name} activada`)
            } else {
                card.classList.remove('active');
                console.log(`Extension ${name} desactivada`)
            }

            // Actualizar en LocalStorage
            const stored = JSON.parse(localStorage.getItem('extensions')) || {};
            stored[name] = e.target.checked;
            localStorage.setItem('extensions', JSON.stringify(stored));

        })
    })

}
