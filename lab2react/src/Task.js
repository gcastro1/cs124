import App from "./App";
import './Task.css';

function Task(props){
    console.log([props.id,props.name,props.completed.toString()])
    return <div id={"id"+props.id}>
        <input type="checkbox" id={"id"+props.id}
               name={props.name}
               value={props.name}
               onChange={(e)=>props.handleCheckChange(e.target.id,e.target.checked)}/>
        <label htmlFor={props.name}> {props.name} </label>
        <button type="button" className="edit"> edit </button>
    </div>
}

export default Task;