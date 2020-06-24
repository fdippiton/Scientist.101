import Header from '../templates/Header';
import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

// Creacion de rutas: Generaremos un objeto en el cual establecemos cuales son las rutas y que va a hacer render en cada una de ellas
const routes = {
    '/': Home,
    '/:id': Character,  //Sera dinamico, empujamos hacia el template que va a hacer render en este caso lo personajes
    '/contact': 'Contact',
};

// Creamos nuestro manejador: se encargara de mostrar los elementos segun la logica que estableceremos. Tambien trabajaremos como obtener valores desde el navegador y como vamos a estructurarlos para saber cual es la ruta a la cual nuestro usuario ha querido moverse
const router = async () => { // Sera asincrona porque queremos esperar hasta que algo suceda dentro de nuestra app para entonces ir continuando con nuestro bloque de nuestra app
    /* Debemos establecer los templates que tenemos hacia un elemento del Dom */
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');

    header.innerHTML = await Header(); // Empujamos nuestro header a mi app
    
    let hash = getHash(); // obtener el hash donde se encuentre o la seccion a la que se esta moviendo
    let route = await resolveRoutes(hash); // Debemos manejar las rutas
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
    // Todo esto nos va a hacer render de nuestra app
}

export default router;