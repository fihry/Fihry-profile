import React, { useState } from "react";
import "./media.css";
import {
  TbBrandGithub,
  TbBrandTwitter,
  TbBrandLinkedin,
  TbDownload,
  TbChevronsRight,
} from "react-icons/tb";

function Media() {
  const downloadFile = () => {
    window.open(
      "https://drive.google.com/file/d/1c63IbMKivKaYj_3bU_gWQgtGb5MY5kpt/view?usp=sharing"
    );
  };


  const [isShown, setIsShown] = useState(false);

  const toggleDiv = () => {
    setIsShown(!isShown);
  };

  return (
    <div
      className={`mediabox ${isShown ? "shown" : ""}`}
      style={{ right: isShown ? "-55px" : "" }}
      onClick={toggleDiv}
    >
      <a
        className="mediaicon"
        href="https://github.com/fihry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandGithub />
      </a>

      <a
        className="mediaicon"
        href="https://twitter.com/EFihry"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandTwitter />
      </a>

      <a
        className="mediaicon"
        href="https://ma.linkedin.com/in/mohamed-el-fihry-0769b2212"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TbBrandLinkedin />
      </a>
      <div className="Downloadicon" onClick={downloadFile}>
        <TbDownload />
        <span>Resume</span>
      </div>
      <icon className={`move ${isShown ? "rotated" : "0"}`} onClick={toggleDiv}>
        <TbChevronsRight />
      </icon>
    </div>
  );
}

export default Media;
