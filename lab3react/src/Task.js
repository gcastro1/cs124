import App from "./App";
import './Task.css';
import {useState} from "react";



function Task(props){
    const edit = props.editState;
    const show = props.show;
    const toDelete = props.toDelete;
    const[editInput, setEditInput] = useState(props.task);
    const[editPriority, setEditPriority] = useState(props.priority);

    console.log(editInput)

    function handleConfEdit3(id,priorityNum){
        setEditPriority(priorityNum);
        props.handleConfEdit2(id,editPriority);
    }

    if(edit === 0){
        return <div id={props.id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={props.id}
                   name={props.task}
                   value={props.task}
                   checked={props.completed && !toDelete}
                   onChange={(e)=>props.handleTaskFieldChanged(e.target.id, "completed", e.target.checked)}/>
            <label htmlFor={props.task}> {props.task} </label>
            <select name="priorityLvl" id="priorityLvl" value={props.priority}
                    onChange={(event)=>props.handleConfEdit2(props.id,event.target.value)}>
                <option value="0">None</option>
                <option value="1">Low</option>
                <option value="2">Medium</option>
                <option value="3">High</option>
            </select>
            <button type="button" id={"ed"+props.id}
                    onClick={(e)=>props.handleEditClick(e.target.id)} className="edit">
                edit </button>
        </div>
    }
    else if(edit === 1){
        return <div id={props.id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={props.id}
                   name={props.task}
                   value={props.task}
                   checked={props.completed}/>
            <input  type = "text" id = "newTask" name="newTask" value={editInput}
                    onChange={(event)=>setEditInput(event.target.value)} />
            <button type="button" id={props.id} onClick={(e)=>props.handleConfEdit(e.target.id,editInput)}
                    className="edit"> confirm edit </button>
        </div>
    }

    else{
        return <div id={props.id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={props.id}
                   name={props.task}
                   value={props.task}
                   checked={props.completed}/>
            <label htmlFor={props.task}> {props.task} </label>
        </div>
    }

}

export default Task;