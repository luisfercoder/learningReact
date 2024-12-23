import { useState } from "react";

export default function ShowHide() {
  const [state, setState] = useState(true);

  function handleClick() {
    setState(prevState => !prevState) 
    }

  return (
    <div className="App">
      {state && 'Welcome to react Challenges'}<br/>
      <button onClick={handleClick}>{state ? 'Hide' : 'Show'}</button>
    </div>
  );
}
