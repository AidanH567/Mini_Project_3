import React from "react";
import Logo from "../img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt="" />
      <span>
        made with love and <b>React.js</b>
      </span>
    </footer>
  );
};

export default Footer;
