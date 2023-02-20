import React, { useEffect, useState } from "react";
import CartComponent from "../Components/CartComponent";

const Cart = ({ product }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("items"));
    let item = [];
    let ids = [];
    for (let i = 0; i < items.length; i++) {
      let temp = JSON.parse(items[i]);
      if (!ids.includes(temp.id)) {
        ids.push(temp.id);
        item.push(temp);
      }
    }
    console.log(item);
    setCart(() => item);
  }, []);

  const onChangeQuantity = () => {};

  const onRemoveProduct = (id) => {
    setCart((curr) => curr.filter((item) => item.id !== id));
    let storedItems = JSON.parse(localStorage.getItem("items"));
    let arr = [];
    for (let i = 0; i < storedItems.length; i++) {
      let temp = JSON.parse(storedItems[i]);
      if (temp.id !== id) {
        arr.push(JSON.stringify(temp));
      }
    }
    localStorage.setItem("items", JSON.stringify(arr));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      <section className="cart-head">
        <ul className="breadcrumb">
          <li>Home &nbsp;</li>
          <li>/ Shopping Cart</li>
        </ul>

        <span className="count">{} items in the bag</span>
      </section>
      <section>
        {cart.length > 0 ? (
          cart.map((c, i) => (
            <CartComponent
              products={product}
              id={c.id}
              onChangeProductQuantity={onChangeQuantity}
              onRemoveProduct={onRemoveProduct}
            />
          ))
        ) : (
          <div></div>
        )}
      </section>
    </div>
  );
};

export default Cart;
