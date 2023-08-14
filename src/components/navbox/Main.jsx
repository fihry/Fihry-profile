import React from 'react'
import './Main.css'
import { NavLink } from "react-router-dom";
function Navebuttom() {
  return (
    <ul className="main">
      <NavLink className="Profile" ActiveClassName='active'  to="Profile">
        Profile
      </NavLink>
      <NavLink className="Profile" to="Skills">
        Skills
      </NavLink>
      <NavLink className="Profile"  to="Projects">
        Projects
      </NavLink>
    </ul>
  );
}

export default Navebuttom