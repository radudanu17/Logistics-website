import React from "react";
import Right from "../../../assets/Icon-2.svg";
import Icon from "../../../assets/Icon.svg";
import Icon2 from "../../../assets/Icon2.svg";
import Icon3 from "../../../assets/Icon3.svg";
import classes from "./Solutions.module.css";

const Solutions = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <p className={classes.textWrapper}>WHO WE ARE</p>
        <div className={classes.div}>
          <h2>
            Crosson is an international group dedicated to the
            <span className={classes.line}>&nbsp;food industry.</span>
          </h2>
        </div>
        <div className={classes.div2}>
          <p className={classes.crossonHasTwenty}>
            Crosson has twenty years’ experience in food, quality, automation
            and software which has been established in the food sector for
            Research, Efficiency and Solution Production.
            <br />
            <br />
            It was not long to discover that supported to knowledge by
            scientific perspectives, would be the solution to the real needs of
            the sector.
          </p>
        </div>
        <div className={classes.div3}>
          <button className={classes.button}>
            About Us
            <img className={classes.iconButton} alt="Icon" src={Right} />
          </button>
          <a href="#" className={classes.text}>
            Quality Certificates
          </a>
        </div>
      </div>
      <div className={classes.content2}>
        <div className={classes.textRight}>
          <img src={Icon} alt="Icon" />
          <div className={classes.describe}>
            <h1>Exported to 24 Countries</h1>
            <p>168 companies in 24 countries use our machines</p>
          </div>
        </div>
        <div className={classes.textRight}>
          <img src={Icon2} alt="Icon" />
          <div className={classes.describe}>
            <h1>8 Billion Products Per Day</h1>
            <p>8 billion products are produced daily from our machines.</p>
          </div>
        </div>
        <div className={classes.textRight}>
          <img src={Icon3} alt="Icon" />
          <div className={classes.describe}>
            <h1>We touch 850 million people a day</h1>
            <p>
              850 million people use products made by their machines every day
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
