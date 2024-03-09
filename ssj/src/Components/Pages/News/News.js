// News Component

import "./News.css";
import newsImgTest from "../../../IMG/shardlow_news_test_img.jpg";
import { useSpring, animated } from "react-spring";

function News({ id }) {
  // Animations
  // Header
  const header = useSpring({
    from: { x: 1500 },
    to: { x: 0 },
    delay: 500,
  });

  // Object
  const object = useSpring({
    from: { x: -1500 },
    to: { x: 0 },
    delay: 250,
  });

  // News
  const news = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: "1500" },
  });

  // News Object
  const newsObj = [
    {
      id: 1,
      title: "Winners",
      image: newsImgTest,
      imageAlt: "winners image",
      description:
        "Shardlow U16 this weekend wrapped up the league with a 3-0 victory over division rivals Aston FC, and were crowned winners of the u16 first division!",
      date: "20/4/2023",
    },
    {
      id: 2,
      title: "Winners",
      image: newsImgTest,
      imageAlt: "winners image",
      description:
        "Shardlow U16 this weekend wrapped up the league with a 3-0 victory over division rivals Aston FC, and were crowned winners of the u16 first division!",
      date: "20/4/2023",
    },
  ];

  return (
    <animated.div id={id} className="news">
      <animated.div
        className="homepageObject newsObject"
        style={{ ...object, transform: "rotate(10deg)" }}
      ></animated.div>
      <animated.h3 style={{ ...header }}>Latest News</animated.h3>
      <animated.div className="newsList" style={{ ...news }}>
        <>
          {newsObj.map((item, id) => {
            return (
              <div className="newsArticle" key={id}>
                <div className="newsImg">
                  <img src={item.image} alt={item.imageAlt}></img>
                </div>
                <div className="newsInfo">
                  <h4>{item.title}</h4>
                  <p className="newsDate">{item.date}</p>
                  <p className="newsDesc">{item.description}</p>
                </div>
              </div>
            );
          })}
        </>
      </animated.div>
    </animated.div>
  );
}

export default News;
