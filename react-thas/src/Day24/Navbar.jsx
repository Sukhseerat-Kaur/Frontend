import { useContext } from "react";
import { NavLink } from "react-router-dom";
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

      <NavLink
        to={`/AppDay24/${logger.isLoggedIn ? "dashboard" : ""}`}
        activeClassName="active"
      >
        Dashboard
      </NavLink>

      <NavLink
        to={`/AppDay24/${logger.isLoggedIn ? "profile" : ""}`}
        activeClassName="active"
      >
        Profile
      </NavLink>
    </div>
  );
}

export default Navbar;
