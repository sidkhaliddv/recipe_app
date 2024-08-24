import { useNavigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"
import Login from "./Login"

const LoginContainer = () => {
  const { login } = useAuth()
  const navigate = useNavigate();
  const initialValues = {email: '', password: ''}
  const validate = (values) => {
    const errors = {}
    if(!values.email) {
      errors.email = 'Email is required'
    } else if (!/^[ ]*([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})[ ]*$/i.test(values.email)) {
      errors.email = 'Email is not valid'
    }

    if (!values.password) {
      errors.password = 'Password is required'
    } else if (values.password.length < 4) {
      errors.password = 'Password should be atleast 5 characters long!'
    }

    return errors;
  }
  const handleLogin = async (values) => {
    try{
      await login(values);
      navigate('/recipes')
    } catch{
    }
  }
  return (
    <>
      <Login initialValues={initialValues} validate={validate} handleLogin={handleLogin} />
    </>
  )
}

export default LoginContainer;
