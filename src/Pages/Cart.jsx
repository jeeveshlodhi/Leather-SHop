import React, { useEffect, useState } from "react";
import CartComponent from "../Components/CartComponent";

const Cart = ({ product }) => {
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    let items = JSON.parse(localStorage.getItem("items"));
    let item = [];
    let ids = [];
    let total = 0;

    for (let i = 0; i < items.length; i++) {
      let temp = JSON.parse(items[i]);
      if (!ids.includes(temp.id)) {
        ids.push(temp.id);
        // console.log(temp)
        total = total + temp.price*temp.value;
        item.push(temp);
      }
    }
    // console.log(total)
    setCartTotal(() => total);
    setCart(() => item);
  }, []);

  const onChangeQuantity = (id, prevQty, qty) => {
    const prevValue = parseInt(prevQty);
    const currValue = parseInt(qty)
    if (currValue >= 1) {
      let storedItems = JSON.parse(localStorage.getItem("items"));
      let arr = [];
      let total = 0
      
      for (let i = 0; i < storedItems.length; i++) {
        let temp = JSON.parse(storedItems[i]);
        if (temp.id !== id) {
          arr.push(JSON.stringify(temp));
        } else {
          temp.value = currValue;
          arr.push(JSON.stringify(temp));
        }
        total = total+temp.price*temp.value
      }
      setCartTotal(() => total);
      localStorage.setItem("items", JSON.stringify(arr));
    }
  };

  const onRemoveProduct = (id) => {
    setCart((curr) => curr.filter((item) => item.id !== id));
    let storedItems = JSON.parse(localStorage.getItem("items"));
    let arr = [];
    for (let i = 0; i < storedItems.length; i++) {
      let temp = JSON.parse(storedItems[i]);
      if (temp.id !== id) {
        arr.push(JSON.stringify(temp));
      } else {
        setCartTotal(() => cartTotal - temp.price);
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

        <span className="count">{cart.length} items in the bag</span>
      </section>
      <section>
        {cart.length > 0 ? (
          cart.map((c, i) => (
            <CartComponent
              key={i}
              products={product}
              id={c.id}
              onChangeProductQuantity={onChangeQuantity}
              onRemoveProduct={onRemoveProduct}
              qty={c.value}
            />
          ))
        ) : (
          <div></div>
        )}
      </section>
      <section className="cart-total">
        Cart Total <span>₹ {cartTotal}</span>
      </section>
    </div>
  );
};

export default Cart;
