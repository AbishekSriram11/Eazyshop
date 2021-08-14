import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";


function Product({ id, title, image, price, rating }) {
  const [{basket},dispatch] = useStateValue(); 
  const addToBasket =() => {
    dispatch({
          type: 'ADD_TO_BASKET',
          item: {
            id,
            title,
            image,
            price,
            rating,

          },
    });
  };

  return  (
    <div className="product">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs.</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>🌟</p>
            ))}
        </div>
      <img src = {image}
      alt=""/>  
      <button onClick={addToBasket}>Add to basket</button>
      </div>
  );
}

export default Product;