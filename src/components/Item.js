import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false)

  function handleAddCartClick(){
    setInCart((inCart) => !inCart)
    console.log(inCart)
  }


  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "add":"remove"} onClick={handleAddCartClick}>{inCart ? "Remove From Cart" : "Add to Cart"}</button>
    </li>
  );
}

export default Item;
