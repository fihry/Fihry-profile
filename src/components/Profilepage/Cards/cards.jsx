import React from "react";
import "./cards.css";
import AboutMe from "../AboutMe-itme/About-me";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { BiBriefcase } from "react-icons/bi";
import Langcarde from "../langcard/langcarde";
// import { ClassNames } from "@emotion/react";
class cards extends React.Component {
  constructor() {
    super().state = {
      data: [
        {
          Name: "Html5",
          img: "https://img.icons8.com/color/48/000000/html-5--v1.png",
          herf: "https://www.w3schools.com/html/",
          value: "90%",
        },
        {
          Name: "Css3",
          img: "https://img.icons8.com/color/48/000000/css3.png",
          herf: "https://www.w3schools.com/css/",
          value: "92%",
        },
        {
          Name: "js",
          img: "https://img.icons8.com/color/48/000000/javascript.png",
          herf: "https://www.javascript.com/",
          value: "75%",
        },

        {
          Name: "React",
          img: "https://img.icons8.com/color/4048/000000/react-native.png",
          herf: "https://reactjs.org/",
          value: "80%",
        },
        {
          Name: "json",
          img: "https://img.icons8.com/color/48/000000/json--v1.png",
          herf: "",
          value: "96%",
        },
        {
          Name: "Nodejs",
          img: "https://img.icons8.com/color/48/000000/nodejs.png",
          herf: "https://nodejs.org/en/",
          value: "60%",
        },
        {
          Name: "Sass",
          img: "https://img.icons8.com/color/48/000000/sass.png",
          herf: "",
          value: "70%",
        },
        {
          Name: "Python",
          img: "https://img.icons8.com/color/48/000000/python.png",
          herf: "",
          value: "65%",
        },
      ],
    };
  }

  mapping(x) {
    const info = x.map((item) => (
      <Langcarde name={item.Name} herf={item.herf} img={item.img} value={item.value} />
    ));
    return info;
  }

  render() {
    return (
      <div className="cardsbox">
        <div className="card1">
          <div className="cardebuner">
            <img src="#" alt="" srcset="" />
          </div>
          <div className="imgprofile">
            <img src="#" alt="" srcset="profile" />
          </div>
          <div className="icons">
            <HiOutlineCheckBadge />
          </div>
          <div className="info">
            <span>
              <BiBriefcase />
              Entrepreneur
            </span>
            <h4> &rdquo; Web Developer "</h4>
          </div>
        </div>
        <div className="card2">
          <AboutMe />
          Hi, I'm Mohamed EL firhy , an entrepreneur, web developer, and
          designer with over 3 years of experience creating beautiful and
          functional websites. I specialize in HTML5, CSS3, JavaScript, JSON,
          React , and UX design. I'm dedicated to providing exceptional service
          to my clients, working collaboratively to create custom solutions that
          meet their unique needs. I'm also an experienced UX designer, using a
          data-driven approach to create optimized designs. Outside of work, I
          enjoy staying active through hiking and fitness classes. If you'd like
          to learn more about my services or discuss a project, please don't
          hesitate to contact me.
        </div>
        <div className="card3">
          <dev className="cardprogress">Language skills</dev>
          <dev className="gridCard">{this.mapping(this.state.data)}
         
          </dev>
        </div>
      </div>
    );
  }
}

export default cards;
