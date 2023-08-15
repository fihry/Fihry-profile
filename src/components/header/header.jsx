import React from "react";
import { TbChevronLeft } from 'react-icons/tb';
import './header.css';

const Header = () => { 
 return (
      <div className="header">
          <button><TbChevronLeft /> </button>
          
          <h1>MOHAMED EL-FIHRY</h1>    
    </div>
  );
}
export default Header;