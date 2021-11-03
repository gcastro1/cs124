import Task from './Task.js'
import App from "./App";
import {useState} from "react";
import './TaskList.css';

function TaskList(props){
    const[taskToBeEdit, setTaskToBeEdit] = useState(-1);

    function handleConfEdit(id,text){
        setTaskToBeEdit(-1);
        props.handleTaskFieldChanged(id,"task",text);
    }
    function handleConfEdit2(id,priorityNum){
        props.handleTaskFieldChanged(id,"priority",priorityNum);
    }

    if (props.tasks.length === 0){
        return <div> Nothing to do!</div>
    }
    else{
        if(taskToBeEdit !== -1){
            const listTasks = props.tasks.map((t) =>
            {if (taskToBeEdit.includes(t.id)) {
                return <Task handleTaskFieldChanged={props.handleTaskFieldChanged}
                             id={t.id} task={t.task} completed={t.completed} priority={t.priority}
                             editState={1} show={props.showCompletedTask}
                            handleConfEdit={handleConfEdit}/>;
                }
            else {
                return <Task handleTaskFieldChanged={props.handleTaskFieldChanged} id={t.id} task={t.task} completed={t.completed}
                             priority={t.priority}
                             editState={2} show={props.showCompletedTask}/>;
                }
            })
            return <div id={"TaskList"}> {listTasks} </div>
        }

        else{
            const listTasks = props.tasks.map((t) =>
                <Task handleTaskFieldChanged={props.handleTaskFieldChanged}
                      handleEditClick={(taskID)=>setTaskToBeEdit(taskID)}
                      id={t.id} task={t.task} completed={t.completed} priority={t.priority}
                      editState={0} show={props.showCompletedTask} toDelete={props.toDelete}
                      handleConfEdit2={handleConfEdit2}/>);
            return <div id={"TaskList"}> {listTasks} </div>
        }

    }
}
export default TaskList;

