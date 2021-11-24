import App from "./App";
import './Bottom.css';
import {useState} from "react";

function Bottom(props){
    const[listNameInput, setListNameInput] = useState("");
    const[taskNameInput, setTaskNameInput] = useState("");
    const[taskPriorityInput, setTaskPriorityInput] = useState("0");
    const showTaskStuff = !(props.initial);


    function onCreateListClick(){
        props.handleTaskListAdded(listNameInput);
        setListNameInput("");
        if(listNameInput === ""){
            return <p id="taskAddMessage" role="alert">
                No list added due to blank entry, please try again.
            </p>
        }
        else{
            return <p id="taskAddMessage" role="alert">
                List {listNameInput} successfully added!
            </p>
        }

    }

    function onCreateTaskClick(){
        props.handleTaskAdded(taskNameInput,taskPriorityInput);
        setTaskNameInput("");
        setTaskPriorityInput("0");
    }

    function onCreateListEnter(key){
        if (key === 'Enter') {
            props.handleTaskListAdded(listNameInput);
            setListNameInput("");
        }
    }

    function onCreateTaskEnter(key){
        if (key === 'Enter'){
            props.handleTaskAdded(taskNameInput,taskPriorityInput);
            setTaskNameInput("");
            setTaskPriorityInput("0");
        }
    }


    if (props.showCompletedTask){
        return <div className="bottom">
            <div className={"showTask" + showTaskStuff.toString()}>
                <div className="taskStuff_row1">
                <label htmlFor="newTask"> New task:</label><br/>
                <input  type = "text" id = "newTask" name="newTask"
                        aria-label = "text box for new task entry"
                        onKeyPress={(e)=>onCreateTaskEnter(e.key)}
                        onChange={(event)=>setTaskNameInput(event.target.value)}
                        value={taskNameInput}/>

                <select name="priorityLvl" id="priorityLvl" aria-label = "Set priority for new task"
                        onChange={(event)=>setTaskPriorityInput(event.target.value)}>
                    <option value="0">Select priority</option>
                    <option value="0">None</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>

                <button type="button" id="createTask" onClick={(e)=> onCreateTaskClick()}>
                    Create Task
                </button> <br/>
                </div>

                <button type="button" id="hide" onClick={(e)=>props.handleHideCompleted()} >
                    Hide Completed Tasks
                </button>

                <button type="button" id="clear" onClick={(e) => props.handleTasksDeleted()} >
                    Clear Completed Tasks
                </button> <br/>

            </div>

            <div className={"listAddDelete"}>
            <div className={"listStuff_row1"}>
            <label htmlFor="newList">New List:</label><br/>
            <input  type = "text" id = "newList" name="newList"
                    aria-label="Text box for new list entry"
                    onKeyPress={(e)=>{onCreateListEnter(e.key)}}
                    onChange={(event)=>setListNameInput(event.target.value)} value={listNameInput}/>
            <button type="button" id="createList" onClick={(e)=>onCreateListClick()}> Create List </button> <br/>
            </div>
            <button type="button" className={"showTask" + showTaskStuff.toString()} id="listDelete" onClick={(e) => props.handleTaskListDeleted()} >
                Delete this list </button> <br/>
            </div>



        </div>
    }
    else{
        return <div className="bottom">
            <div className={"showTask" + showTaskStuff.toString()}>
                <div className="taskStuff_row1">
                <label htmlFor="newTask" aria-label = "text box for new task entry"> New task:</label><br/>
                <input  type = "text" aria-label = "text box for new task entry" id = "newTask" name="newTask"
                        onKeyPress={(e)=>onCreateTaskEnter(e.key)}
                        onChange={(event)=>setTaskNameInput(event.target.value)} value={taskNameInput}/>

                <select name="priorityLvl" id="priorityLvl" aria-label = "Set priority for new task"
                        onChange={(event)=>setTaskPriorityInput(event.target.value)}>
                    <option value="0">Select priority</option>
                    <option value="0">None</option>
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                </select>
                <button type="button" id="createTask"  onClick={(e)=>onCreateTaskClick()}> Create Task </button> <br/>
                </div>

                <button type="button" id="show" onClick={(e)=>props.handleHideCompleted()}>
                    Show Completed Tasks
                </button>
                <button type="button" id="clear" onClick={(e) => props.handleTasksDeleted()} >
                    Clear Completed Tasks </button> <br/>
            </div>

            <div className={"listAddDelete"}>
            <div className={"listStuff_row1"}>
            <label htmlFor="newList">New List:</label><br/>
            <input  type = "text" id = "newList" name="newList"
                    aria-label="Text box for new list entry"
                    onChange={(event)=>setListNameInput(event.target.value)} value={listNameInput}/>
            <button type="button" id="createList" onClick={(e)=>onCreateListClick()}> Create List </button> <br/>
            </div>
            <button type="button" className={"showTask" + showTaskStuff.toString()} id="listDelete" onClick={(e) => props.handleTasksDeleted()} >
                Delete this list </button> <br/>
            </div>


        </div>
    }

}


export default Bottom;