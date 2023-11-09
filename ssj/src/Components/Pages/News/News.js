// News Component

import "./News.css";
import newsImgTest from "../../../IMG/shardlow_news_test_img.jpg";
import NewsArticle from "./NewsArticle/NewsArticle";

function News({ id }) {
  return (
    <div id={id} className="news">
      <div className="homepageObject newsObject"></div>
      <h3>Latest News</h3>
      <div className="newsList">
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
      </div>
    </div>
  );
}

export default News;
