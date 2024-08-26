import { useState } from "react";
export default function Player({ initialName, symbol,isActive }) {
  const [playerName,setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function HandlerClick() {
    setIsEditing((editing)=>!editing);
  }
  function handleChange (event){
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;

  if (isEditing) {
    editablePlayerName= (
    <input type="text" required value={playerName} onChange={handleChange}/>
  );
  }

  return (
    <li className={isActive ? 'active' : 'undefined'}>
      <span className="players">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={HandlerClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}