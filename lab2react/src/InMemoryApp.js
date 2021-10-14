import App from './App.js';
import {useState} from "react";


function InMemoryApp(props) {
    const [data,setData] = useState(props.initialData)
    const [showCompletedTask, setShowCompletedTask]=useState(true);

    function idCount(){
        if(data.length==0){
            return 1;
        }
        else{
            return data[data.length-1].id + 1;
        }
    }

    function getCompleted(){
        let retArr = [];
        for (let i=0; i< data.length;i++){
            if(data[i].completed){
                retArr.push(data[i].id);
            }
        }
        return retArr;
    }

    function handleItemsDeleted(){
        const itemIDArr = getCompleted();
        setData(data.filter(item => !itemIDArr.includes(item.id)));
    }

    function handleItemAdded(text){
        if(text !== null && text !== ""){
            const newTask = {id:idCount() , name:text, completed:false};
            setData([...data, newTask]);
        }
    }

    return <div>
        <App onItemDeleted={handleItemsDeleted} onItemAdded={(text)=>handleItemAdded(text)}
             handleCheckChange={(id,check)=>setData([...data].map(task =>{
            if(id.includes(task.id)) {
                return {
                    ...task,
                    completed: check
                }
            }
            else return task;}))} data={data}
        handleConfEdit={(id,editText)=>setData([...data].map(task =>{
            if(id.includes(task.id)) {
                return {
                    ...task,
                    name: editText
                }
            }
            else return task;}))}
             showCompletedTask={showCompletedTask}
             handleHideCompleted={()=>setShowCompletedTask(!showCompletedTask)}/>
    </div>
}

/*setData(setDataHelper(id,check))*/
export default InMemoryApp;