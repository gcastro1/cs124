import App from './App.js';

function InMemoryApp(props) {
    return <App data={props.initialData}/>
}

export default InMemoryApp;