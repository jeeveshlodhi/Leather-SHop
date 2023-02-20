import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import Boots from "./Pages/Boots";
import bootBanner from "./assets/shoe_banner.webp";
import boot1 from "./assets/boot1.webp";
import boot2 from "./assets/boot2.webp";
import boot3 from "./assets/boot3.webp";
import boot4 from "./assets/boot4.webp";
import walletBanner from "./assets/wallet_banner.webp";
import wallet1 from "./assets/wallet1.jpeg";
import wallet2 from "./assets/wallet2.jpeg";
import wallet3 from "./assets/wallet3.jpeg";
import wallet4 from "./assets/wallet4.jpeg";
import beltBanner from "./assets/belt_banner.webp";
import belt1 from "./assets/belt1.webp";
import belt2 from "./assets/belt2.webp";
import belt3 from "./assets/belt3.jpg";
import belt4 from "./assets/belt4.png";
import Cart from "./Pages/Cart";
const products = [
  {
    id: 1,
    category: "boots",
    name: "Boots 2",
    price: 10000,
    img: boot1,
  },
  {
    id: 2,
    category: "boots",
    name: "Loafers",
    price: 3000,
    img: boot2,
  },
  {
    id: 3,
    category: "boots",
    name: "Boots 3",
    price: 5000,
    img: boot3,
  },
  {
    id: 4,
    category: "boots",
    name: "Boots",
    price: 3000,
    img: boot4,
  },
  {
    id: 5,
    category: "wallet",
    name: "Wallet Peanut",
    price: 399,
    img: wallet1,
  },
  {
    id: 6,
    category: "wallet",
    name: "Cheque Book Holder - Panache",
    price: 498,
    img: wallet2,
  },
  {
    id: 7,
    category: "wallet",
    name: "Passport Holder - Coal",
    price: 499,
    img: wallet3,
  },
  {
    id: 8,
    category: "wallet",
    name: "Kara Men Black Artificial Leather Wallet",
    price: 499,
    img: wallet4,
  },
  {
    id: 9,
    category: "belt",
    name: "Smoky Mountain Belt",
    price: 499,
    img: belt1,
  },
  {
    id: 10,
    category: "belt",
    name: "Mt. Pisgah Titanium Belt",
    price: 598,
    img: belt2,
  },
  {
    id: 11,
    category: "belt",
    name: "Caraway Mountain Belt",
    price: 899,
    img: belt3,
  },
  {
    id: 12,
    category: "belt",
    name: "The Site Manager Belt",
    price: 699,
    img: belt4,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/boots"
          element={
            <Boots
              product={products.filter((el) => el.category === "boots")}
              banner={bootBanner}
            />
          }
        />
        <Route
          path="/wallet"
          element={
            <Boots
              product={products.filter((el) => el.category === "wallet")}
              banner={walletBanner}
            />
          }
        />
        <Route
          path="/belts"
          element={
            <Boots
              product={products.filter((el) => el.category === "belt")}
              banner={beltBanner}
            />
          }
        />
        <Route path='/cart' element={<Cart product = {products}/>} />
      </Routes>
    </div>
  );
}

export default App;
