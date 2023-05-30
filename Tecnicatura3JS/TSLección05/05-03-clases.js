//let persona3 = new Persona("Carla", "Ponce"); esto no se debe hacer: persona is not defined

class Persona { //Clase Padre
  constructor(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
  }

  get nombre() {
    return this._nombre;
  }
  set nombre(nombre) {
    this._nombre = nombre;
  }
  get apellido() {
    return this._apellido;
  }
  set apellido(apellido) {
    this._apellido = apellido;
  }
  nombreCompleto(){
    return this._nombre+' '+this._apellido;
  }
  // Sobreescribiendo el método de la clase padre (Object)
  toString(){ // Regresa un String
    // Se aplica el polimorfismo que significa = multiples formas en tiempo de ejecución
    return this.nombreCompleto();
  }
}

class Empleado extends Persona { // Clase hija
    constructor(nombre, apellido, departamento){
        super(nombre, apellido);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }
    set departamento(departamento){
        this._departamento = departamento;
    }
    // Sobreescritura
    nombreCompleto(){
      return super.nombreCompleto()+', '+this._departamento;
    }
}
let persona1 = new Persona("Martín", "Perez");
console.log(persona1.nombre);
persona1.nombre = 'Juan Carlos';
console.log(persona1.nombre);
// Ahora lo hacemos con los apellidos
console.log(persona1.apellido);
persona1.apellido = 'Sanchez';
console.log(persona1.apellido);
//console.log(persona1);
let persona2 = new Persona("Carlos", "Lara");
console.log(persona2.nombre);
persona2.nombre = 'María Laura';
console.log(persona2.nombre);
// Ahora lo hacemos con los apellidos
console.log(persona2.apellido);
persona2.apellido = 'Jonson';
console.log(persona2.apellido);
//console.log(persona2);

let empleado1 = new Empleado('María', 'Gimenez', 'Sistemas');
console.log(empleado1);
console.log(empleado1.nombreCompleto());

// Object.prototype.toString Esta es la manera de acceder a atributos y métodos de manera dinamica
console.log(empleado1.toString());
console.log(persona1.toString());