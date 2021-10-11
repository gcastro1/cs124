import App from "./App";
import './Bottom.css';

function Bottom(props){
    return <div className="bottom">
        New task:<br/>
        <input type = "text" id = "newTask" name="newTask"/>
        <button type="button" id="create"> Create Task </button> <br/>
        <button type="button" id="hide"> Hide Completed Tasks </button>
        <button type="button" id="clear" onClick={(e) => props.onItemDeleted()} >
            Clear Completed Tasks </button>
    </div>
}

export default Bottom;