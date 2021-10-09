import React, { useState } from 'react';

function DataManager(props){
    const [data, setData] = useState(props.inputData);
    return data;

}
/*function setData(field, value) {
    setTask({...task, [field]: value});
}*/

export default DataManager;