import React from "react";
import ProductCard from "../Components/ProductCard";

const Boots = ({ product, banner }) => {
  return (
    <div className="product">
      <img src={banner} alt="" />
      <div className="product-wrapper">
        {product.map((item, idx) => {
          return (
            <ProductCard
              key={idx}
              id={item.id}
              name={item.name}
              price={item.price}
              img={item.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Boots;
