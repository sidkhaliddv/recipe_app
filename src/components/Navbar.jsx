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
            <button className="inline-grid items-center" onClick={()=>navigate('/recipes')}>My Recipes</button>
            <input type="text" name="" placeholder="Search Recipes..." className="ml-2 p-2 bg-gray-200 border border-cyan-400 rounded-lg focus:outline-none hover:shadow-xl hover:border-cyan-600 focus:shadow-xl focus:border-cyan-600" id="" />
          </div>
          <div className="flex mx-2">
            {currentUser && <div className="inline-grid">
              <button type="button" className="border-2 border text-1xl p-3 bg-gray-200 hover:bg-gray-400 hover:text-white" onClick={()=>navigate('/recipes/my')}>My Recipes</button>
            </div>}
            <div className="">
              <button type="button" className="border-2 border text-1xl p-3 bg-gray-200 hover:bg-gray-400 hover:text-white" onClick={handleClick}>{currentUser ? 'Logout' : 'Sign in'}</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
