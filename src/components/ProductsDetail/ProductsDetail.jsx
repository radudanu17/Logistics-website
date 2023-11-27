import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import { Carousel } from "react-responsive-carousel";
import { PopupButton } from "react-calendly";
import axios from "axios";
import { saveAs } from "file-saver";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./ProductsDetail.module.css";
import Icon from "../../assets/Icon-2.svg";
import Icon2 from "../../assets/FileUploadImage.svg";
import Icon3 from "../../assets/Ellipse.svg";
import Icon4 from "../../assets/Calendly.svg";
import Icon5 from "../../assets/IconPhone.svg";
import Icon6 from "../../assets/Email.svg";
import Icon7 from "../../assets/Download.svg";
import Icon8 from "../../assets/BussinesLogistics.pdf";

const ProductsDetail = () => {
  const [images, setImages] = useState([null, null, null]);

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

    const buttons = document.querySelectorAll(".groupButton button");

    buttons.forEach((button) => {
      button.addEventListener("mouseover", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        button.classList.add("active");
      });

      button.addEventListener("mouseleave", () => {
        button.classList.remove("active");
        document.getElementById("button1").classList.add("active");
      });
    });

    return (
      <div {...getRootProps()} className={classes.dropzoneStyles}>
        <input {...getInputProps()} />
        {images[index] ? (
          <img
            src={images[index]}
            alt={`Selected ${index}`}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
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

  const downloadPdf = async () => {
    try {
      const response = await axios.get(Icon8, {
        responseType: "blob",
      });

      saveAs(response.data, "BussinesLogistics.pdf");
    } catch (error) {
      console.error("Eroare la descărcarea fișierului PDF:", error);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>Products Detail</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="/">Products</a>
            <img src={Icon} alt="Icon" />
            <a href="/">Products Detail</a>
          </div>
          <div className={classes.div}>
            <h3>
              Since our machines are produced in compliance with the difficult
              conditions that can be operated 24/7, the
              <span className={classes.line}>
                &nbsp;possibility of malfunction is very low.
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
        <div className={classes.content2}>
          <Carousel
            selectedItem={1}
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            width={928}
            height={497}
          >
            <Dropzone index={0} />
            <Dropzone index={1} />
            <Dropzone index={2} />
          </Carousel>
          <div className={classes.containerGeneraly}>
            <div className={classes.contacts}>
              <h4>Are you interested? Contact our sales department now</h4>
              <div className={classes.contacts}>
                <div className={classes.description}>
                  <img src={Icon5} alt="Icon" />
                  <div className={classes.contactsText}>
                    <p>
                      <b>Erkan giris</b> / Sales Manager
                    </p>
                    <a href="tel:08505447514">+0(850) 544 7514</a>
                  </div>
                </div>
                <div className={classes.description}>
                  <img src={Icon6} alt="Icon" />
                  <div className={classes.contactsText}>
                    <p>Sales Department</p>
                    <a href="mailto:sales@crosson.com">sales@crosson.com</a>
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.boxContainer}>
              <div className={classes.label}>
                <h1>Let's Plan an Online Meeting</h1>
                <p>
                  We are Available Now <img src={Icon3} alt="Icon" />
                </p>
              </div>
              <div className="App">
                <button
                  className={classes.calendlyButton}
                  onClick={() => {
                    window.open(
                      "https://calendly.com/danurodion/logistics-bussines",
                      "_blank"
                    );
                  }}
                >
                  <img src={Icon4} alt="Icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.group}>
          <div className={classes.groupButton}>
            <button>Product Overview</button>
            <button>Technical Data</button>
            <button>Applications</button>
            <button>Gallery</button>
          </div>
          <button className={classes.buttonDownload} onClick={downloadPdf}>
            Download PDF <img src={Icon7} alt="Icon" />
          </button>
        </div>
        <div className={classes.content3}>
          <h3>Filling & Packaging Machines</h3>
          <p>
            Donut candy shortbread toffee dragée apple pie brownie. Muffin
            chocolate halvah bonbon gummies cake apple pie. Croissant dessert
            candy canes chocolate bar topping jujubes cupcake toffee dragée.
            Fruitcake danish tart gummies tootsie roll dragée cheesecake
            jujubes.
            <br />
            <br />
            Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll
            sweet roll gummi bears tootsie roll dragée. Candy canes brownie
            danish pudding jelly gummies.
            <br />
            <br />
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
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetail;
