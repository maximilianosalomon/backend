const fs = require("fs");

//class
class Contenedor {
  constructor(nombreArchivo) {
    this.fileName = nombreArchivo;
  }
  //metodos
  //escribir
  async writeFile(data) {
    try {
      const contenido = await fs.promises.writeFile(this.fileName, data);
      console.log("Creado!");
      return contenido;
    } catch (error) {
      console.log("No se pudo guardar el archivo");
    }
  }
  //guardar
  async save(data) {
    try {
      const contenido = await fs.promises.readFile(this.fileName, "utf-8");
      let nuevoId = parseInt(contenido[contenido.length - 3]) + 1;
      // console.log("este es el newId: " + newId);
      let nuevoProducto = { ...contenido, id: nuevoId };
      console.log("este es el new producto: " + nuevoProducto);
      return contenido;
    } catch (error) {
      console.log("No se pudo guardar el archivo");
    }
  }
  //leer todo
  async getAll() {
    try {
      const archivo = await fs.promises.readFile(this.fileName, "utf-8");
      const contenido = JSON.parse(archivo);
      console.log(contenido);
      console.log("Obtenidos!");
      return contenido;
    } catch (error) {
      ("No se pudo leer el archivo!");
    }
  }
  //leer x id
  async getById(id) {
    try {
      const contenido = await this.getAll();
      const contenidoParse = JSON.parse(contenido);
      const elemento = contenidoParse.filter((e) => e.id === id);
      console.log("Obtenido x id!");
      return elemento;
    } catch (error) {
      ("No se pudo leer el archivo x id!");
    }
  }
  //borrar por ID
  async deleteById(id) {
    try {
      const contenido = await this.getAll();
      const contenidoParse = JSON.parse(contenido);
      const elementos = contenidoParse.filter((e) => e.id !== id);
      const contenidoNuevo = await this.save(JSON.stringify(elementos));
      console.log("Borrado x id!");
      return contenidoNuevo;
    } catch (error) {
      ("No se pudo leer el archivo x id!");
    }
  }
  //borrar todo
  async deleteAll() {
    console.log("borrado");
  }
}

module.exports = Contenedor;
