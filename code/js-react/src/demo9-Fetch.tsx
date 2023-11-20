import React, { useEffect } from 'react'
import { createRoot } from 'react-dom/client'

function Fetch({uri}:{uri:string}){
    const [text, setText] = React.useState('Loading....')
    const [status, setStatus] = React.useState('?')

    useEffect(()=>{
        let canceled = false
        async function doFetch() {
            const response = await fetch(uri)
            if(canceled) return
            setStatus(response.status.toString())
            const body = await response.text()
            if(canceled) return  
            setText(body)
        }
        doFetch()
        return () => {
            canceled=true  
            console.log("CleanUp")
        }
    },[uri])

    return (
        <div>
            <p>Status:{status}</p>
            <textarea value={text} rows={25} cols={120} readOnly />
        </div>
    )
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<Fetch uri='https:\\httpbin.org\delay/5' />) 
    setTimeout(()=>root.render(<Fetch uri='https:\\httpbin.org\delay/1' />),2000)   
}