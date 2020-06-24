import getData from '../utils/getData'

// Aqui vamos a establecer el llamado de la funcion
const Home = async () => {
    const characters = await getData()

    const view = `
        <div class="Characters">
            ${characters.results.map(character => `
                <article class="Character-item">
                    <a href="#/${character.id}/">
                        <img src="${character.image}" alt="${character.name}">
                        <h2>${character.name}</h2>
                    </a>
                </article>
            `).join('')} 
        </div>
    `
    return view;
    // Join es para que cuando se genere el bloque se una y que le quite las comas del arreglo generado, que no use ninguna forma de separarlo
}

export default Home;