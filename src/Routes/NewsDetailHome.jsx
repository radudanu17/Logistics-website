import React from "react";
import { NewsDetail } from "../components/NewsDetail/NewsDetail";
import RelatedNews from "../components/NewsDetail/RelatedNews/RelatedNews";

const NewsDetailHome = () => {
  return (
    <>
      <NewsDetail />
      <RelatedNews />
    </>
  );
};

export default NewsDetailHome;
