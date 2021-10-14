import App from "./App";
import './Task.css';
import {useState} from "react";



function Task(props){
    const edit = props.editState;
    const show = props.show;
    const[editInput, setEditInput] = useState(props.name);

    if(edit === 0){
        return <div id={"id"+props.id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={"id"+props.id}
                   name={props.name}
                   value={props.name}
                   onChange={(e)=>props.handleCheckChange(e.target.id,e.target.checked)}/>
            <label htmlFor={props.name}> {props.name} </label>
            <button type="button" id={"ed"+props.id}
                    onClick={(e)=>props.handleEditClick(e.target.id)} className="edit">
                edit </button>
        </div>
    }
    else if(edit === 1){
        return <div id={"id"+props.id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={"id"+props.id}
                   name={props.name}
                   value={props.name}
                   onChange={(e)=>props.handleCheckChange(e.target.id,e.target.checked)}/>
            <input  type = "text" id = "newTask" name="newTask"
                    onChange={(event)=>setEditInput(event.target.value)} value={editInput}/>
            <button type="button" id={"edc"+props.id} onClick={(e)=>props.handleConfEdit(e.target.id,editInput)}
                    className="edit"> confirm edit </button>
        </div>
    }

    else{
        return <div id={"id"+props.id} className={"comp"+props.completed.toString()+"show"+show.toString()}>
            <input type="checkbox" id={"id"+props.id}
                   name={props.name}
                   value={props.name}
                   onChange={(e)=>props.handleCheckChange(e.target.id,e.target.checked)}/>
            <label htmlFor={props.name}> {props.name} </label>
        </div>
    }

}

export default Task;