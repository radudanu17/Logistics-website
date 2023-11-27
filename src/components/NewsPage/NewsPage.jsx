import React from "react";
import Icon from "../../assets/Icon-2.svg";
import Icon1 from "../../assets/News.svg";
import Icon2 from "../../assets/News-1.svg";
import Icon3 from "../../assets/News-2.svg";
import Icon4 from "../../assets/News-3.svg";
import Icon5 from "../../assets/News-4.svg";
import Icon6 from "../../assets/News-5.svg";
import classes from "./NewsPage.module.css";
import NewsItem from "../SharedComponents/NewsItem/NewsItem";

const icon = [
  { image: Icon1, image1: Icon2, id: 1 },
  { image: Icon3, image1: Icon4, id: 2 },
  { image: Icon5, image1: Icon6, id: 3 },
];

const NewsPage = () => {
  return (
    <div className={classes.container}>
      <div className={classes.customClass}>
        <div className={classes.content}>
          <h2>News</h2>
          <div className={classes.link}>
            <a href="/">Home</a>
            <img src={Icon} alt="Icon" />
            <a href="">News</a>
          </div>
        </div>
        <div className={classes.generalContainer}>
          <div className={classes.content2}>
            {icon.map((item) => (
              <NewsItem key={item.id} image={item.image} image1={item.image1} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
