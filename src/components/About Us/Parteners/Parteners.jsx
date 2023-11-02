import React from "react";
import Ellipse8 from "../../../assets/Ellipse8.svg";
import Ellipse9 from "../../../assets/Ellipse9.svg";
import Ellipse10 from "../../../assets/Ellipse10.svg";
import Ellipse11 from "../../../assets/Ellipse11.svg";
import Ellipse12 from "../../../assets/Ellipse12.svg";
import Ellipse13 from "../../../assets/Ellipse13.svg";
import Ellipse14 from "../../../assets/Ellipse14.svg";
import Ellipse15 from "../../../assets/Ellipse15.svg";
import Ellipse16 from "../../../assets/Ellipse16.svg";
import Ellipse17 from "../../../assets/Ellipse17.svg";
import Ellipse18 from "../../../assets/Ellipse18.svg";
import Ellipse19 from "../../../assets/Ellipse19.svg";
import Ellipse20 from "../../../assets/Ellipse20.svg";
import Ellipse21 from "../../../assets/Ellipse21.svg";
import Ellipse22 from "../../../assets/Ellipse22.svg";
import Ellipse23 from "../../../assets/Ellipse23.svg";
import Ellipse24 from "../../../assets/Ellipse24.svg";
import Ellipse25 from "../../../assets/Ellipse25.svg";
import Ellipse26 from "../../../assets/Ellipse26.svg";
import Ellipse27 from "../../../assets/Ellipse27.svg";
import Ellipse28 from "../../../assets/Ellipse28.svg";
import Ellipse29 from "../../../assets/Ellipse29.svg";

import classes from "./Parteners.module.css";

const images = [
  Ellipse8,
  Ellipse9,
  Ellipse10,
  Ellipse11,
  Ellipse12,
  Ellipse13,
  Ellipse14,
  Ellipse15,
  Ellipse16,
  Ellipse17,
  Ellipse18,
  Ellipse19,
  Ellipse20,
  Ellipse21,
  Ellipse22,
  Ellipse23,
  Ellipse24,
  Ellipse25,
  Ellipse26,
  Ellipse27,
  Ellipse28,
  Ellipse29,
];

const Parteners = () => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.parteners}>
          <h1>PARTNERS</h1>
          <div className={classes.div}>
            <h2>
              Ask our
              <span className={classes.line}>&nbsp;happy customers</span>
              <br />
              about our quality
            </h2>
          </div>
        </div>
        <div className={classes.describe}>
          <p>
            To be one of the pioneering, dynamic and leading companies that
            offer quality products and services with an understanding of
            continuous improvement in the fields in which it operates.
          </p>
          <h3>Erkan Giris, EG Theme</h3>
        </div>
      </div>
      <div className={classes.container2}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {images.map((image, index) => (
            <div key={index} className={classes.partnerImage}>
              <div style={{ position: "relative" }}>
                <img src={image} alt={`Ellipse ${index + 8}`} />
                {index === images.length - 1 && (
                  <div className={classes.partnerText}>Become Partner</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Parteners;
