import React from "react";
import Icon from "../../assets/IconPhone.svg";
import Icon1 from "../../assets/Email.svg";
import Icon2 from "../../assets/Maps.svg";
import Icon3 from "../../assets/Career.svg";
import Icon4 from "../../assets/Icon-2.svg";

import classes from "./contact.module.css";

const Contact = () => {
  return (
    <div className={classes.footer}>
      <div className={classes.contact}>
        <div className={classes.generalContent}>
          <div className={classes.generalContainerContact}>
            <div className={classes.questions}>
              <h1>Have a any questions? Contact Us</h1>
              <div className={classes.line} />
            </div>
            <div className={classes.containerContact}>
              <div className={classes.descriptionContacts}>
                <img src={Icon} alt="Icon" />
                <div className={classes.textContacts}>
                  <p>Phone Number</p>
                  <a href="tel:08505447514" className={classes.contactTel}>
                    +0(850) 544 7514
                  </a>
                </div>
              </div>
              <div className={classes.descriptionContacts}>
                <img src={Icon1} alt="Icon" />
                <div className={classes.textContacts}>
                  <p>E-Mail Address</p>
                  <a href="mailto:hello@crosson.com">hello@crosson.com</a>
                </div>
              </div>
              <div className={classes.descriptionContacts}>
                <img src={Icon2} alt="Icon" />
                <div className={classes.textContacts}>
                  <p>Headquarters</p>
                  <h1>One Apple Park Way; Cupertino CA 95014, U.S.A.</h1>
                  <a href="https://maps.apple.com/place?q=Apple%20Park&ll=37.3349%2C-122.00902&auid=559098170073364042&lsp=9902&address=Apple%20Inc.%2C%201%20Apple%20Park%20Way%2C%20Cupertino%2C%20CA%2095014%2C%20United%20States">
                    <h6>Get Direction</h6>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.navAllContacts}>
            <div className={classes.navProducts}>
              <p>Products</p>
              <div className={classes.fillingMachines}>
                Filling Machines
                <br />
                Bottle Filling Series
                <br />
                Package Machines
                <br />
                Linear Machines
                <br />
                Rotary Machines
              </div>
            </div>
            <div className={classes.navProducts}>
              <p>Solutions</p>
              <div className={classes.fillingMachines}>
                End of Line Solutions
                <br />
                Food Industry Machines Software
                <br />
                Research Solutions
                <br />
                Conveyor Solutions
                <br />
                Special Solutions Your Needs
              </div>
            </div>
            <div className={classes.navProducts}>
              <p>Corporate</p>
              <div className={classes.fillingMachines}>
                About Us
                <br />
                Our Values
                <br />
                Human Resorces
                <br />
                News
                <br />
                Contact
              </div>
            </div>
            <div className={classes.containerCareer}>
              <img src={Icon3} alt="Icon" />
              <div className={classes.careerOpportunities}>
                <h1>Career Opportunities</h1>
                <p>
                  Cake pudding lollipop pastry cupcake chocolate. Gummi bears
                  halvah <u>sesame snaps.</u>
                </p>
                <button className={classes.buttonContact}>
                  Opennig Positions
                  <img className={classes.iconContact} alt="Icon" src={Icon4} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.footerHedear}>
        <p>Copyright by Erkan Giris | All rights reserverd</p>
        <p>
          Our Privacy and Personal Data Protection Policy | Terms and Conditions
          of Use
        </p>
      </div>
    </div>
  );
};

export default Contact;
