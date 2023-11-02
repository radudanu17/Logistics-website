import React from "react";
import Icon from "../../../assets/Icon-2.svg";
import classes from "./PageHome.module.css";

const currentURL = window.location.href;

const PageHome = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <h2>{props.title}</h2>
        <div className={classes.link}>
          <a href="/">{props.link1}</a>
          <img src={Icon} alt="Icon" />
          <a href="">{props.link2}</a>
          {currentURL.includes("/about") ? <img src={Icon} alt="Icon" /> : null}
          <a href="">{props.link3}</a>
        </div>
        <div className={classes.div}>
          <h3>
            {props.subtitle}
            <span className={props.classes.line}>&nbsp;{props.subtitle1}</span>
          </h3>
        </div>
        <p>
          {props.describe}
          <br />
          <br />
          {props.describe1 ? (
            <ul style={{ listStyle: "none" }}>
              <li>
                <span
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    paddingRight: "12px",
                  }}
                >
                  &#10004;
                </span>
                Danish lemon drops sweet soufflé jelly-o wafer gingerbread
                muffin.
              </li>
              <li>
                <span
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    paddingRight: "12px",
                  }}
                >
                  &#10004;
                </span>
                Marshmallow caramels chocolate jelly-o sweet roll jelly beans
                cake sweet.
              </li>
              <li>
                <span
                  style={{
                    color: "#000",
                    fontWeight: "600",
                    paddingRight: "12px",
                  }}
                >
                  &#10004;
                </span>
                Donut pastry apple pie ice cream dragée cheesecake.
              </li>
            </ul>
          ) : (
            props.describe2
          )}
        </p>
      </div>
    </div>
  );
};

export default PageHome;
