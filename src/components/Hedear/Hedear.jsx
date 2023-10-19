import React from "react";
import "./Hedear.css";
import Logo from "../../assets/Icon.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Twitter from "../../assets/Twitter.png";
import Language from "../../assets/Language.png";
import MenuIcon from "../../assets/MenuIcon.png";

const Hedear = () => {
  return (
    <div className="header-main">
      <div className="overlap">
        <div className="help">
          <div className="text-wrapper">+0(850) 544 7514</div>
          <div className="div">Do you need help?</div>
          <img className="icon" src={Logo} />
        </div>
        <div className="logo-dark">
          <div className="logo-dark-2">Crosson</div>
        </div>
        <div className="social-media">
          <a href="#">
            <img className="linkedin" src={Linkedin} />
          </a>
          <a href="#">
            <img className="twitter" src={Twitter} />
          </a>
          <a href="#">
            <img className="instagram" src={Instagram} />
          </a>
        </div>
        <div className="language">
          <div className="overlap-group">
            <div className="text-wrapper-2">Language</div>
            <div className="text-wrapper-language">English</div>
          </div>
          <img className="img" src={Language} />
        </div>
      </div>
      <div className="border"></div>
      <div class="menu">
        <div class="overlap-2">
          <ul class="menu-items">
            <li class="dropdown">
              <a href="#" class="dropbtn">
                Products
              </a>
              <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
              <img className="menu-icon" src={MenuIcon} />
            </li>
            <li>
              <a href="#">Solutions</a>
            </li>
            <li>
              <a href="#">Softwares</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Corporate</a>
            </li>
            <li>
              <a href="#">News</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hedear;
