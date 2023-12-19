import React from "react";
import { TbChevronLeft } from 'react-icons/tb';
import './header.css';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <Link to={-1}><button><TbChevronLeft /></button></Link>
      <h1>MOHAMED EL-FIHRY</h1>
    </div>
  );
}
export default Header;