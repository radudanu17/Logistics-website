import React from "react";
import classes from "./NewsItem.module.css";
import Right from "../../../assets/Icon-2.svg";

const NewsItem = (props) => {
  return (
    <>
      <div className={classes.box}>
        <img src={props.image} alt="Icon" />
        <div className={classes.content}>
          <h4>Crosson Holding’s 58th ordinary general assembly convened</h4>
          <p>
            Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
            halvah ice cream.
          </p>
          <button type="submit" className={classes.buttonContact}>
            Read More
            <img className={classes.iconContact} alt="Icon" src={Right} />
          </button>
        </div>
      </div>
      <div className={classes.box}>
        <img src={props.image1} alt="Icon" />
        <div className={classes.content}>
          <h4>Crosson Holding’s new Board of Directors has been determined.</h4>
          <p>
            Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
            halvah ice cream.
          </p>
          <button type="submit" className={classes.buttonContact}>
            Read More
            <img className={classes.iconContact} alt="Icon" src={Right} />
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
