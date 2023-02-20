import React, { useState } from "react";

const ProductCard = ({ name, price, img, id, category }) => {
  const [hover, setHover] = useState("none");

  const handleClick = () => {
    if(localStorage.getItem('items')===null){
      let items = []
      let obj = {
        id: id,
        name:name,
      }
      items.push(JSON.stringify(obj))
      localStorage.setItem('items', JSON.stringify(items))
    }
    else{
      console.log(localStorage.getItem('items'))
      let storedItems = JSON.parse(localStorage.getItem('items'))
      let obj = {
        id: id,
        name:name,
      }
      storedItems.push(JSON.stringify(obj))
      localStorage.setItem('items', JSON.stringify(storedItems))
    }
  }

  return (
    <div className="productCard">
      <img
        src={img}
        alt={name}
        onMouseEnter={() => setHover("block")}
        onMouseLeave={() => setHover("none")}
        style={hover === 'block'? {opacity: 0.5}: {opacity:1}}
      />
      <button
        style={{ display: hover }}
        onMouseEnter={() => setHover("block")}
        onMouseLeave={() => setHover("none")}
        onClick={handleClick}
      >
        Add to Cart
      </button>
      <p>{name}</p>
      <p>₹ {price}</p>
    </div>
  );
};

export default ProductCard;
