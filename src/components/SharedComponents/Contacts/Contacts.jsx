import React from "react";
import Icon from "../../../assets/Icon-2.svg";
import classes from "./Contacts.module.css";
import { useNavigate } from "react-router-dom";

function Contacts(props) {
  const navigate = useNavigate();
  return (
    <div
      className={classes.box}
      style={{
        background: props.background,
        border: props.border,
      }}
    >
      <div
        className={classes.information}
        style={{ margin: props.margin, marginTop: props.marginTop }}
      >
        <div className={classes.description}>
          <h4>{props.title}</h4>
          <p>{props.description}</p>
        </div>
        <div className={classes.contactItem}>
          <h2>{props.phoneTitle}</h2>
          {props.id === 2 ? (
            <p className={classes.code}>
              The Service Evaluation code will be provided after the service is
              performed by the technical team.
            </p>
          ) : (
            <a href="tel:08505447514">+0(850) 544 7514</a>
          )}
        </div>
        <div className={classes.contactItem}>
          <h2>{props.mailTitle}</h2>
          <a href="mailto:hello@crosson.com">hello@crosson.com</a>
        </div>
        <div className={classes.contactItem}>
          <h2>{props.addressTitle}</h2>
          <p style={{ width: `${props.width}px` }}>{props.address}</p>
        </div>
        <div className={classes.direction}>
          <button
            className={classes.buttonContact}
            onClick={() => {
              if (props.id === 1) {
                navigate("/contactUsForm");
              } else if (props.id === 0) {
                navigate("/contactUs");
              }
            }}
          >
            {props.buttonText}
            <img className={classes.iconContact} alt="Icon" src={Icon} />
          </button>
          {props.id === 0 ? (
            <a href="https://www.google.com/maps/place/Apple+Park/@37.3346438,-122.008972,15z/data=!4m14!1m7!3m6!1s0x808fb596e9e188fd:0x3b0d8391510688f0!2sApple+Park!8m2!3d37.3346438!4d-122.008972!16s%2Fg%2F11bzx2n6td!3m5!1s0x808fb596e9e188fd:0x3b0d8391510688f0!8m2!3d37.3346438!4d-122.008972!16s%2Fg%2F11bzx2n6td?entry=ttu">
              See on Map
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Contacts;
