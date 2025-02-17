// Shop Component

import "../../../assets/css/Shop.css";
import ShopItem from "./ShopItem/ShopItem";
import { useSpring, animated } from "react-spring";
// Imported Images
import parkaJacket from "../../../assets/IMG/ShardlowParkanew.webp";
import rainJacket from "../../../assets/IMG/ShardlowRainnew.webp";
import linceZip from "../../../assets/IMG/ShardlowLinceZip_183aea43-8cef-4c27-a316-d30369755bd5new.webp";
import trainingTee from "../../../assets/IMG/ssj_traint_tee_2.webp";
import trainingTop from "../../../assets/IMG/ShardlowGlobalnew.webp";
import polo from "../../../assets/IMG/ShardlowNavyPolonew.webp";
import pants from "../../../assets/IMG/Shardlowpant (1)new.webp";
import homeKit from "../../../assets/IMG/ssjhomekit.webp";
import awayKit from "../../../assets/IMG/ssjawaykit.webp";
import shorts from "../../../assets/IMG/new.webp";
import newTrainTop from "../../../assets/IMG/ShardlownavyhalfzipNew.webp";
import warriorTrainTop from "../../../assets/IMG/ShardlowwarriorhalfzipNew.webp";

function Shop() {
  const shopItems = [
    {
      id: 1,
      image: parkaJacket,
      description: "Shardlow Parka Jacket",
      price: "£57.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-parka-jacket",
    },
    {
      id: 2,
      image: rainJacket,
      description: "Shardlow Rain Jacket",
      price: "£26.49",
      link: "https://kelmeteamwear.co.uk/products/shardlow-rain-jacket",
    },
    {
      id: 3,
      image: newTrainTop,
      description: "Shardlow New 1/4 Zip Training Top",
      price: "£32.00",
      link: "https://kelmeteamwear.co.uk/products/shardlow-new-navy-1-4-zip-training-top",
    },
    {
      id: 4,
      image: warriorTrainTop,
      description: "Shardlow Warrior 1/4 Zip Top",
      price: "£66.00",
      link: "https://kelmeteamwear.co.uk/products/shardlow-new-navy-1-4-zip-training-top-copy",
    },
    {
      id: 5,
      image: linceZip,
      description: "Shardlow Lince Jacket",
      price: "£26.49",
      link: "https://kelmeteamwear.co.uk/products/shardlow-lince-jacket?_pos=1&_sid=8e5076216&_ss=r",
    },
    {
      id: 6,
      image: trainingTee,
      description: "Shardlow Training Tee",
      price: "£25.00",
      link: "https://kelmeteamwear.co.uk/products/shardlow-warrior-training-t-shirt",
    },
    {
      id: 7,
      image: trainingTop,
      description: "Shardlow 1/4 Zip Training Top",
      price: "£26.00",
      link: "https://kelmeteamwear.co.uk/products/shardlow-1-4-zip-training-top",
    },
    {
      id: 8,
      image: polo,
      description: "Shardlow Polo(3 Colour Options)",
      price: "£16.49",
      link: "https://kelmeteamwear.co.uk/products/shardlow-polo-navy",
    },
    {
      id: 9,
      image: pants,
      description: "Shardlow Training Pant",
      price: "£19.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-training-pant",
    },
    {
      id: 10,
      image: homeKit,
      description: "Shardlow Home Kit",
      price: "£24.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-home-set",
    },
    {
      id: 11,
      image: awayKit,
      description: "Shardlow Away Kit",
      price: "£24.99",
      link: "https://kelmeteamwear.co.uk/products/copy-of-shardlow-away-set",
    },
    {
      id: 12,
      image: shorts,
      description: "Shardlow Training Short",
      price: "£6.49",
      link: "https://kelmeteamwear.co.uk/products/shardlow-training-short",
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
        *Click item image to take you to external site Kelme
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
