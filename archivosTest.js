//import
const Contenedor = require("./archivos");
const productos = require("./productos");
// console.log(productos);

//creo archivo que contiene los productos
const contenedor = new Contenedor("./productos.txt");

/*----Metodos----*/
// contenedor.writeFile("Nuevo producto");
contenedor.getAll();
// contenedor.save("cuki");
//contenedor.deleteAll();

/*----Metodos x ID----*/
//contenedor.getById();
//contenedor.deleteById();
