import React from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    Outlet
  } from "react-router-dom";


const router = createBrowserRouter(
    [
        {
            path : "/",
            element : < Home />,
            
            children: [
                {
                  path: "messages",
                  element: <Messages />,
                },
                {
                  path: "tasks",
                  element: <Tasks />,
                }
              ],
        },
    ]
)

function Home() {
    return (
      <div>
        <Link to="/messages">Messages</Link>
        <Link to="/tasks">Tasks</Link>
        <h1>Dashboard</h1>
        <Outlet />
      </div>
    );
  }

function Messages(){
    return (
        <div>
            <h1>Messages</h1>
            <p>Message 1</p>
            <p>Message 2</p>
        </div>
    )
}

function Tasks(){
  return (
      <div>
          <h1>Tasks</h1>
          <p>Tasks 1</p>
          <p>Tasks 2</p>
      </div>
  )
}


export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<RouterProvider router={router} />)
} 