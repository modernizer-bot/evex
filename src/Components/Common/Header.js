import React from "react";
import { NavLink } from "react-router-dom";

const TopMenu = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <nav>
      <NavLink to="/">Home</NavLink>
      {" | "}
      <NavLink to="/signup">Sign Up</NavLink>
      {" | "}
      <NavLink to="/about">About Us</NavLink>
    </nav>
  );
};

export default TopMenu;
