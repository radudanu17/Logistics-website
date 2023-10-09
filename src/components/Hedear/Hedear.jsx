import React from "react";
import "./Hedear.css";
import Logo from "../../assets/Icon.png";
import Instagram from "../../assets/Instagram.png";
import Linkedin from "../../assets/Linkedin.png";
import Twitter from "../../assets/Twitter.png";

const Hedear = () => {
  return (
    <header className="hedear">
      <div className="contacts">
        <div className="text-wrapper-1">+0(850) 544 7514</div>
        <div className="text-wrapper-2">Do you need help?</div>
        <img className="icon-1" alt="Icon" src={Logo} />
      </div>

      <div className="logo-dark">
        <div className="logo-dark-2">Crosson</div>
      </div>

      <div class="social-media">
        <img class="linkedin" src={Linkedin} />
        <img class="instagram" src={Instagram} />
        <img class="twitter" src={Twitter} />
      </div>

      {/*
      <div className="language">
        <div className="overlap-group">
          <div className="text-wrapper-2">Language</div>
          <div className="text-wrapper-3">English</div>
        </div>
      </div>

  */}
    </header>
  );
};

export default Hedear;
