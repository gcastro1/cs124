import App from './App.js';
import {useState} from "react";
import {getQueriesForElement} from "@testing-library/react";

function InMemoryApp(props) {
    const [data,setData] = useState(props.initialData)

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

    function newData(id,check){

    }


    return <div>
        <App onItemDeleted={handleItemsDeleted} handleCheckChange={(id,check)=>setData([...data].map(task =>{
            if(id.includes(task.id)) {
                return {
                    ...task,
                    completed: check
                }
            }
            else return task;}))} data={data} />
    </div>
}

/*setData(setDataHelper(id,check))*/
export default InMemoryApp;