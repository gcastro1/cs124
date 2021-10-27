import App from "./App";
import './Bottom.css';
import {useState} from "react";

function Bottom(props){
    const[taskNameInput, setTaskNameInput] = useState("");

    function onCreateClick(){
        props.handleTaskAdded(taskNameInput);
        setTaskNameInput("");
    }

    {console.log(taskNameInput)}
    {console.log(props.showCompletedTask.toString())}

    if (props.showCompletedTask){
        return <div className="bottom">
            New task:<br/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setTaskNameInput(event.target.value)}
                    value={taskNameInput}/>

            <button type="button" id="create" onClick={(e)=> onCreateClick()}>
                Create Task
            </button> <br/>

            <button type="button" id="hide" onClick={(e)=>console.log("clicked hide")/*(e)=>props.handleHideCompleted()*/} >
                Hide Completed Tasks
            </button>

            <button type="button" id="clear" onClick={(e)=>console.log("clicked complete")/*(e) => props.onItemDeleted()*/} >
                Clear Completed Tasks
            </button>

        </div>
    }
    else{
        return <div className="bottom">
            New task:<br/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setTaskNameInput(event.target.value)} value={taskNameInput}/>
            <button type="button" id="create" onClick={console.log("create clicked")/*(e)=>onCreateClick()*/}> Create Task </button> <br/>
            <button type="button" id="show" onClick={console.log("show clicked")/*(e)=>props.handleHideCompleted()*/} >
                Show Completed Tasks
            </button>
            <button type="button" id="clear" onClick={console.log("clear clicked")/*(e) => props.onItemDeleted()*/} >
                Clear Completed Tasks </button>
        </div>
    }

}


export default Bottom;