// Shop Item Component

import "../../../../assets/css/ShopItem.css";

function ShopItem(props) {
  return (
    <div className="shopItem">
      <a href={props.itemLink} target="_blank" rel="noreferrer">
        <img src={props.itemIMG} alt={props.itemIMGAlt}></img>
      </a>
      <p className="itemDesc">{props.itemDesc}</p>
      <p className="itemPrice">
        From <span>{props.itemPrice}</span>
      </p>
    </div>
  );
}

export default ShopItem;
