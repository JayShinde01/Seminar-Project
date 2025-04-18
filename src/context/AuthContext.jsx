import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import React,{createContext, useEffect, useState} from 'react'
import { auth, db } from '../services/firebase'

export  const authContext = createContext()
export function AuthProvider({children}) {
    const[user,setUser] = useState(null)
    const[loading,setLoading] = useState(true)
    console.log("auth called");

 //function take email and password and login if valid user
    async function logIn(email,password) {
        try {
            await signInWithEmailAndPassword(auth,email,password)
            
        } catch (error) {
            alert(error.message)
        }
        
    }

//function which create new user if not exixts take paramas email and password
    async function signUp(email,password) {
      let docId =   await createUserWithEmailAndPassword(auth,email,password)
      return docId
    }

// function which sign out current user
    async function logOut() {
        signOut(auth)
    }
useEffect(()=>{
    console.log("useeffect called");
    onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
        setLoading(false)
    },[])
    
})
  return (

    <authContext.Provider value={{user,logIn,logOut,signUp,loading}}>
        {children}
    </authContext.Provider>
  )
}
