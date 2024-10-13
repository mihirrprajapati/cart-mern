import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

import tshirt1 from "../../public/Image/tshirt-1.jpeg";

export const Home = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    await axios
      .get("http://localhost:3001/item/")
      .then((data) => setItems(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItems();
  }, []);

  const addToCart = async (id, name, price) => {
    await axios
      .post("http://localhost:3001/cart/add", {
        prodName: name,
        price: price,
        qty: 1,
        imgStr: tshirt1,
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          {items &&
            items.map((val, key) => {
              return (
                <div className="col-4" key={key}>
                  <img src={tshirt1} alt="" style={{ width: "250px" }} />
                  <div>{val.prodName}</div>
                  <div>Price: {val.price}</div>
                  <div
                    onClick={() => addToCart(val._id, val.prodName, val.price)}
                  >
                    Add to Cart
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
