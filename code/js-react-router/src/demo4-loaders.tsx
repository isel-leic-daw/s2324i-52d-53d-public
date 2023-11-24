import React from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useLoaderData
  } from "react-router-dom";

type Student = {
    id:number,
    name:string
}

const router = createBrowserRouter(
    [
        {
            path : "/",
            element : < Home />
        },
        {
            path : "/students/:id",
            element : < StudentsDetails />,
            loader : studentLoader
        },
    ]
)

function Home(){

    return (
        <div>
            <h1>"Home"</h1>
            <p><Link to="/students/10">Student 10</Link> </p>
        </div>
    )
}

function StudentsDetails(){
    const student = useLoaderData() as Student
    return (
        <div>
            <h1>"Students details"</h1>
            <p> ID = {student.id} </p>
            <p> Name = {student.name} </p>
            <p><Link to="/">Home</Link> </p>
        </div>
    )
}

async function studentLoader(args:any): Promise<Student> {

    const studentId = args.params.id
    console.log(args)
    const prm = new Promise<Student>((resolve, reject) => {
        setTimeout(() => resolve({id : studentId, name : "Filipe"}), 2000)
    })

    return await prm
}

export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<RouterProvider router={router} />)
} 
