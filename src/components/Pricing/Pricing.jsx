import React from "react";
import Icon from "../../assets/Icon-2.svg";
import classes from "./Pricing.module.css";
import PricingBox from "../SharedComponents/PricingBox/PricingBox";

const pricingPlans = [
  {
    levels: "BASIC",
    price: "$29",
    id: 0,
  },
  {
    levels: "STANDART",
    price: "$49",
    id: 1,
  },
  {
    levels: "PROFESSIONAL",
    price: "$59",
    id: 2,
  },
  {
    levels: "EXECULISIVE",
    price: "$99",
    id: 3,
  },
];

const Pricing = () => {
  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>Pricing</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="">Corporate</a>
            <img src={Icon} alt="Icon" />
            <a href="">Pricing</a>
          </div>
          <div className={classes.div}>
            <h3>
              At the roots of Crosson, there is 20 years of experience in food
              industry that is filled with research, increasing efficiency and
              producing solution for
              <span className={classes.line}>
                &nbsp;food, quality, automation and software.
              </span>
            </h3>
          </div>
          <p>
            Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
            icing gingerbread sugar plum powder marzipan. Cotton candy carrot
            cake pastry carrot cake jelly danish. Ice cream muffin marshmallow
            sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops
            chocolate cookie cupcake marshmallow donut. Cotton candy candy canes
            cake oat cake jelly.
          </p>
        </div>
        <div className={classes.content2}>
          {pricingPlans.map((plan) => (
            <PricingBox
              key={plan.id}
              features={[
                "Upgraded profile",
                "Multi-shot & video",
                "Instant creative portfolio",
                "Team profile and members",
                "Sell goods",
              ]}
              levels={plan.levels}
              price={plan.price}
              id={plan.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
