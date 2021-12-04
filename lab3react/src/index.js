import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import InCloudApp from "./inCloudApp";
const initialData = [{id: 52, name:"call mom", completed:false},{id: 53, name:"eat Book", completed:false},
                     {id: 54, name:"order lunch", completed:false}];

ReactDOM.render(
  <React.StrictMode>
    <InCloudApp initialData={initialData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
