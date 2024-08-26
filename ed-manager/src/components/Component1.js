import React from "react";

const Componente =(props)=><h2>{props.msg}</h2>;

//function declaration
// function Componente(props){
//   return <h2>{props.msg}</h2>;
// }


//Por clases
// class Componente extends Componente{
//   render(){
//     return <h2>{this.props.msg}</h2>
//   }
// }

export default Componente;