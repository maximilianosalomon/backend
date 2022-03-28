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
      console.log("No se pudo guardar el archivo", error);
    }
  }
  //leer todo
  async getAll() {
    try {
      const archivo = await fs.promises.readFile(this.fileName, "utf-8");
      const contenido = JSON.parse(archivo);
      // console.log(contenido.length);
      console.log("Obtenido!");
      return contenido;
    } catch (error) {
      ("No se pudo leer el archivo!");
    }
  }
  //guardar
  async save(data) {
    try {
      console.log(data);
      // const archivo = await fs.promises.readFile(this.fileName, "utf-8");
      // const contenido = JSON.parse(archivo);
      const contenido = await this.getAll(); //OK
      // console.log(contenido); //OK
      let nuevoId = contenido[contenido.length - 1].id + 1; //OK
      console.log("este es el new Id: " + nuevoId); //OK
      // let nuevoItem = { ...data, id: nuevoId };
      let nuevoItem = { ...data };
      console.log("este es el new Item: " + nuevoItem);
      // contenido.push(nuevoItem);
      // // console.log(contenido);
      // await this.writeFile(contenido);
      // return nuevoId;
    } catch (error) {
      console.log("No se pudo guardar el archivo", error);
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
    console.log("negro");
  }
}

module.exports = Contenedor;
