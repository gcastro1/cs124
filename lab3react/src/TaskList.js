import Task from './Task.js'
import App from "./App";
import {useState} from "react";
import './TaskList.css';

function TaskList(props){
    const[taskToBeEdit, setTaskToBeEdit] = useState(-1);


    function handleConfEdit(id,text){
        setTaskToBeEdit(-1);
        props.handleTaskFieldChanged(id,"task_name",text);
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
            {if (taskToBeEdit.includes(t.task_id)) {
                return <Task className="task"
                             handleTaskFieldChanged={props.handleTaskFieldChanged}
                             task_id={t.task_id} task_name={t.task_name} completed={t.completed} priority={t.priority}
                             editState={1} show={props.showCompletedTask}
                             handleConfEdit={handleConfEdit}/>;
            }
            else {
                return <Task handleTaskFieldChanged={props.handleTaskFieldChanged} task_id={t.task_id}
                             task_name={t.task_name}
                             completed={t.completed}
                             priority={t.priority}
                             editState={2} show={props.showCompletedTask}/>;
            }
            })
            return <div id={"TaskList"}> {listTasks} </div>
        }

        else{
            const listTasks = props.tasks.map((t) =>
                <Task handleTaskFieldChanged={props.handleTaskFieldChanged}
                    /*handleEditClick={(taskID)=>setTaskToBeEdit(taskID)}*/
                      task_id={t.task_id} task_name={t.task_name} completed={t.completed} priority={t.priority}
                      editState={0} show={props.showCompletedTask} toDelete={props.toDelete}
                      handleEditClick={(taskID)=>setTaskToBeEdit(taskID)}
                      handleConfEdit2={handleConfEdit2}/>);
            return <div id={"TaskList"}> {listTasks} </div>
        }

    }
}
export default TaskList;

