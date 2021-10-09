import App from "./App";
import './Task.css';

function Task(props){
    return <div id={"id"+props.id}>
        <input type="checkbox" id={"cb"+props.id} name="potato" value={props.name} checked={props.completed}/>
        <label htmlFor={props.name} > {props.name} </label>
        <button type="button" className="edit"> edit </button>
    </div>
}

export default Task;