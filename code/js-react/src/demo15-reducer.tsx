import React, { useState, ChangeEvent, MouseEvent } from 'react'
import { createRoot } from 'react-dom/client'
import { useFetch } from './custom-hooks/useFetch-reducer'

function Show(){

    const [text, setText] = useState("https://httpbin.org/delay/1")
    const [fetchUri, setFetchUri] = useState(text)
    const fetchState = useFetch(fetchUri)

    
    function changeHandler(event : ChangeEvent<HTMLInputElement> ){
        setText(event.target.value)
    }

    function clickHandler(event : MouseEvent<HTMLButtonElement>){
        setFetchUri(text)
    }

    const error = fetchState.type == "error" ? fetchState.message : '' 
    const content = fetchState.type == "response" ? fetchState.body : ''
    const status = fetchState.type == "response" ? fetchState.response.status : '' 
    const state = fetchState.type
    return (
        <div>
            <p><input type="text" value={text} onChange={changeHandler} size={100} /></p>
            <p><button onClick={clickHandler}> Fetch </button></p>
            <p>State : {state} {error}</p> 
            <p>Status : {status}</p> 
            <textarea value={content} rows={25} cols={120} readOnly={true} />              
        </div>
    )
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<Show />)
}