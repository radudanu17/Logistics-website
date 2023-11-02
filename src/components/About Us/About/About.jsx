import React from "react";
import classes from "./about.module.css";
import PageHome from "../../SharedComponents/PageHome/PageHome";
import AboutStyles from "./About.module.css";
const pages = [
  {
    title: "About Us",
    link1: "Home",
    link2: "Corporate",
    link3: "About Crosson",
    subtitle:
      "At the roots of Crosson, there is 20 years of experience in food industry that is filled with research, increasing efficiency and producing solution for",
    subtitle1: "food, quality, automation and software.",
    describe:
      "Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies.",
    describe2:
      "Toffee jelly caramels macaroon bonbon dragée muffin halvah. Pudding icing gingerbread sugar plum powder marzipan. Cotton candy carrot cake pastry carrot cake jelly danish. Ice cream muffin marshmallow sesame snaps pie cupcake tart. Lemon drops macaroon lemon drops chocolate cookie cupcake marshmallow donut. Cotton candy candy canes cake oat cake jelly.",
    id: 0,
  },
];

const About = () => {
  return (
    <div>
      {pages.map((page) => (
        <PageHome
          key={page.id}
          title={page.title}
          link1={page.link1}
          link2={page.link2}
          link3={page.link3}
          subtitle={page.subtitle}
          classes={AboutStyles}
          subtitle1={page.subtitle1}
          describe={page.describe}
          describe2={page.describe2}
        />
      ))}
    </div>
  );
};

export default About;
