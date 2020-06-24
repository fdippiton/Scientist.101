const getHash = () => 
    location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/'; // ['', '1', '']

/*
location: es un elemento del navegador
hash: vamos a obtener el valor de hash en el que se encuentre // #/1/  tenemos que parsear los elementos que va a necesitar para obtener el valor solo del id (1) porque no queremos esta estructura, a continuacion lo vemos
slice: me permite eliminar el primer elemento en este caso el #
toLocateLowerCase: para que siempre nos lo devuelva en minusculas
split: convetirlo en un arreglo, y le pasamos la regla de que elimine los /
[] paar la posicion que queremos
|| en caso de que no encuntre ninguna ruta nos manda a / la raiz del proyecto y no este navegando sobre una seccion
*/

export default getHash;

