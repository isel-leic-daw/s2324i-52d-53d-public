import React, { ChangeEvent, useState, MouseEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { useFetch } from './custom-hooks/useFetch'

function Show(){

    const [text, setText] = useState("https://httpbin.org/delay/1")
    const [fetchUri, setFetchUri] = useState(text)
    const content = useFetch({uri:fetchUri})
     
    function changeHandler(event : ChangeEvent<HTMLInputElement>){
        setText(event.target.value)
    }
    function clickHandler(event : MouseEvent<HTMLButtonElement>){
        setFetchUri(text)
    }
    return (
        <div>
            <p><input onChange={changeHandler} type="text" value={text}></input></p>
            <p><button onClick={clickHandler}> Fetch </button></p>
            <textarea value={content || "Loading!!!"} readOnly />
        </div>
    )
} 

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<Show />)    
}