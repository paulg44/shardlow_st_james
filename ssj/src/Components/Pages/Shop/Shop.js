// Shop Component

import "./Shop.css";
import ShopItem from "./ShopItem/ShopItem";
// Imported Images
import parkaJacket from "../../../IMG/ShardlowParka.webp";
import rainJacket from "../../../IMG/ShardlowRain.webp";
import homeKit from "../../../IMG/ssj_homeset.jpg";

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
      image: homeKit,
      description: "Shardlow Home Kit",
      price: "From £24.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-rain-jacket",
    },
    {
      id: 4,
      image: homeKit,
      description: "Shardlow Home Kit",
      price: "From £24.99",
      link: "https://kelmeteamwear.co.uk/products/shardlow-rain-jacket",
    },
  ];

  return (
    <div className="shop">
      <h3>Welcome to our shop</h3>
      <p>*Links take you to external site</p>
      <div className="shopItems">
        {shopItems.map((item) => (
          <ShopItem
            key={item.id}
            itemIMG={item.image}
            itemDesc={item.description}
            itemPrice={item.price}
            itemLink={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Shop;
