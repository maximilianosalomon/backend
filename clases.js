class Usuario {
  constructor(nombre, apellido, libros, mascotas) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.libros = [{}];
    this.mascotas = [];
  }
  getFullName() {
    console.log(`Nombre completo: ${this.nombre} ${this.apellido}`);
  }
  addMascota(mascota) {
    return this.mascotas.push(mascota);
  }
  countMascota() {
    console.log(`Cantidad de mascotas: ${this.mascotas.length}`);
  }
  addBook() {
    console.log();
  }
  getBookNames() {}
}

const usuario1 = new Usuario("Maximiliano", "Salomon");
usuario1.getFullName();
usuario1.countMascota();
addMascota("ruben");
