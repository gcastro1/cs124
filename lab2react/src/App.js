import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList.js';
import Bottom from './Bottom.js';


function App(props) {
  return (
    <div className="App">
      <h1>List of Things to Do</h1>
        <TaskList handleCheckChange={props.handleCheckChange} data={props.data}/>
        <Bottom onItemDeleted={props.onItemDeleted}/>
    </div>
  );
}

export default App;
