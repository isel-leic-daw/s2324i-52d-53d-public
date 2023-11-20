import {
    useState,
    useEffect,
} from 'react'

export function useFetch({uri}:{uri:string}) : string | undefined{
    const [content, setContent] = useState<string>(undefined)

    useEffect(() =>{
        let canceled = false
         async function doFetch(){ 
            const response = await fetch(uri)
            if(canceled) return
            const body = await response.text()
            if(canceled) return
            setContent(body)
         }
         setContent(undefined)
         doFetch()
         return ()=>{
             console.log("CleanUp")
             canceled=true
         }
         
     }, [uri])
     return content

}
