import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import Icon from "../../assets/Icon-2.svg";
import Icon2 from "../../assets/FileUploadImage.svg";
import classes from "./ProductsHome.module.css";

const ProductsHome = () => {
  const [images, setImages] = useState([null, null, null, null]);
  const [descriptions] = useState([
    "Filling & Packaging Machines",
    "Linear Brode Machines",
    "Rotary Machines",
    "Bottle Warmup Machines",
  ]);

  const onDrop = (acceptedFiles, index) => {
    const imageFile = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      const newImages = [...images];
      newImages[index] = reader.result;
      setImages(newImages);
    };

    reader.readAsDataURL(imageFile);
  };

  const Dropzone = ({ index }) => {
    const { getRootProps, getInputProps } = useDropzone({
      onDrop: (acceptedFiles) => onDrop(acceptedFiles, index),
      accept: "image/*",
      maxFiles: 1,
    });

    return (
      <div {...getRootProps()} className={classes.dropzoneStyles}>
        <input {...getInputProps()} />
        {images[index] ? (
          <img
            src={images[index]}
            alt={`Selected ${index}`}
            style={{
              width: "100%",
              height: "100%",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          />
        ) : (
          <div>
            <img src={Icon2} alt="Icon" className={classes.iconImage} />
            <p className={classes.typography}>PHOTO HERE</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>Products</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="">Products</a>
          </div>
          <div className={classes.div}>
            <h3>
              Since our machines are produced in compliance with the difficult
              conditions that can be operated 24/7, the
              <span className={classes.line}>
                &nbsp;possibility of malfunction are very low.
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
          </p>
        </div>
        <div className={classes.generalContainer}>
          <div className={classes.content2}>
            {[0, 1, 2, 3].map((index) => (
              <div key={index} className={classes.dropzoneContainerStyles}>
                <Dropzone index={index} />
                <h4 className={classes.describe}>{descriptions[index]}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsHome;
