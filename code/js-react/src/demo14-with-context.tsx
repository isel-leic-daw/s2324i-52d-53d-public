import React, { useState, createContext, useContext } from 'react'
import { createRoot } from 'react-dom/client'

type ContextType = {
    loggedin : boolean,
    setLoggedin? : (f:(boolean)=>boolean) => void
}

const AuthContext = createContext<ContextType>({loggedin:false})

function Component1(){
    const [loggedin, setLoggedin] = useState(false)
    return (<div>
                <h1>Component1</h1>

                <button onClick = {()=>setLoggedin(l=>!l)}>Login</button>
                
                <AuthContext.Provider value={{loggedin,setLoggedin}}>
                    <Component2 />
                </AuthContext.Provider>
                
            </div>)
}

function Component2(){
    return (<div>
                <h1>Component2</h1>
                <Component3 />
            </div>)
}

function Component3(){
    return (<div>
                <h1>Component3 </h1>
                <Component4 />
                
            </div>)
}

function Component4(){
    const auth = useContext(AuthContext)
    return (<div>
                <h1>Component4 {auth.loggedin ? "LOGGEDIN" : "NOT LOGGED"} </h1>
                <button onClick = {()=>auth.setLoggedin(l=>!l)}>Login</button>
            </div>)
}

function App(){
    return <Component1 />
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<App />)
}