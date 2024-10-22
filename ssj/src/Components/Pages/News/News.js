// News Component

import "../../../assets/css/News.css";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { InstagramEmbed } from "react-social-media-embed";
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

  async function loadInstagramURLData() {
    try {
      const response = await fetch("http://localhost:3030/instagramData");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data client side", error);
    }
  }

  loadInstagramURLData();

  return (
    <animated.div id={id} className="news">
      <animated.div
        className="homepageObject newsObject"
        style={{ ...object, transform: "rotate(10deg)" }}
      ></animated.div>
      <animated.h3 style={{ ...header }}>Latest News</animated.h3>
      <animated.div className="newsList" style={{ ...news }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Latest */}
          <InstagramEmbed
            url="https://www.instagram.com/p/DBGWC12gdRo/"
            width={328}
          />
          <div className="tweetContainer">
            <TwitterTweetEmbed tweetId={"1833418545213886724"} />
          </div>

          {/* Middle */}
          <InstagramEmbed
            url="https://www.instagram.com/p/DBEZnWoguT_/"
            width={328}
          />
          <div className="tweetContainer">
            <TwitterTweetEmbed tweetId={"1831592588312207716"} />
          </div>

          {/* Oldest */}
          <InstagramEmbed
            url="https://www.instagram.com/p/DBD58fqACZX/"
            width={328}
          />
          <div className="tweetContainer">
            <TwitterTweetEmbed tweetId={"1818566773764964861"} />
          </div>
        </div>
      </animated.div>
    </animated.div>
  );
}

export default News;
