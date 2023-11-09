// News Article Component

import "./NewsArticle.css";

function NewsArticle(props) {
  return (
    <div className="newsArticle">
      <div className="newsImg">
        <img src={props.newsImg} alt={props.newsImgAlt}></img>
      </div>
      <div className="newsInfo">
        <h4>{props.newsTitle}</h4>
        <p className="newsDate">{props.newsDate}</p>
        <p className="newsDesc">{props.newsDesc}</p>
      </div>
    </div>
  );
}

export default NewsArticle;
