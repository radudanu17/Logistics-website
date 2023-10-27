import React from "react";
import Icon from "../../../assets/Camera.svg";
import Icon1 from "../../../assets/Machines.svg";
import Icon2 from "../../../assets/Solution.svg";
import Icon3 from "../../../assets/Soft.svg";
import Icon4 from "../../../assets/Headphones.svg";
import Icon5 from "../../../assets/Light.svg";

import classes from "./softwares.module.css";

const Softwares = () => {
  return (
    <div className={classes.softwares}>
      <div className={classes.generaly}>
        <div className={classes.container}>
          <p className={classes.whatWeDo}>WHAT WE DO</p>
          <div className={classes.div}>
            <p className={classes.textWrapper}>
              With our flexible production capacity and high technology, we
              produce customized solutions for your needs.
            </p>
            <div className={classes.line} />
          </div>
        </div>
        <div className={classes.productWrapper}>
          <img src={Icon} alt="Icon" />
          <div className={classes.productInfo}>
            <h1>Watch Our Machines</h1>
            <p>2.34Min, 14.7MB</p>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <div className={classes.machinery}>
          <img src={Icon1} alt="Icon" />
          <p>Filling and Packaging Machines</p>
        </div>
        <div className={classes.machinery}>
          <img src={Icon2} alt="Icon" />
          <p>End of Line Solutions</p>
        </div>
        <div className={classes.machinery}>
          <img src={Icon3} alt="Icon" />
          <p>Food Industry Machines Software</p>
        </div>
        <div className={classes.machinery}>
          <img src={Icon4} alt="Icon" />
          <p>7/24 Techincal Support</p>
        </div>
        <div className={classes.machinery}>
          <img src={Icon5} alt="Icon" />
          <p>Special Solutions Your Needs</p>
        </div>
      </div>
    </div>
  );
};

export default Softwares;
