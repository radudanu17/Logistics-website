import React from "react";
import Icon from "../../../assets/Icon-2.svg";
import Icon2 from "../../../assets/CheckMark.svg";
import Icon3 from "../../../assets/CheckMarkBlack.svg";
import classes from "./PricingBox.module.css";

const PricingBox = (props) => {
  return (
    <div
      style={{ backgroundColor: props.id === 2 && "#FCD900" }}
      className={classes.box}
    >
      <h1
        style={{ backgroundColor: props.id === 2 && "#FFF" }}
        className={classes.levels}
      >
        {props.levels}
      </h1>
      <div className={classes.priceContainer}>
        <h1>{props.price}</h1>
        <p>/per month</p>
      </div>
      <p>Biscuit biscuit halvah soufflé gummi bears jelly beans</p>
      <ul style={{ listStyle: "none" }}>
        {props.features.map((feature, index) => (
          <li key={index}>
            <img src={props.id === 2 ? Icon3 : Icon2} alt="Icon" />
            {feature}
          </li>
        ))}
      </ul>
      <button
        style={{ backgroundColor: props.id === 2 && "#FFF" }}
        className={classes.buttonContact}
      >
        Get Started $29
        <img className={classes.iconContact} alt="Icon" src={Icon} />
      </button>
    </div>
  );
};

export default PricingBox;
