// Shop Component

import "./Shop.css";
import ShopItem from "./ShopItem/ShopItem";
// Imported Images
import parkaJacket from "../../../IMG/ssj_parka_jacket.jpg";
import rainJacket from "../../../IMG/ssj_rain_jacket.jpg";

function Shop() {
  const shopItems = [
    {
      id: 1,
      image: parkaJacket,
      description: "Shardlow Parka Jacket",
      price: "From £39.99 GBP",
      link: "https://kelmeteamwear.co.uk/products/shardlow-parka-jacket",
    },
    {
      id: 2,
      image: rainJacket,
      description: "Shardlow Rain Jacket",
      price: "From £23.99 GBP",
      link: "https://kelmeteamwear.co.uk/products/shardlow-rain-jacket",
    },
  ];

  return (
    <div className="shop">
      <h3>Welcome to our shop</h3>
      <p>*Links take you to external site</p>
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
  );
}

export default Shop;
