import axios from "axios";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const Navbar = () => {
  const [cartTotal, setCartTotal] = useState(0);

  const getCartTotal = () => {
    axios
      .get("http://localhost:3001/cart/")
      .then((data) => setCartTotal(data.data.length))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getCartTotal();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Armani
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/"> Home </Link>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <Link to="/cart"> Cart({cartTotal}) </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
