const path = require('path') // Nos permite acceder hacia donde estamos dentro de la carpeta o donde nos estamos moviendo en el proyecto
const HtmlWebpackPlugin = require('html-webpack-plugin') // Para trabajar con html

// Viene cada configuracion de lo que va a suceder
module.exports = {
    entry: './src/index.js', // Nuestro punto de entrada. Aqui vivira todo nuestro codigo inicial y de ahi va a partir hacia el desarrollo que vamos a crear
    output: { // Donde vamos a poner el proyecto ya estructurado y compilado, listo para mandarse a produccion
        path: path.resolve(__dirname, 'dist'), // Hacia donde lo pondremas. Resolve para saber donde se encuentra(dirname) hay es donde se pondra una nueva carpeta dist (de distribution)
        filename: 'main.js' // Archivo que voy a generar compilado para produccion
    },
    resolve: {
        extensions: ['.js'],
    }, // para las extensiones que vamos a usar en nuestro proyecto
    module: {
        // Vamos a crear la regla de babel con la que vamos a preparar nuestro proyecto para que sea compatible con todos los navegadores
        rules: [
            {       // Primero la estructura de babel
                test: /\.js?$/, // para eso tenemos que generar un test de como vamos a identificar los archivos segun lo que se encuentran en su entorno, va a tener un regets que es una forma de establecer valores que queremos filtrar ya sea de una ruta, de unos elementos o de los archivos que vamos a estar utilizando
                //   El /\ es el punto de entrada, .js extensiones js regets ?$ me permite establecer cuales son estos elementos
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [ // Los plugins que vamos a utilizar
        new HtmlWebpackPlugin(
            {
                inject: true, // Como voy a un archivo html a inyectar un valor
                template: './public/index.html', // En donde se encuentra el template principal base
                filename: './index.html' // Hacia donde lo mandamos o guardamos, le podemo establecer un nombre o dejarle el que ya tiene
            }
        )
    ]
}