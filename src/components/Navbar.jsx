import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const Navbar = () => {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()
  const handleClick = async ()=>{
    if(currentUser) {
      await logout()
    } else {
      navigate('/login')
    }
  }
  return (
    <>
      <nav className="bg-gray-200 p-4">
        <div className="flex justify-between">
          <div className="flex">
            <h1 className="inline-grid items-center">My Recipes</h1>
            <input type="text" name="" placeholder="Search Recipes..." className="ml-2 p-2 bg-gray-200 border border-blue-600 focus:outline-none" id="" />
          </div>
          <div className="inline-grid items-center">
            <button type="button" className="border-2" onClick={handleClick}>{currentUser ? 'Logout' : 'Sign in'}</button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
