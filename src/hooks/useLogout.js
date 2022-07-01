import { useState, useEffect } from "react";
import {projectAuth} from '../firebase/config'
import { useAuthContext } from "./useAuthContext";

export const useLogout=()=>{
    const [isCancelled, setIsCancelled] = useState(false)
    const [error, setError] = useState(null)
    const [isPending , setIsPending ] = useState(false)
    const { dispatch }= useAuthContext()

    const logout=async ()=>{
setError(null)
setIsPending(true)
try{
await projectAuth.signOut()

dispatch({type:'LOGOUT'})

if(!isCancelled){
setError(null)
setIsPending(false)
}
}
catch(error){
    if(!isCancelled){
    setError(error.message)
    setIsPending(false)
    }
}


    }
    useEffect(() => {
    
        return () => {
            console.log("clean up called")
            setIsCancelled("true")
        }
    }, [])
    return {logout,error,isPending}

}