import React from 'react'
import { createRoot } from 'react-dom/client'

let counter = 0

function counterRender(){
    return <div>
        <p>Hello World</p>
        <p>{++counter}</p>
    </div>
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    setInterval( ()=>root.render(counterRender()), 1000)
} 