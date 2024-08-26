//spread operator 
//primer uso ,cuando copias un arreglo o objeto 
const numeros =  [1,2,3];
let numerosCopiados = [...numeros];
numerosCopiados[0] = 0
console.log('numeros', numeros);//numeros[1,2,3]
console.log('numerosCopiados', numerosCopiados);//numerosCopiados[0,2,3]

//concatenar y agregar valores
const otrosNumeros = [4,5,6];

console.log([0,...numeros,...otrosNumeros,7,8]);

//con objetos 
const DEFAULT_OPTIONS={
  showMore:true,
  numOfResults:50,
  lazyLoad:true
}
//concatenar dos objetos 
 const user ={
  name:'Miguel',
  id:'1234'
 }
 const userContact ={
  twitter:'@luisfercoder',
  mail:'correo@gmail.com'
 }
 
 const fullUser ={...user,...userContact}
 console.log(fullUser)


//hacer la copia y cambiar el valor
const options ={
  ...DEFAULT_OPTIONS,
  lazyLoad:false
}
console.log(options);