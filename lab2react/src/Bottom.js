import App from "./App";
import './Bottom.css';
import {useState} from "react";

function Bottom(props){
    const[taskNameInput, setTaskNameInput] = useState(null);
    function onCreateClick(){
        props.onItemAdded(taskNameInput);
        setTaskNameInput("");
    }
    return <div className="bottom">
        New task:<br/>
        <input  type = "text" id = "newTask" name="newTask"
                onChange={(event)=>setTaskNameInput(event.target.value)} value={taskNameInput}/>
        <button type="button" id="create" onClick={(e)=>onCreateClick()}> Create Task </button> <br/>
        <button type="button" id="hide"> Hide Completed Tasks </button>
        <button type="button" id="clear" onClick={(e) => props.onItemDeleted()} >
            Clear Completed Tasks </button>
        {console.log(taskNameInput)}
    </div>
}

export default Bottom;