// News Component

import "../../../assets/css/News.css";
import { InstagramEmbed } from "react-social-media-embed";
import { useSpring, animated } from "react-spring";
import { useEffect, useState } from "react";

function News({ id }) {
  const [instagramHREF1, setInstagramHREF1] = useState("");
  const [instagramHREF2, setInstagramHREF2] = useState("");
  const [instagramHREF3, setInstagramHREF3] = useState("");

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

  function extractInstagramPostID(url) {
    const urlPart = url.split("/");
    const postID =
      urlPart.indexOf("p") !== -1
        ? urlPart.indexOf("p") + 1
        : urlPart.indexOf("reel") + 1;
    return urlPart[postID] || null;
  }

  async function loadInstagramURLData() {
    try {
      const instagramResponse = await fetch(
        // "http://localhost:3000/instagramData",
        "https://shardlow-st-james.onrender.com/instagramData",
        {
          method: "GET",
          credentials: "include",
        }
      ).then((data) => {
        return data.json();
      });
      console.log(extractInstagramPostID(instagramResponse[9]));

      // I only want to set this to index 9 if the previous extract is "C89hTHvtibL", basically I want to setInstagramHREF1 to the next one after above and so forth. Could do an if extractInstaPost = "C89hTHvtibL" then setInstaHref to extract+1?????
      setInstagramHREF1(extractInstagramPostID(instagramResponse[9]));
      setInstagramHREF2(extractInstagramPostID(instagramResponse[10]));
      setInstagramHREF3(extractInstagramPostID(instagramResponse[11]));
    } catch (error) {
      console.error("Error fetching data client side", error);
    }
  }

  useEffect(() => {
    console.log("Instagram data loading");
    loadInstagramURLData();
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
          key={id}
        >
          {/* Latest */}
          {instagramHREF1 && (
            <InstagramEmbed
              url={`https://www.instagram.com/p/${instagramHREF1}/`}
              width={328}
            />
          )}

          {/* Middle */}
          {instagramHREF2 && (
            <InstagramEmbed
              url={`https://www.instagram.com/p/${instagramHREF2}/`}
              width={328}
            />
          )}

          {/* Oldest */}
          {instagramHREF3 && (
            <InstagramEmbed
              url={`https://www.instagram.com/p/${instagramHREF3}/`}
              width={328}
            />
          )}
        </div>
      </animated.div>
    </animated.div>
  );
}

export default News;
