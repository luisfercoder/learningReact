export default function TabButton({children, onSelect, isSelected}){

  return(
    //also we can use destructuring
    <li>
      <button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button>
      </li>
  );           

}