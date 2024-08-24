import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth"
import Register from "./Register"

const RegisterContainer = () => {
  const { register } = useAuth();
  const initialValues = { email: '', password: '' }
  const navigate = useNavigate()
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
  const handleRegister = async (user) => {
    try{
      await register(user);
      navigate('/recipes')
    } catch{
      console.log('in catch')
    }
  }

  return (
    <>
      <Register initialValues={initialValues} validate={validate} handleRegister={handleRegister} />
    </>
  )
}

export default RegisterContainer;
