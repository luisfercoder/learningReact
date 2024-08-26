//HAy diferentes formas , dependera de lo que quieres renderizar
    function Item({name,isPacked}){
     //Utilizando if-else statement
     is(isPacked){
        return <li className='item'>{name}</li>;
     } 



    }
export default function PackingList() {
    
  return (
    <section>
      <h1>Packing List </h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Space suit" 
        />
        <Item 
          isPacked={true} 
          name="Helmet with a golden leaf" 
        />
        <Item 
          isPacked={false} 
          name="Photo of Tam" 
        />
      </ul>
      
    </section>
  );
}
