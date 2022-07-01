import { useState,useEffect } from "react";
import {projectAuth} from '../firebase/config'
import { useAuthContext } from "./useAuthContext";
export const useSignup=()=>{
    const [isCancelled, setIsCancelled] = useState(false)
   const [error, setError] = useState(null)
   const [isPending , setIsPending ] = useState(false)
   const { dispatch }= useAuthContext()
   const signup=async(email,password,displayName)=>{
       setError(null)
       setIsPending(true)
       try{
        const res= await projectAuth.createUserWithEmailAndPassword(email,password)
        

        if(!res){
            throw new Error('Could not complete sign up')
        }


        // add display name 

        await res.user.updateProfile({displayName})

//dispatch login action in reducer

dispatch({type:'LOGIN',payload:res.user})

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

    return {signup,error,isPending}
    

}