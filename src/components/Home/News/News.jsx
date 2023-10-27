import React from "react";
import Icon from "../../../assets/Background-1.svg";
import Icon1 from "../../../assets/News.svg";
import Icon2 from "../../../assets/News-1.svg";
import Right from "../../../assets/Icon-2.svg";

import classes from "./news.module.css";

const News = () => {
  return (
    <div className={classes.container}>
      <div className={classes.newsAll}>
        <div className={classes.newsDescription}>
          <p>COMPANY NEWS</p>
          <h1>News from Crosson</h1>
          <div className={classes.line} />
          <p>
            Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
            sesame snaps chocolate cake gummies sugar plum cotton candy cupcake
            sweet
          </p>
        </div>
        <div className={classes.generalContainer}>
          <img src={Icon1} alt="Icons" />
          <div className={classes.containerNews}>
            <p style={{ width: "65%" }}>
              Crosson Holding's 58th ordinary general assembly convened
            </p>
            <p>
              Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
              halvah ice cream.
            </p>
            <button>
              Read More
              <img className={classes.icon} alt="Icon" src={Right} />
            </button>
          </div>
          <img src={Icon2} alt="Icons" />
          <div className={classes.containerNews}>
            <p>Crosson Holding’s new Board of Directors has been determined.</p>
            <p>
              Toffee sweet roll caramels oat cake lemon drops cupcake sweet roll
              halvah ice cream.
            </p>
            <button>
              Read More
              <img className={classes.icon} alt="Icon" src={Right} />
            </button>
          </div>
        </div>
      </div>
      <img src={Icon} alt="Icon" className={classes.news} />
    </div>
  );
};

export default News;
