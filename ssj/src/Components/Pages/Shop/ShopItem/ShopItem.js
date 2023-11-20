// Shop Item Component

import "./ShopItem.css";

function ShopItem(props) {
  return (
    <div className="shopItem">
      <img src={props.itemIMG} alt={props.itemIMGAlt}></img>
      <p className="itemDesc">{props.itemDesc}</p>
      <p className="itemPrice">{props.itemPrice}</p>
      <a href={props.itemLink} target="_blank" rel="noreferrer">
        External Link
      </a>
    </div>
  );
}

export default ShopItem;
