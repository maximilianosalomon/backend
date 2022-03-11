class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [{ nombre: "libro1", autor: "autor1" }];
    this.mascotas = ["perro"];
  }
  //Metodos
  getFullName() {
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
  }
  addMascota(mascota) {
    return this.mascotas.push(mascota);
  }
  countMascota() {
    console.log(`Cantidad de mascotas: ${this.mascotas.length}`);
  }
  addBook(libro) {
    return this.libros.push(libro);
  }
  getBookNames() {
    for (const libro of this.libros) {
      console.log(libro.nombre);
      // this.libros.forEach((libro) => console.log(libro.nombre));
    }
  }
}

//Creo usuario
const usuario1 = new Usuario("Maximiliano", "Salomon");
//Muestro el nombre complete del usuario x consola
usuario1.getFullName();
//Agrego una nueva mascota
usuario1.addMascota("gato");
//Muestro la cantidad de mascotas x consola
usuario1.countMascota();
//Agrego un nuevo libro
usuario1.addBook({ nombre: "libro2", autor: "autor2" });
//Muestro el nombre de todos los libros x consola
usuario1.getBookNames();
