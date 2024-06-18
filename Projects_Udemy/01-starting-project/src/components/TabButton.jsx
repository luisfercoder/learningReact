export default function TabButton({children, onSelect}){



  return(
    //also we can use destructuring
    <li>
      <button onClick={onSelect}>{children}</button>
      </li>
  );           

}