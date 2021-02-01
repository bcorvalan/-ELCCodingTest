import React from "react";
import ProdcutDetail from "./ProdcutDetail";
function List(props) {
  const products = props.products.map((product, i) => {
    return <ProdcutDetail key={i} 
    name ={product.name}
    about ={product.about}
    picture = {product.picture}
    tags = {product.tags}
    active = {product.isActive}
    price = {product.price}
     />;
  });
  return <div className='search__list'>{products.length > 0 ? products : null}</div>;
}
export default List;
