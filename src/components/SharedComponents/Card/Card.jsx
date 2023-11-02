import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={classes.contentDiv}>
      <div
        style={{
          width: `${props.width}`,
          height: "304px",
          background: `url(${props.imageLink})`,
        }}
        alt="Icon"
      />
      <div className={classes.describe}>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
      </div>
      <a
        className={classes.readMore}
        style={{ marginTop: `${props.top}` }}
        href="#"
      >
        Read more
        <span>&#10095;</span>
      </a>
    </div>
  );
};

export default Card;
