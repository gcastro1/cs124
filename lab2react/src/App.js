import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList.js';
import Bottom from './Bottom.js';


function App(props) {
  return (
    <div className="App">
      <h1>List of Things to Do</h1>
        <TaskList handleCheckChange={props.handleCheckChange} handleConfEdit={props.handleConfEdit}
                  data={props.data}/>
        <Bottom onItemDeleted={props.onItemDeleted} onItemAdded={props.onItemAdded}/>
    </div>
  );
}

export default App;
