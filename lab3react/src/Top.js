import App from "./App";
import {useState} from "react";
import './Top.css';


function Top(props) {
    const[taskListInput, setTaskListInput] = useState(props.currentList);
    const showSort = !(props.initial);

    console.log("showSort" + showSort.toString());

    const selectList = props.taskLists.map((l) => {
        return <option value={l.list_id}> {l.list_name}</option>
    });

    function onClickSelectList(listId){
        props.handleTaskListSelect(listId);
        setTaskListInput(listId);

    }

    return <div className="top">
        <span className="listSelection"
              aria-label="List Selection Menu">
        <label htmlFor="listSelect"> List:</label>
        <select name="listSelect"
                id="listSelect" value={props.currentList}
                aria-label = "List Selection Menu"
                onChange={(event) => onClickSelectList(event.target.value)}>
            <option value={"wow"}> Select list </option>
            {selectList}
        </select>
        </span>
        <br/>
        <div className={"showSort" + showSort.toString()}>
            <label htmlFor="sortWithSelect" aria-label = "Sort by Menu">Sort by:</label>
            <select name="sortWithSelect" aria-label = "Sort by Menu" id="sortWithSelect" value={props.sortVal}
                    onChange={(event)=>props.setSort(event.target.value)}>
                <option value="default">default</option>
                <option value="priorityAsc">Lowest to Highest priority</option>
                <option value="priorityDesc">Highest to lowest priority</option>
            </select>
        </div>

    </div>
}

export default Top;
