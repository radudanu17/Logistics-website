import React from "react";
import Icon from "../../../assets/ProductDesign.svg";
import Icon1 from "../../../assets/PlaningProduction.svg";
import Icon2 from "../../../assets/InstallationComisioning.svg";
import Card from "../../SharedComponents/Card/Card";

import classes from "./Corporate.module.css";

const cards = [
  {
    imageLink: Icon,
    title: "Product Design",
    text: "Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll halvah ice cream.",
    width: "456px",
    top: "43px",
    id: 0,
  },
  {
    imageLink: Icon1,
    title: "Planing & Production",
    text: "Center we have developped many patents in filling and packaging technology.",
    width: "457px",
    top: "43px",
    id: 1,
  },
  {
    imageLink: Icon2,
    title: "Installation & Comisioning",
    text: "Marshmallow pastry jelly beans chocolate bar cake pastry powder gummi bears.",
    width: "456px",
    top: "43px",
    id: 1,
  },
];

const Corporate = () => {
  return (
    <div className={classes.corporate}>
      <div className={classes.generalContent}>
        <div className={classes.howWeDo}>HOW WE DO</div>
        <div className={classes.div}>
          <h2>
            A journey from
            <span className={classes.line}>&nbsp;design to product.</span>
          </h2>
        </div>
        <p className={classes.generalText}>
          Starting from the planning of the product our customer wants; design,
          manufacturing, software, mounting, installation & comissioning are
          made by us.
        </p>
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

export default Corporate;
