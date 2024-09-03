import {Outlet } from "react-router-dom";
import NavComponent from "../components/NavComponent";

const NavBar = () => {
   return (
      <>
   <NavComponent/>
      <Outlet />
      </>
    );
}
 
export default NavBar;