
import React from "react";
import { useStateValue } from "../StateProvider";
import "./product.css";
import { v4 as uuidv4 } from 'uuid';

function Product({ id, title, image, price, rating }) {
 
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };


  return (
    <div className="product">
        <div className="product__info">
            <p>{title}</p>
            <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
            </p>
            <div className="product__rating">
            {Array(rating)
                .fill()
                .map((_, i) => (
                <p key={uuidv4()}>🌟</p>
                ))}
            </div>
        </div>

        <img src={image} alt="" />

        <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;