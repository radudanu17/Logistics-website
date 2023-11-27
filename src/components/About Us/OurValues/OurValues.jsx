import React from "react";
import classes from "./OurValues.module.css";
import Icon from "../../../assets/PlaningProduction2.svg";
import Icon1 from "../../../assets/InstallationComisioning2.svg";
import Card from "../../SharedComponents/Card/Card";

const cards = [
  {
    imageLink: Icon,
    title: "Our Mission",
    text: "Center we have developped many patents in filling and packaging technology.",
    width: "337px",
    top: "43px",
    id: 0,
  },
  {
    imageLink: Icon1,
    title: "Our Mission",
    text: "Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears.",
    width: "338px",
    top: "43px",
    id: 1,
  },
];

const OurValues = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h1>OUR VALUES</h1>
        <div className={classes.div}>
          <h2>
            Crosson has adopted Quality Production as its
            <span className={classes.line}>basic principle.</span>
          </h2>
        </div>
        <p>
          To be one of the pioneering, dynamic and leading companies that offer
          quality products and services with an understanding of continuous
          improvement in the fields in which it operates.
        </p>
        <a href="/pricing">Quality Certificates</a>
      </div>
      <div className={classes.content2}>
        {cards.map((card) => (
          <Card
            key={card.id}
            imageLink={card.imageLink}
            title={card.title}
            text={card.text}
            width={card.width}
            top={card.top}
          />
        ))}
      </div>
    </div>
  );
};

export default OurValues;
