import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList.js';
import Bottom from './Bottom.js';


function App(props) {
  return (
    <div className="App">
      <h1>List of Things to Do</h1>
        <TaskList handleCheckChange={props.handleCheckChange} handleConfEdit={props.handleConfEdit}
                  data={props.data} showCompletedTask={props.showCompletedTask}/> <br/>
        <Bottom onItemDeleted={props.onItemDeleted} onItemAdded={props.onItemAdded}
                handleHideCompleted={props.handleHideCompleted} showCompletedTask={props.showCompletedTask}/>
    </div>
  );
}

export default App;
