import React from "react";
import Icon from "../../assets/Icon-2.svg";
import classes from "./ContactUs.module.css";
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
    id: 0,
  },
  {
    title: "Technical Support",
    description: "You can reach our technical support team 24/7",
    phoneTitle: "SUPPORT PHONE",
    mailTitle: "SUPPORT MAIL",
    addressTitle: "SUPPORT REQUEST FORM",
    address: "Caramels cake marshmallow cheesecake shortbread soufflé",
    width: "357",
    buttonText: "Request Form",
    id: 1,
  },
  {
    title: "Satisfaction Survey",
    description: 'Use the "Service Evaluation" code to make an evaluation',
    phoneTitle: "WHERE IS MY CODE?",
    mailTitle: "SUPPORT MAIL",
    buttonText: "Rate Us",
    id: 2,
  },
];

const ContactUs = () => {
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
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
