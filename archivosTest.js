//import
const Contenedor = require("./archivos");
const Item = require("./item");
// const productos = require("./productos");
// console.log(productos);

//creo archivo que contiene los productos
const contenedor = new Contenedor("./productos.txt");
const nuevoItem = new Item("Lapiz", "50", "imagenLapiz");
/*----Metodos----*/
// contenedor.writeFile("Nuevo producto");
// contenedor.getAll();
// contenedor.save("cuki");
//contenedor.deleteAll();

/*----Metodos x ID----*/
//contenedor.getById();
//contenedor.deleteById();

// /*------------PRUEBAS------------*/
// console.log(nuevoItem);
// contenedor.getAll();
// contenedor.save(JSON.parse(nuevoItem));
contenedor.save(nuevoItem);
// contenedor.getAll();

// contenedor.writeFile(nuevoItem);
