import React from "react";
import { Link } from "react-router-dom";
import logo from "../mylogo.png";

function Navbar() {
  return (
    <div className="myNav">
      <div className="logo-div">
        <img src={logo} alt="cocktail db logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
