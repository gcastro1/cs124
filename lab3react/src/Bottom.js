import App from "./App";
import './Bottom.css';
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
        return <div className="bottom">
            New task:<br/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setTaskNameInput(event.target.value)}
                    value={taskNameInput}/>

            <label htmlFor="priorityLvl">Priority:</label>

            <select name="priorityLvl" id="priorityLvl"
                    onChange={(event)=>setTaskPriorityInput(event.target.value)}>
                <option value="0">None</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>

            <button type="button" id="create" onClick={(e)=> onCreateClick()}>
                Create Task
            </button> <br/>

            <button type="button" id="hide" onClick={(e)=>props.handleHideCompleted()} >
                Hide Completed Tasks
            </button>

            <button type="button" id="clear" onClick={(e) => props.handleTasksDeleted()} >
                Clear Completed Tasks
            </button>

        </div>
    }
    else{
        return <div className="bottom">
            New task:<br/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setTaskNameInput(event.target.value)} value={taskNameInput}/>
            <button type="button" id="create" onClick={(e)=>onCreateClick()}> Create Task </button> <br/>
            <button type="button" id="show" onClick={(e)=>props.handleHideCompleted()} >
                Show Completed Tasks
            </button>
            <button type="button" id="clear" onClick={(e) => props.handleTasksDeleted()} >
                Clear Completed Tasks </button>
        </div>
    }

}


export default Bottom;