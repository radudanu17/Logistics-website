import React from "react";
import classes from "./Teams.module.css";
import Icon from "../../assets/Icon-2.svg";
import Icon1 from "../../assets/OurTeam.svg";
import Instagram from "../../assets/Instagram.svg";
import Linkedin from "../../assets/Linkedin.svg";
import Twitter from "../../assets/Twitter.svg";

const Teams = () => {
  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>Our Team</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="">Corporate</a>
            <img src={Icon} alt="Icon" />
            <a href="">Our Team</a>
          </div>
          <div className={classes.div}>
            <h3>
              At the roots of Crosson, there is 20 years of experience in food
              industry that is filled with research, increasing efficiency and
              producing solution for
              <span className={classes.line}>
                &nbsp;food, quality, automation and software.
              </span>
            </h3>
          </div>
          <p>
            Donut candy shortbread toffee dragée apple pie brownie. Muffin
            chocolate halvah bonbon gummies cake apple pie. Croissant dessert
            candy canes chocolate bar topping jujubes cupcake toffee dragée.
            Fruitcake danish tart gummies tootsie roll dragée cheesecake
            jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
            Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
            brownie danish pudding jelly gummies.
          </p>
        </div>
        <div className={classes.content2}>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>CO-FOUNDER & CO-CEO</p>
            </div>
            <h3>Walter White</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>CO-FOUNDER & CO-CEO</p>
            </div>
            <h3>Jesse Pinkman</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>CHIEF OPERATING OFFICER</p>
            </div>
            <h3>Skyler White</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>CHIEF LEGAL OFFICER</p>
            </div>
            <h3>Saul Goodman</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>JUNIOR DEVELOPER</p>
            </div>
            <h3>Walter Jr</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>SECURITY</p>
            </div>
            <h3>Mike Ehrmantraut</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
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
              <p className={classes.paragraph}>CHIEF OF STAFF</p>
            </div>
            <h3>Tuco Salamanca</h3>
          </div>
          <div className={classes.box}>
            <div className={classes.imageContainer}>
              <img src={Icon1} alt="Icon" />
              <p className={classes.paragraph}>CHIEF FINANCIAL OFFICER</p>
            </div>
            <h3>Gustavo Fring</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
