import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import axios from "axios";

export const Cart = () => {
  const [items, setItems] = useState([]);

  const getItems = async () => {
    await axios
      .get("http://localhost:3001/cart/")
      .then((data) => setItems(data.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getItems();
  }, []);

  const removeItem = async (id) => {
    await axios
      .delete(`http://localhost:3001/cart/remove/${id}`)
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));

    getItems();
  };

  const decQty = async (id, q) => {
    let newQty = q - 1;
    await axios
      .patch(`http://localhost:3001/cart/qty/${id}`, { qty: newQty })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));

    getItems();
  };

  const incQty = async (id, q) => {
    let newQty = q + 1;
    await axios
      .patch(`http://localhost:3001/cart/qty/${id}`, { qty: newQty })
      .then((data) => console.log(data.data))
      .catch((err) => console.log(err));

    getItems();
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Image</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {items &&
              items?.map((val, key) => {
                return (
                  <tr>
                    <td>
                      <img src={val.imgStr} width="150px" alt="" />
                    </td>
                    <td>{val.prodName}</td>
                    <td>{val.price}</td>
                    <td>
                      <button onClick={() => decQty(val._id, val.qty)}>
                        -
                      </button>{" "}
                      {val.qty}
                      <button onClick={() => incQty(val._id, val.qty)}>
                        +
                      </button>
                    </td>
                    <td onClick={() => removeItem(val._id)}>❌</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};
