// News Component

import "./News.css";
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
          <InstagramEmbed
            url="https://www.instagram.com/reel/C_YtayuADYe/"
            width={328}
          />
          <div className="tweetContainer">
            <TwitterTweetEmbed tweetId={"1830704329721774267"} />
          </div>
          <InstagramEmbed
            url="https://www.instagram.com/p/C-DOQOTNhki/"
            width={328}
          />
          <div className="tweetContainer">
            <TwitterTweetEmbed tweetId={"1831592588312207716"} />
          </div>
          {/* <InstagramEmbed
            url="https://www.https://www.instagram.com/p/C-X6RJLtguC/"
            width={328}
          />
          <InstagramEmbed
            url="https://www.https://www.instagram.com/reel/C_SV8VnAcED/"
            width={328}
          />
          <InstagramEmbed
            url="https://www.https://www.instagram.com/reel/C_NjvVRA902/"
            width={328}
          /> */}
        </div>
      </animated.div>
    </animated.div>
  );
}

export default News;
