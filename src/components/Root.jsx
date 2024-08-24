import { Outlet } from "react-router-dom";
import { auth } from "../../firebase";
import { useAuth } from "../hooks/useAuth";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  )
}

export default Root;
