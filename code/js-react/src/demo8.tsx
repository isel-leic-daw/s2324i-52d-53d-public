import React, { useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'

function Timer(){
   
    const [counter, setCounter] = useState(0)
    const [period, setPeriod] = useState(1000)

    useEffect(()=>{
        console.log("Effect")
        const tid = setInterval(()=>{
            setCounter(c => c + 1)
        }, period)
        return ()=> clearInterval(tid)
    },[period])

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={()=>setPeriod(period + 500)}>+</button>
            <p>{period}</p>
            <button onClick={()=>setPeriod(period - 500)}>-</button>
        </div>
    )
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<Timer />)
    //setTimeout(()=> root.render(<p>New Element</p>), 2000 )
}