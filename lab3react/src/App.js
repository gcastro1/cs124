import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList.js';
import Bottom from './Bottom.js';





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
            <p>There's stuff to do!</p>
            <Bottom onTaskAdded={props.onTaskAdded} showCompletedTask={true} handleTaskAdded={props.handleTaskAdded}/>
        </div>);
    }
}

export default App;
/*handleTaskAdded={props.handleTaskAdded}*/

/*<TaskList /*handleCheckChange={props.handleCheckChange} handleConfEdit={props.handleConfEdit}
                  data={props.data} showCompletedTask={props.showCompletedTask}/> <br/>
        <Bottom onItemDeleted={props.onItemDeleted} onItemAdded={props.onItemAdded}
                handleHideCompleted={props.handleHideCompleted} showCompletedTask={props.showCompletedTask}/>*/