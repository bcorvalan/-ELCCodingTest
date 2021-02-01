import React from "react";

function ProdcutDetail(props) {
  const stock = props.active;
  return (
    <div className="content-card">
      <div className="content-card__leftColumn">
        <div className="content-card__thumbnail">
          <img src={props.picture}></img>
        </div>
      </div>
      <div className="content-card__rightColumn">
        <div className="content-card__name">{props.name}</div>
        <div className="content-card__product-description">{props.about}</div>
        {props.tags.map((tag, i) => {
          return <span className="content-card__product-tag"> {tag}</span>;
        })}
        <div className="content-card__product-price">{props.price}</div>
        <div className="content-card__product-isActive">
          {stock === "true" ? <div>In Stock</div> : <div>Out of Stock</div>}
        </div>
        <button className=" button content-card__shop-now">
          <span>Buy</span>
        </button>
      </div>
    </div>
  );
}

export default ProdcutDetail;
