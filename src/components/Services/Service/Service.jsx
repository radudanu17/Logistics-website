import React from "react";
import Icon from "../../../assets/Icon-2.svg";
import classes from "./Service.module.css";
import PageHome from "../../SharedComponents/PageHome/PageHome";
import ServiceStyles from "./Service.module.css";

const pages = [
  {
    title: "Services",
    link1: "Home",
    link2: "Services",
    subtitle:
      "Since our machines are produced in compliance with the difficult conditions that can be operated 24/7, the",
    subtitle1: "possibility of malfunction are very low.",
    describe:
      "Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.",
    describe1: String,
    id: 0,
  },
];

const Service = () => {
  return (
    <div>
      {pages.map((page) => (
        <PageHome
          key={page.id}
          title={page.title}
          link1={page.link1}
          link2={page.link2}
          subtitle={page.subtitle}
          classes={ServiceStyles}
          subtitle1={page.subtitle1}
          describe={page.describe}
          describe1={page.describe1}
        />
      ))}
    </div>
  );
};

export default Service;
