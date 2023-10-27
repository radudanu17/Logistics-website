import React from "react";
import Icon from "../../../assets/ProductDesign.svg";
import Icon1 from "../../../assets/PlaningProduction.svg";
import Icon2 from "../../../assets/InstallationComisioning.svg";

import classes from "./corporate.module.css";

const Corporate = () => {
  return (
    <div className={classes.corporate}>
      <div className={classes.generalContent}>
        <div className={classes.howWeDo}>HOW WE DO</div>
        <div className={classes.overlapGroup}>
          <h1>A journey from design to product.</h1>
          <div className={classes.line}></div>
        </div>
        <p className={classes.generalText}>
          Starting from the planning of the product our customer wants; design,
          manufacturing, software, mounting, installation & comissioning are
          made by us.
        </p>
      </div>
      <div className={classes.generalContainer}>
        <div className={classes.contentDiv}>
          <img src={Icon} alt="Icon" />
          <div className={classes.describe}>
            <h1>Product Design</h1>
            <p>
              Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
              halvah ice cream.
            </p>
          </div>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
        <div className={classes.contentDiv}>
          <img src={Icon1} alt="Icon" />
          <div className={classes.describe}>
            <h1>Planing & Production</h1>
            <p>
              Center we have developped many patents in filling and packaging
              technology.
            </p>
          </div>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
        <div className={classes.contentDiv}>
          <img src={Icon2} alt="Icon" />
          <div className={classes.describe}>
            <h1>Installation & Comisioning</h1>
            <p>
              Marshmallow pastry jelly beans chocolate bar cake pastry powder
              gummi bears.
            </p>
          </div>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Corporate;
