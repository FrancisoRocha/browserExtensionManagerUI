
//Filtros de la barra de busqueda

export function filtersCards(){

    const filterButtons = document.querySelectorAll('.main-filter__options button');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.dataset.filter;
            document.querySelectorAll('.card').forEach(card => {
                if (filter === 'all') {
                    card.style.display = 'block';
                } else if (filter === 'active') {
                    card.style.display = card.classList.contains('active') ? 'block' : 'none';
                } else if (filter === 'inactive'){
                    card.style.display = card.classList.contains('inactive') ? 'block' : 'none';
                }
            })
        })
    })

}
