import React from "react";
import Right from "../../assets/Icon-2.png";
import Icon from "../../assets/Icon.svg";
import Icon2 from "../../assets/Icon2.svg";
import Icon3 from "../../assets/Icon3.svg";
import "./Solutions.css";

const Solutions = () => {
  return (
    <div className="container">
      <div className="content">
        <div className="text-wrapper-1">WHO WE ARE</div>
        <div className="overlap-group-1">
          <p className="crosson-is-an">
            Crosson is an international group <br />
            dedicated to the food industry.
          </p>
          <div className="line-1" />
        </div>
        <div className="div2">
          <p className="crosson-has-twenty">
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
        <div className="div3">
          <button class="button">
            About Us
            <img class="icon" alt="Icon" src={Right} />
          </button>
          <a href="#" className="text">
            Quality Certificates
          </a>
        </div>
      </div>
      <div className="content-2">
        <div className="text-right">
          <img src={Icon} alt="Icon" />
          <div className="describe">
            <h1>Exported to 24 Countries</h1>
            <p>168 companies in 24 countries use our machines</p>
          </div>
        </div>
        <div className="text-right">
          <img src={Icon2} alt="Icon" />
          <div className="describe">
            <h1>8 Billion Products Per Day</h1>
            <p>8 billion products are produced daily from our machines.</p>
          </div>
        </div>
        <div className="text-right">
          <img src={Icon3} alt="Icon" />
          <div className="describe">
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
