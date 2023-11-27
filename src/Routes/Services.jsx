import React from "react";
import Service from "../components/Services/Service/Service";
import ExploreServices from "../components/Services/ExploreServices/ExploreServices";
import PartenersServices from "../components/Services/PartenersServices/PartenersServices";
import classes from "../components/Services/Services.module.css";

const Services = () => {
  return (
    <div className={classes.background}>
      <Service />
      <ExploreServices />
      <PartenersServices />
    </div>
  );
};

export default Services;
