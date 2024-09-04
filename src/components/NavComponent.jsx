import { Link, NavLink } from "react-router-dom";

const NavComponent = () => {
  return (
    <header className="sticky top-0 left-0 shadow-lg bg-white">
      <nav className="container mx-auto flex justify-between items-center p-4 sm:py-4 sm:px-6">
        <Link to={"/"}>SHOPPING</Link>
        <ul className="flex space-x-3 sm:space-x-6">
          <li>
            {" "}
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-red-800" : "text-red-300 hover:text-red-800"
              }
            >
              Home
            </NavLink>
          </li>
        <li> <NavLink
            to={"/cart"}
            className={({ isActive }) =>
              isActive ? "text-red-800" : "text-red-300 hover:text-red-800"
            }
          >
            Cart
              </NavLink>
              </li> 
        </ul>
      </nav>
    </header>
  );
};

export default NavComponent;
