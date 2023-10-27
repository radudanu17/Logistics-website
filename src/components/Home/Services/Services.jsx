import React from "react";
import Icon from "../../../assets/LinearMachines.svg";
import Icon1 from "../../../assets/RotaryMachines.svg";
import Icon2 from "../../../assets/BottleMachines.svg";
import Icon3 from "../../../assets/Ellipse.svg";
import Icon4 from "../../../assets/Calendly.svg";
import Icon5 from "../../../assets/IconPhone.svg";
import Icon6 from "../../../assets/Email.svg";

import classes from "./services.module.css";

const Services = () => {
  return (
    <div className={classes.services}>
      <div className={classes.generalContent}>
        <div className={classes.machineTitle}>
          <h1 className={classes.generalTitle}>
            Filling and Packaging Machines
          </h1>
          <p className={classes.generalText}>
            Liquorice lemon drops powder chocolate liquorice candy dessert gummi
            bears. Caramels marzipan donut jujubes sweet roll. Powder croissant
            toffee shortbread chocolate sweet pie.
            <a href="#" className={classes.readMore}>
              Read more
              <span>&#10095;</span>
            </a>
          </p>
        </div>
        <div className={classes.generalContainer}>
          <div className={classes.contentDiv}>
            <img src={Icon} alt="Icon" />
            <p>Linear Machines</p>
          </div>
          <div className={classes.contentDiv}>
            <img src={Icon1} alt="Icon" />
            <p>Rotary Machines</p>
          </div>
          <div className={classes.contentDiv}>
            <img src={Icon2} alt="Icon" />
            <p>Bottle Filling Machines</p>
          </div>
        </div>
      </div>
      <div className={classes.generalContainer1}>
        <div className={classes.boxContent}>
          <div className={classes.boxContainer}>
            <div className={classes.label}>
              <h1>Let's Plan an Online Meeting</h1>
              <p>
                We are Available Now <img src={Icon3} alt="Icon" />
              </p>
            </div>
            <img src={Icon4} alt="Icon" className={classes.calendly} />
          </div>
          <div className={classes.boxContainer1}>
            <div className={classes.label1}>
              Are you interested? Contact our sales department now
            </div>
            <div className={classes.contacts}>
              <div className={classes.description}>
                <img src={Icon5} alt="Icon" />
                <div className={classes.contactsText}>
                  <p>
                    <b>Erkan giris</b> / Sales Manager
                  </p>
                  <a href="tel:08505447514">+0(850) 544 7514</a>
                </div>
              </div>
              <div className={classes.description}>
                <img src={Icon6} alt="Icon" />
                <div className={classes.contactsText}>
                  <p>Sales Department</p>
                  <a href="mailto:sales@crosson.com">sales@crosson.com</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
