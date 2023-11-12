import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'

function InputForm(){
    console.log("Input Form")
    const [text, setText] = useState("txt")

    function onChangeHandler(event){
        console.log("onChangeHandler")
        setText(event.target.value)
    }

    function onClickHandler(){
        console.log("onClickHandler")
        console.log(text)
    }

    return (
        <div>
            <input onChange={onChangeHandler} type="text" value={text} />
            <button onClick={onClickHandler}>Click</button>
        </div>
    )
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<InputForm />)
}