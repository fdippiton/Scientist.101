import router from './routes';

/* Window me permite si esta en el contexto de la app. 
AddEventListener va a estar escuchando si algo sucede en este 
caso si la carga de la pagina ha sucedido(las apps cargan una 
sola vez todos los archivos) cuando todo los archivos esten cargados y listos
en el navegador vamos a ejecutar el codigo que hemos recibido*/
window.addEventListener('load', router);// Ya sea una una funcion anonima que le quiera pasa mas codigo o una previamente hecha, en este caso router

// Tenemos que generar un addEventListener que se encargara de escuchar las rutas, en este caso el hash al que me estoy moviendo
window.addEventListener('hashchange', router);



