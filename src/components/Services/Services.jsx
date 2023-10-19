import React from "react";
import Icon from "../../assets/LinearMachines.svg";
import Icon1 from "../../assets/RotaryMachines.svg";
import Icon2 from "../../assets/BottleMachines.svg";
import Icon3 from "../../assets/Ellipse.svg";
import Icon4 from "../../assets/Calendly.svg";
import Icon5 from "../../assets/Icon.png";
import Icon6 from "../../assets/Email.svg";

import "./Services.css";

const Services = () => {
  return (
    <div className="services">
      <div className="general-content">
        <div className="machine-title">
          <h1 className="general-title">Filling and Packaging Machines</h1>
          <p className="general-text">
            Liquorice lemon drops powder chocolate liquorice candy dessert gummi
            bears. Caramels marzipan donut jujubes sweet roll. Powder croissant
            toffee shortbread chocolate sweet pie.
            <a href="#" className="read-more">
              Read more
              <span>&#10095;</span>
            </a>
          </p>
        </div>
        <div className="general-container">
          <div className="content-div">
            <img src={Icon} alt="Icon" />
            <p>Linear Machines</p>
          </div>
          <div className="content-div">
            <img src={Icon1} alt="Icon" />
            <p>Rotary Machines</p>
          </div>
          <div className="content-div">
            <img src={Icon2} alt="Icon" />
            <p>Bottle Filling Machines</p>
          </div>
        </div>
      </div>
      <div className="general-container-1">
        <div className="box-content">
          <div className="box-container">
            <div className="label">
              <h1>Let's Plan an Online Meeting</h1>
              <p>
                We are Available Now <img src={Icon3} alt="Icon" />
              </p>
            </div>
            <img src={Icon4} alt="Icon" className="calendly" />
          </div>
          <div className="box-container-1">
            <div className="label-1">
              Are you interested? Contact our sales department now
            </div>
            <div className="contacts">
              <div className="description">
                <img src={Icon5} alt="Icon" />
                <div className="contacts-text">
                  <p>
                    <b>Erkan giris</b> / Sales Manager
                  </p>
                  <a href="tel:08505447514">+0(850) 544 7514</a>
                </div>
              </div>
              <div className="description">
                <img src={Icon6} alt="Icon" />
                <div className="contacts-text">
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
