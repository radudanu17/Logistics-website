import React from "react";
import "./Products.css";
import Phone from "../../assets/Icon.png";
import Icon from "../../assets/Icon-2.png";

const Products = () => {
  return (
    <div className="box">
      <div className="slider">
        <div className="overlap-group">
          <div className="slider-navigation">
            <div className="ellipse"></div>
            <div className="div"></div>
            <div className="ellipse-2"></div>
          </div>
          <div className="overlap">
            <div className="line"></div>
            <p className="we-make-filling">
              We make Filling & Packaging
              <br />
              Machines for Food Industry
            </p>
          </div>
          <p className="text-wrapper">
            With our flexible production capacity and high technology, we
            produce customized solutions for your needs.
          </p>
          <div className="button-with-icon">
            <div className="text-wrapper-2">Our Products</div>
            <img className="icon" src={Icon} />
          </div>
          <div className="sales-department">
            <div className="text-wrapper-3">+0(850) 544 7514</div>
            <div className="text-wrapper-4">Sales Department</div>
            <img className="phone" src={Phone} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
