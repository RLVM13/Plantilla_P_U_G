const express = require('express')
const app = express()
const port = 3000

/***** RUTAS *******/
/* const booksRoutes = require("./routes/books.routes");
const productsRoutes = require("./routes/products.routes")
const entriesRoutes = require("./routes/entries.routes")
const productsWebRoutes = require("./routes/products.web.routes"); */

//MIDDLEWARES (función que se puede ejecutar antes o después del manejo de una ruta, es decir, entremedias del Request y Response)
app.use(express.json()); //habilita el body para parsear las peticiones, lo convierte e interpreta

//configuracion de PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views', './views');

//Templates - Plantilla de Pug
//http://localhost:3000/
app.get('/', function (req, res) {
  res.render('home');
});

//http://localhost:3000
app.listen(port, () => {
    console.log(`Example app listening on  http://localhost:/${port}`)
  })