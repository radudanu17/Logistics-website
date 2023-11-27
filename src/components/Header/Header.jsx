import React from "react";
import Logo from "../../assets/IconPhone.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";
import Language from "../../assets/Language.svg";
import MenuIcon from "../../assets/MenuIcon.svg";
import { Link } from "react-router-dom";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.headerMain}>
      <div className={classes.overlap}>
        <div className={classes.contactHedear}>
          <img src={Logo} alt="Icon" />
          <div className={classes.helpData}>
            <p>Do you need help?</p>
            <a href="tel:08505447514">+0(850) 544 7514</a>
          </div>
        </div>
        <h1 className={classes.crosson}>Crosson</h1>
        <div className={classes.socialMedia}>
          <a href="#">
            <img className={classes.linkedin} src={Linkedin} />
          </a>
          <a href="#">
            <img className={classes.instagram} src={Instagram} />
          </a>
          <a href="#">
            <img className={classes.twitter} src={Twitter} />
          </a>
        </div>
        <div className={classes.language}>
          <img src={Language} alt="Icon" />
          <div className={classes.overlapGroup}>
            <p>Language</p>
            <p>English</p>
          </div>
        </div>
      </div>
      <div className={classes.border} />
      <div className={classes.menu}>
        <ul className={classes.menuItems}>
          <li className={classes.dropdown}>
            <Link to="#" className="dropbtn">
              Products
              <img className={classes.menuIcon} src={MenuIcon} alt="Icon" />
            </Link>
            <div className={classes.dropdownContent}>
              <Link to="/products">Products</Link>
              <Link to="/products-detail">Products Detail</Link>
            </div>
          </li>
          <li>
            <Link to="/team-our">Solutions</Link>
          </li>
          <li>
            <Link to="/news-detail">Softwares</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
          <li>
            <Link to="/about">Corporate</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contactUs">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
