import React from "react";
import Icon from "../../assets/Camera.svg";
import Icon1 from "../../assets/Machines.svg";
import Icon2 from "../../assets/Solution.svg";
import Icon3 from "../../assets/Soft.svg";
import Icon4 from "../../assets/Headphones.svg";
import Icon5 from "../../assets/Light.svg";

import "./Softwares.css";

const Softwares = () => {
  return (
    <div className="softwares">
      <div className="generaly">
        <div className="container-1">
          <p className="what-we-do">WHAT WE DO</p>
          <div className="div">
            <p className="text-wrapper">
              With our flexible production capacity and high technology, we
              produce customized solutions for your needs.
            </p>
            <div className="line-2" />
          </div>
        </div>
        <div className="product-wrapper">
          <img src={Icon} alt="Icon" />
          <div className="product-info">
            <h1>Watch Our Machines</h1>
            <p>2.34Min, 14.7MB</p>
          </div>
        </div>
      </div>
      <div className="content-3">
        <div className="machinery">
          <img src={Icon1} alt="Icon" />
          <p>Filling and Packaging Machines</p>
        </div>
        <div className="machinery">
          <img src={Icon2} alt="Icon" />
          <p>End of Line Solutions</p>
        </div>
        <div className="machinery">
          <img src={Icon3} alt="Icon" />
          <p>Food Industry Machines Software</p>
        </div>
        <div className="machinery">
          <img src={Icon4} alt="Icon" />
          <p>7/24 Techincal Support</p>
        </div>
        <div className="machinery">
          <img src={Icon5} alt="Icon" />
          <p>Special Solutions Your Needs</p>
        </div>
      </div>
    </div>
  );
};

export default Softwares;
