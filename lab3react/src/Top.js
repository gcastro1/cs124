import App from "./App";
import {useState} from "react";

function Bottom(props){
    const[taskNameInput, setTaskNameInput] = useState("");
    const[taskPriorityInput, setTaskPriorityInput] = useState("0");



    function onCreateClick(){
        props.handleTaskAdded(taskNameInput,taskPriorityInput);
        setTaskNameInput("");
        setTaskPriorityInput("0");
    }



    if (props.showCompletedTask){
        return <div className="top">
            New task:<br/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setTaskNameInput(event.target.value)}
                    value={taskNameInput}/>


            <select name="priorityLvl" id="priorityLvl"
                    onChange={(event)=>setTaskPriorityInput(event.target.value)}>
                <option value="0">Select priority</option>
                <option value="0">None</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>

            <button type="button" id="create" onClick={(e)=> onCreateClick()}>
                Create Task
            </button>
        </div>
    }
    else{
        return <div className="top">
            New task:<br/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setTaskNameInput(event.target.value)} value={taskNameInput}/>

            <select name="priorityLvl" id="priorityLvl"
                    onChange={(event)=>setTaskPriorityInput(event.target.value)}>
                <option value="0">Select priority</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
                <option value="0">None</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
            <button type="button" id="create" onClick={(e)=>onCreateClick()}> Create Task </button> <br/>
        </div>
    }

}


export default Bottom;