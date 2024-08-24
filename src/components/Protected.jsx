import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Protected = ({children}) => {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  return (
    <>
      { currentUser ? children : navigate('/login')}
    </>
  )
}

export default Protected;
