import React from 'react'
import { createRoot } from 'react-dom/client'

export const virtualtree1 = 
    React.createElement("div", { className : "someClass"},
        React.createElement("p", {}, "Must Study"),
        React.createElement("p", {}, "DAW"))

export const virtualtree2 =
    <div>
        <p>Must study</p>
        <p>DAW</p>
    </div>


export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(virtualtree1)
} 