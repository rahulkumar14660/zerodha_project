import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./BuyActionWindow.css";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { watchList } from "../data/data"; 
const BuyActionWindow = ({ uid, isOrderAdded, setIsOrderAdded }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const { closeBuyWindow } = useContext(GeneralContext);

  useEffect(() => {
    const stock = watchList.find((item) => item.name === uid);
    if (stock) {
      setStockPrice(stock.price);
    }
  }, [uid]);

  const handleBuyClick = () => {
    axios
      .post(
        "http://localhost:3002/newOrder",
        {
          name: uid,
          qty: stockQuantity,
          price: stockPrice,
          mode: "BUY",
        },
        {
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log("Buy order response:", response.data);
        if (response.data.status === "error") {
          alert("Order failed: " + response.data.message);
        } else {
          setIsOrderAdded((prev) => !prev);
          closeBuyWindow();
        }
      })
      .catch((error) => {
        console.error("Buy order error:", error);
        alert("Order failed due to network or server error.");
      });
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              value={stockPrice}
              disabled // Disable the price input
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleBuyClick}>
            Buy
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
