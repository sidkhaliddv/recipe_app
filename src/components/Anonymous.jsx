import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import { useEffect, useState } from "react"

const Anonymous = ({children}) => {
  const { isUserLoading, currentUser, logout } = useAuth()
  const navigate = useNavigate()
  useEffect(()=>{
    if (!isUserLoading && currentUser) {
      navigate('/', { replace: true })
    }
  }, [isUserLoading, currentUser])

  return (
    <>
      { (!isUserLoading && !currentUser) ? children : null }
    </>
  )
}

export default Anonymous;
