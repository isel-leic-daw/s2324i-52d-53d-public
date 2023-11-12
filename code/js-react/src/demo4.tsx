import React from 'react'
import { createRoot } from 'react-dom/client'

function Component1(props){
    return (
        <div>
           <h1>Hello World {props.name}</h1> 
           {props.children}
        </div>
    )
}

function Component2(){
    return (
        <div>
           <Component1 name="Filipe">
                <p>From Portugal</p>
           </Component1> 
        </div>
    )
}


export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<Component2/>)
}