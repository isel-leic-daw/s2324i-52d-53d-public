import React from 'react'
import { createRoot } from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Link,
    useRouteError,
    Outlet
  } from "react-router-dom";


const router = createBrowserRouter(
    [
        {
            path : "/",
            element : < Home />,
            errorElement : <ErrorComp name="/"/>,
            children: [
                {
                  path: "path1",
                  element: <Component1 throwError={true} />,
                  errorElement : <ErrorComp name="path1"/>
                }
            ]
        }                      
    ]
)

function Home(){

    return (
        <div>
            <h1>Home</h1>
            <p><Link to="/path1">Path1</Link> </p>
            <Outlet />
        </div>
    )
}

function Component1({throwError}:{throwError:boolean}){
    if(throwError) throw new Error("Component1 Error") 
    return (
        <div>
            <h1>Component1</h1>
            <p><Link to="/">Home</Link> </p>
            <p><Link to="/path2">Path2</Link> </p>
        </div>
        
    )
}


function ErrorComp({name} : {name : string}) {
  const error = useRouteError() as {statusText: string, message: string}
  console.log("Render Error")
  return (
    <div>
      <h1>Oops! {name}</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}




export function demo(){
    const root = createRoot(document.getElementById("container"))
    root.render(<RouterProvider router={router} />)
} 


