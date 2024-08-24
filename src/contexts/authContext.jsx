import { createContext, useEffect, useState } from "react";
import { browserLocalPersistence, createUserWithEmailAndPassword, onAuthStateChanged, setPersistence, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";

const AuthContext = createContext()

const login = async (user) => {
  await setPersistence(auth, browserLocalPersistence).then(()=>{
    return signInWithEmailAndPassword(auth, user.email, user.password)
  }).catch((error)=> {throw error})
}

const register = async (user) => {
  await setPersistence(auth, browserLocalPersistence)
  await createUserWithEmailAndPassword(auth, user.email, user.password)
    .then((resp)=>{
      return true;
    })
    .catch((error)=>{
      throw error
    })
}

const logout = async () => {
  try{
    await signOut(auth)
  } catch(error) {
    throw error
  }
}

const AuthProvider = ({children}) => {
  const [isUserLoading, setIsUserLoading] = useState(true)
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(()=>{
    async function checkUser(){
      onAuthStateChanged(auth, (user)=>{
        if(user) {
          setCurrentUser(user)
        } else {
          setCurrentUser(null)
        }
        setIsUserLoading(false)
      })
    }
    checkUser()
  }, [])

  return (
    <AuthContext.Provider value={{currentUser, isUserLoading, login, logout, register}}>
      {children ? children : null}
    </AuthContext.Provider>
  )
}

export {
  AuthContext,
  AuthProvider
}
