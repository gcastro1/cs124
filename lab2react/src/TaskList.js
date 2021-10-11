import Task from './Task.js'
import App from "./App";
import './TaskList.css';

function TaskList(props){
    if (props.data.length === 0){
        return <div> Nothing to do!</div>
    }
    else{
        const listTasks = props.data.map((t) =>
            <Task handleCheckChange={props.handleCheckChange} id={t.id} name={t.name} completed={t.completed}/>);
        return <div id={"TaskList"}>
            {listTasks}
        </div>
    }
}
export default TaskList;

