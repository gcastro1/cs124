import logo from './logo.svg';
import './App.css';
import {useState} from "react";
import TaskList from './TaskList.js';
import Bottom from './Bottom.js';
import {useDocument} from "react-firebase-hooks/firestore";


function App(props) {

    if(props.tasks.length===0){
        return (<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <p>Nothing to do!</p>
            <Bottom onTaskAdded={props.onTaskAdded} showCompletedTask={true}
                    handleTaskAdded={props.handleTaskAdded}/>
        </div>);
    } else{
        return(<div className="App">
            {props.loading && <h1>Loading</h1>}
            <h1>List of Things to Do</h1>
            <label htmlFor="sortWithSelect">Sort by:</label>
            <select name="sortWithSelect" id="sortWithSelect" value={props.sortVal}
                    onChange={(event)=>props.setSort(event.target.value)}>
                <option value="default">default</option>
                <option value="priorityAsc">Lowest to Highest priority</option>
                <option value="priorityDesc">Highest to lowest priority</option>
            </select>
            <TaskList handleTaskFieldChanged={props.handleTaskFieldChanged}
                  tasks={props.tasks} showCompletedTask={props.showCompletedTask}
                      setSort={props.setSort}
                      sortPriority={props.sortPriority}
                      sortDirection={props.sortDirection}
                      toDelete={props.toDelete}/> <br/>
            <Bottom onTaskAdded={props.onTaskAdded}
                    showCompletedTask={props.showCompletedTask}
                    handleTaskAdded={props.handleTaskAdded}
                    handleHideCompleted={props.handleHideCompleted}
                    handleTaskFieldChanged={props.handleTaskFieldChanged}
                    handleTasksDeleted={props.handleTasksDeleted}
                    maxMessage={props.maxMessage}/>
        </div>);
    }
}

export default App;

/*handleConfEdit={props.handleConfEdit}*/

/*handleTaskAdded={props.handleTaskAdded}*/

/*<TaskList /*handleCheckChange={props.handleCheckChange} handleConfEdit={props.handleConfEdit}
                  data={props.data} showCompletedTask={props.showCompletedTask}/> <br/>
        <Bottom onItemDeleted={props.onItemDeleted} onItemAdded={props.onItemAdded}
                handleHideCompleted={props.handleHideCompleted} showCompletedTask={props.showCompletedTask}/>*/