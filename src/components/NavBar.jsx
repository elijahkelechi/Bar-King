import { NavLink } from "react-router-dom";
import NavBarContainer from "../assets/StyledComponents/NavBar";
import ThemeToggle from "./ThemeToggle";

const NavBar = () => {
  return (
    <NavBarContainer>
      <nav>
        <div className="nav-center">
          {/* <img
            style={{ maxWidth: "20px" }}
            src="./barKing.png"
            className="logo"
          /> */}
          <span style={{ mouseHover: "pointer" }} className="logo">
            BarKing
          </span>
          <div className="nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
            <NavLink to="/newsletter" className="nav-link">
              Newsletter
            </NavLink>
          </div>
        </div>
      </nav>
    </NavBarContainer>
  );
};

export default NavBar;
