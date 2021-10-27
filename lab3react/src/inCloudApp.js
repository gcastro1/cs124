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
    const query = db.collection(collectionName);
    const [value, loading, error] = useCollection(query);
    const [showCompletedTask, setShowCompletedTask]=useState(true);
    const [idCount,setIdCount] = useState(0);

    let tasks = [];
    if (value) {
        {console.log("there's a value")}
        tasks = value.docs.map((doc) => {
            return {...doc.data()}});
    }

    console.log(tasks)



    /*

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
    }*/

    function handleTaskAdded(text){
        const newId = generateUniqueID();
        db.collection(collectionName).doc(newId).set({
            id: newId,
            task: text,
            completed: false
        })

    }







    const testId =  String(1);





    return <div>
        <App loading={loading} tasks={tasks} handleTaskAdded={handleTaskAdded}/>
    </div>
}


/*setData(setDataHelper(id,check))*/
export default InCloudApp;


/*onItemDeleted={handleItemsDeleted} onItemAdded={(text)=>handleItemAdded(text)}
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
             handleHideCompleted={()=>setShowCompletedTask(!showCompletedTask)}*/