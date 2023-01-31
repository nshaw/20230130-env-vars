import {useState} from "react";
import './App.css';

const API_HELLO_PATH = '/api/hello'

function App({config}) {
    const {systemParams} = config || {};
    const { api } = systemParams || {};
    const url = api && api["simple-node-api"].url

    const [payload, setPayload] = useState("")

    async function callTheApi() {
        try {
            const apiResponse = await fetch(url + API_HELLO_PATH);

            if (apiResponse.ok) {
                const apiJson = await apiResponse.json();
                setPayload(<>{apiJson.greeting}<br/>{apiJson.timestamp}</>);
            } else {
                setPayload('Server responded with an error');
            }
        } catch (error) {
            setPayload(error.message);
        }
    }

    return (
        <div className="App">
            <div>
                <button onClick={callTheApi}>Call the Node API</button>
            </div>
            <div>
                <span>{payload}</span>
            </div>
        </div>
    );
}

export default App;
