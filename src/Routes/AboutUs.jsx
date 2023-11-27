import About from "../components/About Us/About/About";
import OurValues from "../components/About Us/OurValues/OurValues";
import Parteners from "../components/About Us/Parteners/Parteners";
import classes from "../components/About Us/AboutUs.module.css";

const AboutUs = () => {
  return (
    <div className={classes.background}>
      <About />
      <OurValues />
      <Parteners />
    </div>
  );
};

export default AboutUs;
