import React from 'react'
import { createRoot } from 'react-dom/client'

function Counter(){
    const [counter, setCounter] = React.useState(0)
    function add(){setCounter(counter + 1)}
    function sub(){setCounter(counter - 1)}
    return (
        <div>
            <p><button onClick={add}>+</button></p>
            <p>{counter}</p>
            <p><button onClick={sub}>-</button></p>
        </div>
    )
}

function TwoCounters(){
    return (
        <div>
            <Counter />
            <Counter />
        </div>
    )
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<TwoCounters />) 
}