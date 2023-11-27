import React from "react";
import Icon from "../../assets/Icon-2.svg";
import Icon2 from "../../assets/NewsConferince.svg";
import classes from "./NewsDetail.module.css";

export const NewsDetail = () => {
  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>Crosson Holding’s 58th ordinary general assembly convened</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="">News</a>
            <img src={Icon} alt="Icon" />
            <a href="">
              Crosson Holding’s 58th ordinary general assembly convened
            </a>
          </div>
          <img
            style={{ width: "1400px", height: "608px", marginTop: "52px" }}
            src={Icon2}
            alt="Icon"
          />
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
            Donut candy shortbread toffee dragée apple pie brownie. Muffin
            chocolate halvah bonbon gummies cake apple pie. Croissant dessert
            candy canes chocolate bar topping jujubes cupcake toffee dragée.
            Fruitcake danish tart gummies tootsie roll dragée cheesecake
            jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
            Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
            brownie danish pudding jelly gummies.
            <br />
            <br />
            Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding
            icing gingerbread sugar plum powder marzipan. Cotton candy carrot
            cake pastry carrot cake jelly danish. Ice ceam muffin marshmallow
            sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops
            chocolate cookie cupcake marshmallow donut. Cotton candy candy canes
            cake oat cake jelly.
            <br />
            <br />
            Muffin chocolate halvah bonbon gummies cake apple pie. Croissant
            dessert candy canes chocolate bar topping jujubes cupcake toffee
            dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake
            jujubes. Fruitcake powder marzipan dessert dessert oat cake candy.
            Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes
            brownie danish pudding jelly gummies.
            <br />
            <br />
            Pudding icing gingerbread sugar plum powder marzipan. Cotton candy
            carrot cake pastry carrot cake jelly danish. Ice cream muffin
            marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon
            lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy
            candy canes cake oat cake jelly.
          </p>
        </div>
      </div>
    </div>
  );
};
