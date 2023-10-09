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
    <div class="header-main">
      <div class="overlap">
        <div class="help">
          <div class="text-wrapper">+0(850) 544 7514</div>
          <div class="div">Do you need help?</div>
          <img class="icon" src={Logo} />
        </div>
        <div class="logo-dark">
          <div class="logo-dark-2">Crosson</div>
        </div>
        <div class="social-media">
          <img class="linkedin" src={Linkedin} />
          <img class="twitter" src={Twitter} />
          <img class="instagram" src={Instagram} />
        </div>
        <div class="language">
          <div class="overlap-group">
            <div class="text-wrapper-2">Language</div>
            <div class="text-wrapper-3">English</div>
          </div>
          <img class="img" src={Language} />
        </div>
      </div>
      <div class="border"></div>
      <div class="menu">
        <div class="overlap-2">
          <p class="products-solutions">
            Products&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Solutions&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Softwares&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Services&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            Corporate&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            News&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Contact
          </p>
          <img class="menu-icon" src={MenuIcon} />
        </div>
      </div>
    </div>
  );
};

export default Hedear;
