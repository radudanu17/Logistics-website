import React from "react";
import Icon from "../../../assets/ManagmentSoftware.svg";
import Icon1 from "../../../assets/StorageService.svg";
import Icon2 from "../../../assets/MachineAccess.svg";
import Icon3 from "../../../assets/CloudService.svg";

import classes from "./ExploreServices.module.css";

const ExploreServices = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>EXPLORE SERVICES</h1>
        <div className={classes.div}>
          <h2>
            We offer high quality machine manufacturing and
            <span className={classes.line}>&nbsp;software services</span>
          </h2>
        </div>
        <p>
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </p>
      </div>
      <div className={classes.content2}>
        <div className={classes.box}>
          <img src={Icon} alt="Icon" />
          <h4>Company Work Managment Software</h4>
          <p>
            Center we have developped many patents in filling and packaging
            technology.
          </p>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
        <div className={classes.box}>
          <img src={Icon1} alt="Icon" />
          <h4>Crosson Simple Storage Service (S3)</h4>
          <p>
            Marshmallow pastry jelly beans chocolate bar cake pastry powder
            gummi bears.
          </p>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
        <div className={classes.box}>
          <img src={Icon2} alt="Icon" />
          <h4>Machine Access Salary Contol Sowftare</h4>
          <p>
            Center we have developped many patents in filling and packaging
            technology.
          </p>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
        <div className={classes.box}>
          <img src={Icon3} alt="Icon" />
          <h4>Scalable Storage in th Cloud Service</h4>
          <p>
            Marshmallow pastry jelly beans chocolate bar cake pastry powder
            gummi bears.
          </p>
          <a href="#" className={classes.readMore}>
            Read more
            <span>&#10095;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreServices;
