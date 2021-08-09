import { useContext } from "react";
import { NavLink, Redirect } from "react-router-dom";
import { LoginDetail } from "./Authentication";

function Navbar() {
  const logger = useContext(LoginDetail);
  return (
    <div className="navbar">
      <NavLink exact to="/AppDay24/" activeClassName="active">
        Home
      </NavLink>

      <NavLink exact to="/AppDay24/about" activeClassName="active">
        About
      </NavLink>

      <NavLink exact to="/AppDay24/dashboard" activeClassName="active">
        Dashboard
      </NavLink>

      <NavLink exact to="/AppDay24/profile" activeClassName="active">
        Profile
      </NavLink>
    </div>
  );
}

export default Navbar;
