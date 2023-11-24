import React from 'react'
import { createRoot } from 'react-dom/client'
import { useState } from 'react'

import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useNavigate,
    Navigate,
    redirect
  } from 'react-router-dom'

//-----Demo is not finished

const router = createBrowserRouter(
    [
        {
            path : "/",
            element : < Home />
        },
        {
            path : "/me",
            element : < UserHome />
        },
        {
            path : "/login",
            element : < Login />
        },
    ]
)

function Login(): React.ReactElement {

    const [inputs, setInputs] = useState({ username: "", password: "" })
    const [submiting, setSubmiting] = useState(false)
    const [error, setError] = useState('')
    const [redirect, setRedirect] = useState(false)
    //const navigate = useNavigate()

    if(redirect)  return <Navigate to="/me" replace={true}/>
   
    function authenticate(username :string, password :string){
        console.log("Authenticate")
        return new Promise((resolve)=>
            setTimeout(()=>resolve(true),5000)
        )
    }

    function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        setSubmiting(true)
        const username = inputs.username
        const password = inputs.password
        authenticate(username, password)
            .then(res => {
                setSubmiting(false)
                if (res) {
                    setRedirect(true)
                    //navigate('/me')
                } else {
                    setError("Invalid username or password")
                }
            })
            .catch(error => {
                setSubmiting(false)
                setError(error.message)
            })
    }


    function handleChange(ev: React.FormEvent<HTMLInputElement>) {
        const name = ev.currentTarget.name
        setInputs({ ...inputs, [name]: ev.currentTarget.value })
    }

    return (
        <div>
            <Link to="/"> Home </Link>
            <form onSubmit={handleSubmit}>
                <fieldset disabled={submiting}>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input id="username" type="text" name="username" value={inputs.username} onChange={handleChange} />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input id="password" type="password" name="password" value={inputs.password} onChange={handleChange} />
                    </div>
                    <div>
                        <button type="submit">Login</button>
                    </div>
                </fieldset>
            </form>
            {error}
        </div>
    )
}

function Home(){

    return (
        <div>
            <h1>"Home"</h1>
            <p><Link to="/login">Login</Link> </p>
        </div>
        
    )
}

function UserHome(){
    return (
        <div>
            <h1>"User Home"</h1>
            <p><Link to="/">Home</Link> </p>
        </div>
        
    )
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<RouterProvider router={router} />)
   
}