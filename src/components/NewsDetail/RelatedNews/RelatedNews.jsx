import React from "react";
import Icon1 from "../../../assets/News.svg";
import Icon2 from "../../../assets/News-1.svg";
import classes from "./RelatedNews.module.css";
import NewsItem from "../../SharedComponents/NewsItem/NewsItem";

const icon = [
  {
    image: Icon1,
    image1: Icon2,
  },
];

const RelatedNews = () => {
  return (
    <div className={classes.container}>
      <div className={classes.newsAll}>
        <div className={classes.newsDescription}>
          <div className={classes.div}>
            <h2>
              <span className={classes.line}>Related</span>&nbsp;News
            </h2>
          </div>
          <p>
            Cake pudding lollipop pastry cupcake chocolate. Gummi bears halvah
            sesame snaps chocolate cake gummies sugar plum cotton candy cupcake
            sweet
          </p>
        </div>
        <div className={classes.generalContainer}>
          {icon.map((item) => (
            <NewsItem image={item.image} image1={item.image1} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RelatedNews;
