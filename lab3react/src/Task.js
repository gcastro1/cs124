import App from "./App";
import './Task.css';
import {useState} from "react";



function Task(props){
    const edit = props.editState;
    const show = props.show;
    const toDelete = props.toDelete;
    const[editInput, setEditInput] = useState(props.task_name);
    const[editPriority, setEditPriority] = useState(props.priority);

    console.log(props.task_id)


    if(edit === 0){
        return <div id={"task"+props.task_id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={props.task_id}
                   name={"cb"+props.task_name}
                   aria-label={"checkbox for " + props.task_name}
                   value={props.task_name}
                   checked={props.completed && !toDelete}
                   onChange={(e)=>props.handleTaskFieldChanged(e.target.id, "completed", e.target.checked)}/>
            <label htmlFor={props.task_name} aria-label={props.task_name + " completed: " + props.completed.toString()}
                   className="taskLabel"> {props.task_name} </label>
            <select name="priorityLvl" id="priorityLvl" value={props.priority}
                    aria-label = "Set priority for this task"
                    onChange={(event)=>props.handleConfEdit2(props.task_id,event.target.value)}>
                <option value="0"></option>
                <option value="1">!</option>
                <option value="2">!!</option>
                <option value="3">!!!</option>
            </select>
            <button type="button" id={"ed"+props.task_id}
                    aria-label="edit task"
                    onClick={(e)=>props.handleEditClick(e.target.id)} className="edit">
                edit </button>
        </div>
    }
    else if(edit === 1){
        return <div id={"task"+props.task_id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={props.task_id}
                   name={props.task_name}
                   value={props.task_name}
                   checked={props.completed}/>
            <input  type = "text" id = "newTask" name="newTask" value={editInput}
                    onChange={(event)=>setEditInput(event.target.value)}
                    onKeyPress={(e)=>
                    {if(e.key ==="Enter")props.handleConfEdit(props.task_id,editInput)}}/>
            <button type="button" id={props.task_id} onClick={(e)=>props.handleConfEdit(e.target.id,editInput)}
                    className="edit"> confirm edit </button>
        </div>
    }

    else{
        return <div id={props.task_id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={props.task_id}
                   name={"cb"+props.task_name}
                   value={props.task_name}
                   checked={props.completed}/>
            <label htmlFor={props.task_name}> {props.task_name} </label>
        </div>
    }

}

/*props.handleTaskFieldChanged(e.target.id, "completed", e.target.checked)*/
export default Task;