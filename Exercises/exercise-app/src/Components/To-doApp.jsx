import { useState } from "react";

function ToDoApp() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const handleAddTask = () => {
    setTasks([...tasks, task]);
    setTask('')
  };

  const handleDeleteTask =(index)=>{
    const newTasks = tasks.filter((_,i)=> i !== index);
    setTasks(newTasks)
  }
  return (
    <>
      <div>
        <input type="text" placeholder="Write the task here" value={task} onChange={(e)=>{setTask(e.target.value)}}/>
        <button onClick={handleAddTask}>Add task</button>
        
        <ul>{tasks.map((task, index) => {
         return  <li key={index}>{task}
         <button onClick={()=> handleDeleteTask(index)}>Delete</button>
         </li>

        })}</ul>
      </div>
    </>
  );
}
export default ToDoApp;
