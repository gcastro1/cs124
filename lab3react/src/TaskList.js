import Task from './Task.js'
import App from "./App";
import {useState} from "react";
import './TaskList.css';

function TaskList(props){
    const[taskToBeEdit, setTaskToBeEdit] = useState(-1);
    console.log(taskToBeEdit);

    function handleConfEdit(id,text){
            setTaskToBeEdit(-1);
        if(text!==""){
            props.handleTaskFieldChanged(id,"task",text);
        }
    }

    if (props.tasks.length === 0){
        return <div> Nothing to do!</div>
    }
    else{
        if(taskToBeEdit !== -1){
            const listTasks = props.tasks.map((t) =>
            {if (taskToBeEdit.includes(t.id)) {
                return <Task handleTaskFieldChanged={props.handleTaskFieldChanged}
                             id={t.id} task={t.task} completed={t.completed}
                             editState={1} show={props.showCompletedTask}
                            handleConfEdit={handleConfEdit}/>;
                }
            else {
                return <Task handleTaskFieldChanged={props.handleTaskFieldChanged} id={t.id} name={t.name} completed={t.completed}
                             editState={2} show={props.showCompletedTask}/>;
                }
            })
            return <div id={"TaskList"}> {listTasks} </div>
        }

        else{
            const listTasks = props.tasks.map((t) =>
                <Task handleTaskFieldChanged={props.handleTaskFieldChanged}
                      handleEditClick={(taskID)=>setTaskToBeEdit(taskID)}
                      id={t.id} task={t.task} completed={t.completed}
                      editState={0} show={props.showCompletedTask} toDelete={props.toDelete}/>);
            return <div id={"TaskList"}> {listTasks} </div>
        }

    }
}
export default TaskList;

