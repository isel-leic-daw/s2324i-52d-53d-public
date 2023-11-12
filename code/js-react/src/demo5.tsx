import React from 'react'
import { createRoot } from 'react-dom/client'

function Component1(props){
    console.log("Component1")
    return (
        <div>
           <h1>Hello World {props.name}</h1> 
           {props.children}
        </div>
    )
}

function Component2(props){
    console.log("Component2")
    return (
        <div>
           <Component1 name="Filipe">
                <p>From Portugal</p>
                <p>Counter = {props.counter}</p>
           </Component1> 
        </div>
    )
}


export function demo(){
    const root = createRoot(document.getElementById("container"))
    let n = 0
    setInterval(()=> root.render(<Component2 counter={++n}/>), 1000)
}