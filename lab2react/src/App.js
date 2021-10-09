import logo from './logo.svg';
import './App.css';
import TaskList from './TaskList.js';
import Bottom from './Bottom.js';
import DataManager from "./DataManager";

function App() {
  return (
    <div className="App">
      <h1>List of Things to Do</h1>
        <TaskList data={<DataManager/>}/>
        <Bottom/>
    </div>
  );
}

export default App;
