import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TaskList from './TaskList.js';
import Top from './Top.js';
import Bottom from './Bottom.js';
import {useDocument} from "react-firebase-hooks/firestore";


function App(props) {

    let initial = true;

    if(props.currentList === "wow"){
        return (<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <h5>Select a list or create a new one!</h5>
            <Top
                currentList = {props.currentList}
                taskLists = {props.taskLists}
                handleTaskListSelect={props.handleTaskListSelect}
                setSort={props.setSort}
                sortPriority={props.sortPriority}
                sortVal={props.sortVal}
                sortDirection={props.sortDirection}
                deleteAllTasks = {props.deleteAllTasks}
                initial = {initial}/>
            <Bottom
                showCompletedTask = {props.showCompletedTask}
                handleTaskListAdded = {props.handleTaskListAdded}
                handleTaskAdded = {props.handleTaskAdded}
                initial = {initial}
            />

        </div>);
    }

    else if(props.tasks.length === 0){
        initial = false;
        return (<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <Top
                currentList = {props.currentList}
                taskLists = {props.taskLists}
                handleTaskListSelect={props.handleTaskListSelect}
                setSort={props.setSort}
                sortPriority={props.sortPriority}
                sortVal={props.sortVal}
                sortDirection={props.sortDirection}
                deleteAllTasks = {props.deleteAllTasks}
                initial = {initial} />

            <p>Your list has no tasks</p>

            <Bottom
                showCompletedTask={props.showCompletedTask}
                handleTaskListAdded = {props.handleTaskListAdded}
                handleTaskAdded = {props.handleTaskAdded}
                handleTaskListDeleted={props.handleTaskListDeleted}
                handleTasksDeleted = {props.handleTasksDeleted}
                handleHideCompleted={props.handleHideCompleted}
                initial = {initial}
            />

        </div>);
    }

    else{
        initial = false;
        const taskCount = props.tasks.length;
        return(<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <Top
                currentList = {props.currentList}
                taskLists = {props.taskLists}
                handleTaskListSelect={props.handleTaskListSelect}
                setSort={props.setSort}
                sortPriority={props.sortPriority}
                sortVal={props.sortVal}
                sortDirection={props.sortDirection}
                deleteAllTasks = {props.deleteAllTasks}
                initial = {initial}
            />
            <p>Number of tasks: {taskCount + (taskCount===10 && " (max)") }</p>
            <TaskList handleTaskFieldChanged={props.handleTaskFieldChanged}
                      tasks={props.tasks} /*showCompletedTask={props.showCompletedTask}*/
                      setSort={props.setSort}
                      sortPriority={props.sortPriority}
                      sortDirection={props.sortDirection}
                      toDelete={props.toDelete}
                      showCompletedTask={props.showCompletedTask}/><br/>
            <Bottom
                showCompletedTask={props.showCompletedTask}
                handleTaskListAdded = {props.handleTaskListAdded}
                handleTaskAdded = {props.handleTaskAdded}
                handleTaskListDeleted={props.handleTaskListDeleted}
                handleTasksDeleted = {props.handleTasksDeleted}
                handleHideCompleted={props.handleHideCompleted}
                initial = {initial}

            />
        </div>);
    }
}

export default App;