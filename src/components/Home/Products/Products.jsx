import React from "react";
import Background from "../../../assets/SliderBg.svg";
import Icon from "../../../assets/Icon-2.svg";
import Phone from "../../../assets/IconPhone.svg";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import classes from "./Products.module.css";

const Products = () => {
  return (
    <Carousel
      selectedItem={1}
      showThumbs={false}
      showStatus={false}
      showArrows={false}
    >
      <div className={classes.products}>
        <img src={Background} />
        <div className={classes.container}>
          <div className={classes.heading}>
            <div className={classes.div}>
              <h2>
                We make Filling & Packaging Machines for
                <span className={classes.line}>&nbsp;Food Industry</span>
              </h2>
            </div>
            <p>
              With our flexible production capacity and high technology, we
              produce customized solutions for your needs.
            </p>
          </div>
          <div className={classes.footer}>
            <button>
              <span>Our Products</span>
              <img className={classes.icon} alt="Icon" src={Icon} />
            </button>
            <div className={classes.contact}>
              <img className={classes.phone} src={Phone} alt="Icon" />
              <div className={classes.numberText}>
                <p>Sales Department</p>
                <a href="tel:08505447514">+0(850) 544 7514</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.products}>
        <img src={Background} />
        <div className={classes.container}>
          <div className={classes.heading}>
            <div className={classes.div}>
              <h2>
                We make Filling & Packaging Machines for
                <span className={classes.line}>&nbsp;Food Industry</span>
              </h2>
            </div>
            <p>
              With our flexible production capacity and high technology, we
              produce customized solutions for your needs.
            </p>
          </div>
          <div className={classes.footer}>
            <button>
              <span>Our Products</span>
              <img className={classes.icon} alt="Icon" src={Icon} />
            </button>
            <div className={classes.contact}>
              <img className={classes.phone} src={Phone} alt="Icon" />
              <div className={classes.numberText}>
                <p>Sales Department</p>
                <a href="tel:08505447514">+0(850) 544 7514</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.products}>
        <img src={Background} />
        <div className={classes.container}>
          <div className={classes.heading}>
            <div className={classes.div}>
              <h2>
                We make Filling & Packaging Machines for
                <span className={classes.line}>&nbsp;Food Industry</span>
              </h2>
            </div>
            <p>
              With our flexible production capacity and high technology, we
              produce customized solutions for your needs.
            </p>
          </div>
          <div className={classes.footer}>
            <button>
              <span>Our Products</span>
              <img className={classes.icon} alt="Icon" src={Icon} />
            </button>
            <div className={classes.contact}>
              <img className={classes.phone} src={Phone} alt="Icon" />
              <div className={classes.numberText}>
                <p>Sales Department</p>
                <a href="tel:08505447514">+0(850) 544 7514</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
};

export default Products;
