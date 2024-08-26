//Manipulacion de objetos
const producto ={
  nombre:"Tablet",
  precio : 300,
  disponibilidad:false,
}
const cliente ={
  nombre:"Fernando",
  premium: true
}

//Añadimos  un objeto dentro de otro , juntandolos
// const carrito = {
//   cantidad: 1,
//   ...producto
// }
// console.log(carrito)

//Agregar dos objetos dentro de uno nuevo ,pero juntandolos
const nuevoObjeto={
  ...producto,//si quitamos el spread operator , solo introducimos 2 objetos dentro de otro
  ...cliente,
}

console.log(nuevoObjeto)

//Forma con menos codigo para hacer lo anterior
const nuevoObjeto2 = Object.assign(producto,cliente);
console.log(nuevoObjeto2)