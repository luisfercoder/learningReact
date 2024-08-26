//destructuring

//Forma mas laboriosa 

const numeros = [1,2,3];
let uno = numeros[0],
    dos = numeros[1],
    tres = numeros[2];

console.log(uno,dos,tres);    

//con destructuring 
 const [one,two,three]= numeros;
 console.log(numeros);
 //1,2,3

 //objetos 
 const persona ={
  nombre:'Fernando',
  apellido:'Cruz',
  edad:22
 }

 let {nombre,apellido,edad }=persona;
 
 console.log(nombre,apellido,edad);
 console.log(`Hola mi nombre es ${nombre} ${apellido} y tengo ${edad}`);