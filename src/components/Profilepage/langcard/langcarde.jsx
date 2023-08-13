import React from "react";
// import { motion } from 'framer-motion'
import "./langcard.css";  

class langcarde extends React.Component {
  render() {
    const item = {
      hidden: {
        y: -320,
        x: 20,
        rotateX:20,
        opacity: 0
      },
      visible: {
        y: 0,
        x: 0,
        rotate:0,
        opacity: 1,
      },
    };
    const langcard = {
      hidden: {
        x: 10,
        y: 40,
        z: 30,
        opacity: 1,
        scale: 0,
      },
      visible: {
        x: 0,
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.4,
          staggerChildren: 0.4
        },
      },
    };
    return (
      <div
        className="langcard"
        variants={langcard}
        initial="hidden"
        animate="visible"
      >
        <a
          className="item"
          href={this.props.herf}
          style={{ borderColor: this.props.herf ? "yellow" : "green" }}
          variants={item}
        >
          <img src={this.props.img} alt="" />
          {this.props.name}
          <span>{this.props.value}</span>
        
        </a>
      </div>
    );
  }
}

export default langcarde;
