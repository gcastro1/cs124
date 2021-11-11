import App from './App.js';
import {useState} from "react";
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import firebase from "firebase/compat";
import {useCollection} from "react-firebase-hooks/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCd9qqxvMpEKpBzwfWcc2tlRFa6ICaLH_s",
    authDomain: "hmc-cs124-fa21-labs.firebaseapp.com",
    projectId: "hmc-cs124-fa21-labs",
    storageBucket: "hmc-cs124-fa21-labs.appspot.com",
    messagingSenderId: "949410042946",
    appId: "1:949410042946:web:0113b139a7e3cd1cc709db"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const collectionName = "acowe-tasks"


function InCloudApp(props) {
    const [sortVal, setSortVal] = useState("default");
    const [sortPriority, setSortPriority] = useState("place_order");
    const [sortDirection, setSortDirection] = useState('asc');
    const [orderNum, setOrderNum] = useState(0);
    const query = db.collection(collectionName).orderBy(sortPriority,sortDirection)
    const [value, loading, error] = useCollection(query);
    const [showCompletedTask, setShowCompletedTask]=useState(true);
    const [toDelete, setToDelete]=useState(false);
    const [maxMessage, setMaxMessage] = useState("");

    /*database.collection(collectionName).doc(tasks.).collection('movies').get()*/

    function setSort(sortPref) {
        setSortVal(sortPref);
        if (sortPref === "priorityAsc"){
            setSortPriority("priority");
            setSortDirection("asc");
        }
        else if (sortPref === "priorityDesc"){
            setSortPriority("priority");
            setSortDirection("desc");
        }
        else{
            setSortPriority("place_order");
            setSortDirection("desc");
        }

    }

    let tasks = [];
    if (value) {
        tasks = value.docs.map((doc) => {
            return {...doc.data()}});
    }

    console.log(tasks)

    /*function handleTaskListAdded(nameText){
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            name: nameText
        })
    }*/

    function handleTaskFieldChanged(taskId, field, value) {
        db.collection(collectionName).doc(taskId).update(
            {[field]:value}
        );
    }


    function handleTaskAdded(text, priorityNum){
        if(tasks.length < 10){
            setMaxMessage("");
            const newId = generateUniqueID();
            setOrderNum(orderNum + 1);
            db.collection(collectionName).doc(newId).set({
                id: newId,
                task: text,
                completed: false,
                priority: priorityNum,
                place_order: orderNum,
            })

        }
        else if (tasks.length = 10){
            setMaxMessage("Max number of tasks reached! (You should" +
                " take care of some of the stuff on the list first! :) )");
        }
    }

    function getCompleted(){
        let retArr = [];
        for (let i=0; i< tasks.length;i++){
            if(tasks[i].completed){
                retArr.push(tasks[i].id);
            }
        }
        return retArr;
    }

    function handleTasksDeleted(){
        const completedIDs =getCompleted();
        setToDelete(true);
        for(let i=0; i< completedIDs.length;i++){
            db.collection(collectionName).doc(completedIDs[i]).delete();
        }
        setToDelete(false);
    }


    return <div>
        <App loading={loading} tasks={tasks}
             showCompletedTask={showCompletedTask}
             handleHideCompleted={()=>setShowCompletedTask(!showCompletedTask)}
             handleTaskAdded={handleTaskAdded}
             handleTaskFieldChanged={handleTaskFieldChanged}
        handleTasksDeleted={handleTasksDeleted}
             setSort={setSort}
             sortVal={sortVal}
             toDelete={toDelete}
             maxMessage={maxMessage}/>
    </div>
}


/*setData(setDataHelper(id,check))*/
export default InCloudApp;


/*onItemDeleted={handleItemsDeleted} onItemAdded={(text)=>handleItemAdded(text)}

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
             handleHideCompleted={()=>setShowCompletedTask(!showCompletedTask)}*/