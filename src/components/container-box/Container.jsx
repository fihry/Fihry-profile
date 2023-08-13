import React from 'react'
import Media from '../mediaItems/media'
import NaveButtom from '../navbox/Main'
import Profile from "../Profilepage/profile"
import { Route, Routes } from "react-router-dom";
import Skills from '../Skills-page/Skills';
import Projects from '../Projects-page/projects.jsx';
import './Container.css';

function Container() {
  return (
    <div className="Container">
      <Media />
      <div className="Nave-Box">
        <NaveButtom />
      </div>
      <Routes>
        <Route path="/" Component={Profile}></Route>
        <Route path="/Profile" Component={Profile}></Route>
        <Route path="/Skills" Component={Skills}></Route>
        <Route path="/projects" Component={Projects}></Route>
      </Routes>
    </div>
  );
}
export default Container
