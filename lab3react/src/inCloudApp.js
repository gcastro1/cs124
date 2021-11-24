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
const collectionName = "acowe-tasks-2"


function InCloudApp(props) {
    const query = db.collection(collectionName);
    const [value, loading, error] = useCollection(query);
    const [currentList, setCurrentList] = useState("wow");

    const [sortVal, setSortVal] = useState("default");
    const [sortPriority, setSortPriority] = useState("place_order");
    const [sortDirection, setSortDirection] = useState('asc');

    const query_2 = db.collection(collectionName).doc(currentList)
        .collection(currentList + "_tasks").orderBy(sortPriority,sortDirection);
    const [task_value, task_loading, t_error] = useCollection(query_2);


    const [showCompletedTask, setShowCompletedTask]=useState(true);
    const [toDelete, setToDelete]=useState(false);
    const [maxMessage, setMaxMessage] = useState("");
    const [orderNum, setOrderNum] = useState(0);

    /*database.collection(collectionName).doc(tasks.).collection('movies').get()*/

    let taskLists = [];
    let tasks = [];
    if (value) {
        taskLists = value.docs.map((doc) => {
            return {...doc.data()}});
    }

    console.log(taskLists)
    if(currentList !== "wow" && task_value){
        tasks = task_value.docs.map((doc)=>{
            return {...doc.data()}});
    }

    if(tasks.length !== 0){
        console.log(tasks[0].task_id);
    }




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

    function handleTaskListAdded(listNameText) {
        const newListId = generateUniqueID();
        db.collection(collectionName).doc(newListId).set({
            list_id: newListId,
            list_name: listNameText
        })
        setCurrentList(newListId);
    }

    function handleTaskListSelect(listId){
        console.log("input list id: " + listId);
        setCurrentList(listId);
    }



    function handleTaskAdded(text, priorityNum){
        if(tasks.length < 10){
            setMaxMessage("");
            const newTaskId = generateUniqueID();
            setOrderNum(orderNum + 1);
            db.collection(collectionName).doc(currentList)
                .collection(currentList + "_tasks")
                .doc(newTaskId).set({
                task_id: newTaskId,
                task_name: text,
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

    function deleteAllTasks(listID){
        db.collection(collectionName).doc(listID)
            .collection("" + listID + "_tasks")
            .get()
            .then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    db.collection(collectionName)
                        .doc(listID)
                        .collection("" + listID + "_tasks").
                    doc(doc.id).delete();
                });
            });
    }

    function handleTaskListDeleted(){
        if(taskLists.length > 0){
            let listToBeDeleted = currentList;
            if(listToBeDeleted === "wow"){
                console.log("A");
                console.log("Please select a list to be deleted");
            }
            else if(listToBeDeleted === taskLists[0].list_id){
                if(taskLists.length===1){
                    setCurrentList("wow");
                }
                else{
                    setCurrentList(taskLists[1].list_id);
                }
            }
            else{
                setCurrentList(taskLists[0].list_id);
            }
            deleteAllTasks(listToBeDeleted);
            db.collection(collectionName).doc(listToBeDeleted).delete();
        }
    }

    function handleTaskFieldChanged(taskId, field, value) {
        db.collection(collectionName).doc(currentList)
            .collection(currentList + "_tasks").doc(taskId).update(
            {[field]:value}
        );
    }


    function getCompleted(){
        let retArr = [];
        for (let i=0; i< tasks.length;i++){
            if(tasks[i].completed){
                retArr.push(tasks[i].task_id);
            }
        }
        return retArr;
    }



    function handleTasksDeleted(){
        const completedIDs =getCompleted();
        setToDelete(true);
        for(let i=0; i< completedIDs.length;i++){
            db.collection(collectionName)
                .doc(currentList)
                .collection(currentList + "_tasks")
                .doc(completedIDs[i]).delete();
        }
        setToDelete(false);
    }



    /* print all tasks (delete all things in a subcol)*/
    /*db.collection(collectionName).doc(currentList)
        .collection(currentList + "_tasks")
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                console.log(doc.data().task_id);});
        });*/


    return <div>
        <App loading={loading}
             taskLists={taskLists}
             taskLoading = {task_loading}
             tasks={tasks}
             currentList = {currentList}
             showCompletedTask={showCompletedTask}
             handleHideCompleted={()=>setShowCompletedTask(!showCompletedTask)}
             handleTaskListAdded ={handleTaskListAdded}
             handleTaskListSelect = {handleTaskListSelect}
             handleTaskAdded ={handleTaskAdded}
             handleTaskFieldChanged = {handleTaskFieldChanged}
             handleTaskListDeleted={handleTaskListDeleted}
             handleTasksDeleted={handleTasksDeleted}
             deleteAllTasks = {deleteAllTasks}
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