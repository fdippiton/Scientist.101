const resolveRoutes = (route) => { // Recibimos la ruta
    if (route.length <= 3) {
        let validRoute = route === '/' ? route : '/:id'; // Asi sabemos que no hay un valor aleatorio aqui
        return validRoute;
    }
    
    return `/${route}`; //about
}

// Si route es igual a / y sino es igual a un id y sino a una seccion por la cual el usuario esta navegando

export default resolveRoutes;
