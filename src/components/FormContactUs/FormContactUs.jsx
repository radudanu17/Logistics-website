import React from "react";
import Icon from "../../assets/Icon-2.svg";
import classes from "./FormContactUs.module.css";
import Contacts from "../SharedComponents/Contacts/Contacts";

const contents = [
  {
    title: "Contact Informations",
    description: "Get in touch and let us know how we can help",
    phoneTitle: "PHONE",
    mailTitle: "MAIL",
    addressTitle: "ADDRESS",
    address: "One Apple Park Way; Cupertino CA 95014, U.S.A.",
    buttonText: "Get Direction",
    margin: 0,
    marginTop: 0,
    id: 0,
  },
];

const FormContactUs = () => {
  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>Contact Us</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="">Contact Us</a>
          </div>
          <div className={classes.div}>
            <h3>
              Interested in our
              <span className={classes.line}>&nbsp;Machine & Software</span>
              &nbsp; services or need advice? Then please get in touch and we’ll
              be glad to help.
            </h3>
          </div>
        </div>
        <div className={classes.contactsAll}>
          <div className={classes.content2}>
            {contents.map((content) => (
              <Contacts
                title={content.title}
                description={content.description}
                phoneTitle={content.phoneTitle}
                mailTitle={content.mailTitle}
                addressTitle={content.addressTitle}
                address={content.address}
                width={content.width}
                buttonText={content.buttonText}
                id={content.id}
                key={content.id}
                background="none"
                border="none"
                margin={content.margin}
                marginTop={content.marginTop}
              />
            ))}
          </div>
          <div className={classes.contactForm}>
            <h4>Contact Form</h4>
            <p>Get in touch and let us know how we can help</p>
            <div className={classes.form}>
              <form action="mailto:hello@crosson.com" method="post">
                <div className={classes.customInputWrapper}>
                  <input
                    type="text"
                    id="fname"
                    name="fullname"
                    placeholder="Name Surname"
                    required
                    className={classes.customInput}
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="E-Mail Address"
                    required
                    className={classes.customInput}
                  />
                </div>
                <div className={classes.customInputWrapper1}>
                  <input
                    type="number"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    required
                    className={classes.customInput}
                  />
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder="Your Company"
                    required
                    className={classes.customInput}
                  />
                </div>
                <div className={classes.customInputWrapper2}>
                  <textarea
                    id="comment"
                    name="comment"
                    placeholder="Your Message"
                    required
                    className={classes.customTextarea}
                  />
                </div>
                <button type="submit" className={classes.buttonContact}>
                  Submit
                  <img className={classes.iconContact} alt="Icon" src={Icon} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContactUs;
