import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navigacioniMeni">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/ankete-korisnika">Ankete</Link>
        <Link to="/signup">sign up</Link>
        <Link to="/login">login </Link>
      </ul>
    </div>
  );
};

export default NavBar;
