import {
    useReducer,
    useEffect,
} from 'react'

type State = 
    {
        type : "started",
    }
    |
    {
        type : "fetching",
    }
    |
    {
        type : "error",
        message : string
    }
    |
    {
        type : "response",
        response : Response,
        body : string
    }

type Action = 
    
    {
        type : "startFetch",
    }
    |
    {
        type : "setError",
        message : string
    }
    |
    {
        type : "setResponse",
        response : Response,
        body : string
    }


function reducer(state:State, action:Action): State{
    switch(action.type){
        case 'startFetch' : return {type : 'fetching'}
        case 'setError' : return {type : 'error' , message : action.message}
        case 'setResponse' : return {type : 'response' , response : action.response, body : action.body}   
    }

}

export function useFetch(uri: string) : State{
    
    const [state, dispatcher] = useReducer(reducer, {type : "started"})

    useEffect(() =>{
        let cancelled = false

        async function doFetch(){
            try{
                dispatcher({type : 'startFetch'})
                const response = await fetch(uri)
                if(cancelled) return
                const body = await response.text()
                if (!cancelled){
                    dispatcher({type : 'setResponse', response, body})
                }
            }catch(error){
                console.log(error.message)
                if(cancelled) return
                dispatcher({type:'setError', message:error.message})
            }
        }
        
        doFetch()
        return ()=>{
            cancelled=true
        }
        
    }, [uri])
    return state

}
