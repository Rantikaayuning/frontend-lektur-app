import React from "react";
import { NavLink } from "react-router-dom";

export default function NavTemp() {
  return (
    <div>
      <NavLink to="/" exact={true}>
        Home
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
}
