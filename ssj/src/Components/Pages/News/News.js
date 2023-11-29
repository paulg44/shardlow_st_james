// News Component

import "./News.css";
import newsImgTest from "../../../IMG/shardlow_news_test_img.jpg";
import NewsArticle from "./NewsArticle/NewsArticle";
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

  return (
    <animated.div id={id} className="news">
      <animated.div
        className="homepageObject newsObject"
        style={{ ...object, transform: "rotate(10deg)" }}
      ></animated.div>
      <animated.h3 style={{ ...header }}>Latest News</animated.h3>
      <animated.div className="newsList" style={{ ...news }}>
        <NewsArticle
          newsTitle="Winners!"
          newsImg={newsImgTest}
          newsImgAlt="picture of winners"
          newsDesc="Shardlow U16 this weekend wrapped up the league with a 3-0 victory over division rivals Aston FC, and were crowned winners of the u16 first division!"
          newsDate="20/5/2023"
        />
        <NewsArticle
          newsTitle="Winners!"
          newsImg={newsImgTest}
          newsImgAlt="picture of winners"
          newsDesc="Shardlow U16 this weekend wrapped up the league with a 3-0 victory over division rivals Aston FC, and were crowned winners of the u16 first division!"
          newsDate="20/5/2023"
        />
      </animated.div>
    </animated.div>
  );
}

export default News;
