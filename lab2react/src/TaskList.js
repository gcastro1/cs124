import Task from './Task.js'
import App from "./App";
import {useState} from "react";
import './TaskList.css';

function TaskList(props){
    const[taskToBeEdit, setTaskToBeEdit] = useState(-1);
    {console.log(taskToBeEdit+(taskToBeEdit !== -1).toString())}

    function handleConfEdit2(id,text){
        setTaskToBeEdit(-1);
        props.handleConfEdit(id,text);
    }

    if (props.data.length === 0){
        return <div> Nothing to do!</div>
    }


    else{
        if(taskToBeEdit !== -1){
            const listTasks = props.data.map((t) =>
            {if (taskToBeEdit.includes(t.id)) {
                return <Task handleCheckChange={props.handleCheckChange}
                             handleConfEdit={handleConfEdit2}
                             id={t.id} name={t.name} completed={t.completed}
                             editState={1}/>;
                }
            else {
                return <Task handleCheckChange={props.handleCheckChange} id={t.id} name={t.name} completed={t.completed}
                             editState={2}/>;
                }
            })
            return <div id={"TaskList"}> {listTasks} </div>
        }
        else{
            const listTasks = props.data.map((t) =>
                <Task handleCheckChange={props.handleCheckChange}
                      handleEditClick={(taskID)=>setTaskToBeEdit(taskID)}
                      id={t.id} name={t.name} completed={t.completed}
                      editState={0}/>);
            return <div id={"TaskList"}> {listTasks} </div>
        }

    }
}
export default TaskList;

