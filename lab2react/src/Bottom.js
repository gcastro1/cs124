import App from "./App";
import './Bottom.css';

function Bottom(){
    return <div className="bottom">
        New task:<br/>
        <input type = "text" id = "newTask" name="newTask"/>
        <button type="button"> Create Task </button> <br/>
        <button type="button"> Hide Completed Tasks </button>
        <button type="button"> Clear Completed Tasks </button>
    </div>
}

export default Bottom;