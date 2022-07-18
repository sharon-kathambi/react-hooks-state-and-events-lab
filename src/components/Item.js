import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(true)

  function handleAddCartClick(){
    setInCart(!inCart)
  }


  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddCartClick}>{inCart ? "Add to cart":"Remove From Cart"}</button>
    </li>
  );
}

export default Item;
