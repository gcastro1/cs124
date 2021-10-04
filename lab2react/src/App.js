import logo from './logo.svg';
import './App.css';
const initialData = [{id: 0, name:"call mom", completed:false}
]

function TaskList(props){
   if (props.data.length === 0){
       return <div> Nothing to do!</div>
   }
   else{
       const listTasks = initialData.map((t) =>
           <Task name={t.name} completed={t.completed}/>);
       return <div id={"TaskList"}>
           {listTasks}
       </div>
   }
}

function Task(props){
    return <div id={"id"+props.id}>
        <input type="checkbox" id={"cb"+props.id} name={props.name} value={props.name}/>
        <label htmlFor={props.name}> {props.name} </label>
        <button type="button" className="edit"> edit </button>
        </div>
}

function Bottom(){
    return <div className="bottom">
        New task:<br/>
        <input type = "text" id = "newTask" name="newTask"/>
        <button type="button"> Create Task </button> <br/>
        <button type="button"> Hide Completed Tasks </button>
        <button type="button"> Clear Completed Tasks </button>
    </div>
}

function App() {
  return (
    <div className="App">
      <h1>List of Things to Do</h1>
        <TaskList data={initialData}/>
        <Bottom/>
    </div>
  );
}

export default App;
