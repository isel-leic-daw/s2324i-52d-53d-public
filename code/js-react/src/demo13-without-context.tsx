import React, {useState} from 'react'
import { createRoot } from 'react-dom/client'

function Component1(){
    const [loggedin, setLoggedin] = useState(false)
    return (<div>
                <h1>Component1</h1>

                <button onClick = {()=>setLoggedin(!loggedin)}>Login</button>
                <Component2 loggedin={loggedin}/>
                
            </div>)
}

function Component2({loggedin}:{loggedin:boolean}){
    return (<div>
                <h1>Component2</h1>
                <Component3 loggedin={loggedin}/>
            </div>)
}

function Component3({loggedin}:{loggedin:boolean}){
    return (<div>
                <h1>Component3 </h1>
                <Component4 loggedin={loggedin}/>
                
            </div>)
}

function Component4({loggedin}:{loggedin:boolean}){
   
    return (<div>
                <h1>Component4 {loggedin ? "LOGGEDIN" : "NOT LOGGED"} </h1>
            </div>)
}

function App(){
    return <Component1 />
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<App />)
}