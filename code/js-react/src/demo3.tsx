import React from 'react'
import { createRoot } from 'react-dom/client'

type TaskModel = {
    id : number,
    text : string
}

const tasks = [
    {id : 1, text : "task1"},
   
]

let counterIds = 1

function listRender(tks: Array<TaskModel>){
    return (
        <div>
            <h1>Tasks</h1>
            {
                tks.map( t=>
                    (
                        <div key={t.id}>
                            <p>id {t.id}</p>
                            <p>text {t.text}</p>
                            <input type="text"></input>
                        </div>
                    )
                )
            }
        </div>
    )

}
export function demo(){
    const root = createRoot(document.getElementById("container"))
    setInterval( ()=>
        {
            ++counterIds
            tasks.unshift({ id : counterIds, text:`Tasks ${counterIds}` })
            root.render(listRender(tasks))
        },
        1000)
} 