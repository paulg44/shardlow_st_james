// Shop Component

import "./Shop.css";
import ShopItem from "./ShopItem/ShopItem";
import { useSpring, animated } from "react-spring";
// Imported Images
import parkaJacket from "../../../IMG/ShardlowParka.webp";
import rainJacket from "../../../IMG/ShardlowRain.webp";
import linceZip from "../../../IMG/ShardlowLinceZip_183aea43-8cef-4c27-a316-d30369755bd5.webp";
import trainingTee from "../../../IMG/ShardlowLinceTee.webp";
import trainingTop from "../../../IMG/ShardlowGlobal.webp";
import polo from "../../../IMG/ShardlowNavyPolo.webp";
import pants from "../../../IMG/ShardlowPant.webp";
import homeKit from "../../../IMG/ShardlowHome.webp";
import awayKit from "../../../IMG/ShardlowAway.webp";
import shorts from "../../../IMG/ShardlowShort.webp";
import jomaTee from "../../../IMG/ssj_joma_tee.jfif";
import jomaHalfZip from "../../../IMG/ssj_joma_half_zip.jfif";
import jomaHoodie from "../../../IMG/ssj_joma_hoodie.jfif";
import jomaTracksuit from "../../../IMG/ssj_joma_tracksuit.jfif";
import jomaPolo from "../../../IMG/ssj_joma_polo.jfif";
import jomaBottoms from "../../../IMG/ssj_joma_bottoms.jfif";
import jomaRainJacket from "../../../IMG/ssj_joma_rain_jacket.jfif";
import jomaSoftShell from "../../../IMG/ssj_joma_softshell_jacket.jfif";

function Shop() {
  const shopItems = [
    {
      id: 1,
      image: parkaJacket,
      description: "Shardlow Parka Jacket",
      price: "From £39.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-parka-jacket",
    },
    {
      id: 2,
      image: rainJacket,
      description: "Shardlow Rain Jacket",
      price: "From £23.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-rain-jacket",
    },
    {
      id: 3,
      image: linceZip,
      description: "Shardlow Lince Jacket",
      price: "From £23.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-lince-jacket?_pos=1&_sid=8e5076216&_ss=r",
    },
    {
      id: 4,
      image: trainingTee,
      description: "Shardlow Training Tee",
      price: "From £14.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-training-tee",
    },
    {
      id: 5,
      image: trainingTop,
      description: "Shardlow 1/4 Zip Training Top",
      price: "From £24.00",
      link: "https://kelmeteamwear.co.uk/products/shardlow-1-4-zip-training-top",
    },
    {
      id: 6,
      image: polo,
      description: "Shardlow Polo(3 Colour Options)",
      price: "From £13.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-polo-navy",
    },
    {
      id: 7,
      image: pants,
      description: "Shardlow Training Pant",
      price: "From £14.49",
      link: "https://kelmeteamwear.co.uk/products/shardlow-training-pant",
    },
    {
      id: 8,
      image: homeKit,
      description: "Shardlow Home Kit",
      price: "From £24.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-home-set",
    },
    {
      id: 9,
      image: awayKit,
      description: "Shardlow Away Kit",
      price: "From £24.99",
      link: "https://kelmeteamwear.co.uk/products/copy-of-shardlow-away-set",
    },
    {
      id: 10,
      image: shorts,
      description: "Shardlow Training Short",
      price: "From £6.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-training-short",
    },
    {
      id: 11,
      image: jomaTee,
      description: "Shardlow Academy IV Training Tee",
      price: "From £16.50",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-joma-academy-iv-training-tee",
    },
    {
      id: 12,
      image: jomaHalfZip,
      description: "Shardlow Champion IV Half Zip",
      price: "From £27.75",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-joma-champion-vi-half-zip",
    },
    {
      id: 13,
      image: jomaHoodie,
      description: "Shardlow Academy IV Full Zip Hoodie",
      price: "From £35.35",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-joma-academy-iv-full-zip-hoody",
    },
    {
      id: 14,
      image: jomaTracksuit,
      description: "Shardlow Champion IV Tracksuit",
      price: "From £36.75",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-joma-champion-vi-tracksuit",
    },
    {
      id: 15,
      image: jomaPolo,
      description: "Shardlow Champion IV Polo (slim fit)",
      price: "From £19.50",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-champion-vi-polo-shirt-slim-fit",
    },
    {
      id: 16,
      image: jomaBottoms,
      description: "Shardlow Champion IV Skinny Bottoms",
      price: "From £19.25",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-champion-vi-skinny-bottoms",
    },
    {
      id: 17,
      image: jomaRainJacket,
      description: "Shardlow Iris Rain Jacket",
      price: "From £18.75",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-joma-iris-rain-jacket",
    },
    {
      id: 18,
      image: jomaSoftShell,
      description: "Shardlow Berna Sof Shell Jacket",
      price: "From £51.00",
      link: "https://www.eurosoccercompany.com/shardlow-st-james-club-shop/shardlow-sj-joma-berna-soft-shell-jacket-slim-fit",
    },
  ];

  // Animation
  const fadeIn = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1500" },
    delay: 250,
  });

  const p = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1600" },
    delay: 500,
  });

  const items = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { duration: "1800" },
    delay: 750,
  });

  return (
    <div className="shop">
      <animated.h2 style={{ ...fadeIn }}>Welcome to our shop</animated.h2>
      <animated.p className="shopPageInfo" style={{ ...p }}>
        *Click item image to take you to external site (Kelme or Euro Soccer)
      </animated.p>
      <animated.div className="shopItems" style={{ ...items }}>
        {shopItems.map((item) => (
          <ShopItem
            key={item.id}
            itemIMG={item.image}
            itemDesc={item.description}
            itemPrice={item.price}
            itemLink={item.link}
          />
        ))}
      </animated.div>
    </div>
  );
}

export default Shop;
