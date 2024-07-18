// News Component

import "./News.css";
import { TwitterTimelineEmbed } from "react-twitter-embed";
// import InstagramEmbed from "react-instagram-embed";
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
      <animated.div className="newsList" style={{ ...news }}></animated.div>
      {/* <iframe
        title="fb"
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fgroups%2F819820298102783%2F&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        style={{ width: "500px", height: "500px", border: "2px solid black" }}
        // allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe> */}
      <a
        class="twitter-timeline"
        data-width="500"
        data-height="500"
        data-theme="dark"
        href="https://twitter.com/FCShardlow?ref_src=twsrc%5Etfw"
      >
        Tweets by FCShardlow
      </a>{" "}
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      ></script>
      <div className="twitterContainer">
        <TwitterTimelineEmbed sourceType="profile" screenName="FC Shardlow" />
      </div>
    </animated.div>
  );
}

export default News;
