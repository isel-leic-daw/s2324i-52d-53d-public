import React from 'react'
import { createRoot } from 'react-dom/client'


function Counter(props){
    return (
        <div>
            <p><button onClick={props.add}>+</button></p>
            <p>{props.count}</p>
            <p><button onClick={props.sub}>-</button></p>
        </div>
    )
}

function Counters(){
    const [counter, setCounter] = React.useState(0)
    function add(){setCounter(c => c + 1)}
    function sub(){setCounter(c => c - 1)}

    return (<div>
        <Counter count={counter} add={add} sub={sub} />
        <Counter count={counter} add={add} sub={sub} />
    </div>)

}


export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<Counters />)
}