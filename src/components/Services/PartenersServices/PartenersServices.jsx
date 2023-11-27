import React from "react";
import Amazon from "../../../assets/Amazon.svg";
import Airbnb from "../../../assets/Airbnb.svg";
import Asana from "../../../assets/Asana.svg";
import Framer from "../../../assets/Framer.svg";
import Lattice from "../../../assets/Lattice.svg";
import Trello from "../../../assets/Trello.svg";
import Monday from "../../../assets/Monday.svg";
import Afterpay from "../../../assets/Afterpay.svg";
import Invision from "../../../assets/Invision.svg";
import Slack from "../../../assets/Slack.svg";
import GitLab from "../../../assets/GitLab.svg";
import PayPal from "../../../assets/PayPal.svg";

import classes from "./PartenersServices.module.css";

const platforms = [
  Amazon,
  Airbnb,
  Asana,
  Framer,
  Lattice,
  Trello,
  Monday,
  Afterpay,
  Invision,
  Slack,
  GitLab,
  PayPal,
];

const PartenersServices = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>PARTNERS</h1>
        <div className={classes.div}>
          <h2>
            Crosson, Trusted by over
            <span className={classes.line}>&nbsp;1,000 businesses</span> of all
            sizes
          </h2>
        </div>
        <p>
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </p>
      </div>
      <div className={classes.content2}>
        <div className={classes.imageContainer}>
          {platforms.map((platform, index) => (
            <div key={index} className={classes.imageWrapper}>
              <div className={classes.imageBox}>
                <img src={platform} alt="Icon" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartenersServices;
