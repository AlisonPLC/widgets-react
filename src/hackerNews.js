import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./scss/main.scss";
import newsDummy from "./hackerNewsFetch";

const HackerNews = () => {
  const news1 = newsDummy.News.find(item => item.id === 8863);
  const news2 = newsDummy.News.find(item => item.id === 126809);
  const news3 = newsDummy.News.find(item => item.id === 160705);
  const news4 = newsDummy.News.find(item => item.id === 121003);
  const news5 = newsDummy.News.find(item => item.id === 192327);

  return (
    <div className="hackerNewsArea">
      <div className="hackerNews-header">
        <h3 className="mainTopic">Hacker News</h3>
        <div className="hackerNews-body">
          {/*Tread-Start */}
          <div className="tread">
            <div className="tread-title">{news1.title}</div>
            <div className="tread-title">{news2.title}</div>
            <div className="tread-title">{news3.title}</div>
            <div className="tread-title">{news4.title}</div>
            <div className="tread-title">{news5.title}</div>
          </div>
          {/*Tread-End */}
        </div>
      </div>
    </div>
  );
};

export default HackerNews;
