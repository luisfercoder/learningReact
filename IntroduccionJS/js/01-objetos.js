//un objeto es un acollecionde propiedades , unas asociacion de clave con un valor 

const producto ={
  nombre:"tablet",
  precio:500,
  disponible: false
}
// Object.freeze(producto)
// Object.seal(producto)

//Reescribir un valor 
producto.disponible = true;
//Sino existe va a añadir uno nuevo
producto.imagen ="imagen.jpeg"
//Eliminar propiedad
delete producto.precio

console.log(producto);
console.table(producto);

//Object literal Enhacement
const autentico = true;
const usuario ="Fernando"

const nuevoObjeto ={
  autentico: autentico,
  usuario
}
console.log(nuevoObjeto)