import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Addfunds() {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmailValue] = useState();
  console.log(email);

  const gotoPurchase = () => {
    if (email !== null) {
      navigate("/purchase");
    }
  };
  const { from } = location.state;
  const { balance } = location.state;
  return (
    <div className="cointainer-fluid addfunds">
      <div className="holder">
        <div className="item1">Checkout</div>
        <div className="item2">{balance}</div>
        <div className="item3">
          Payment is Via <span className="orange">BITCOIN</span>
        </div>
        <form action="/purchase">
          {" "}
          <div className="item4">Enter email your Order will be sent to</div>
          <div className="item5">
            <input
              type="email"
              onChange={(e) => setEmailValue(e.target.value)}
              required
              placeholder="Your email"
            />
          </div>
          <div className="item6">
            Log info: Comes with email access online access and owners fullz
            info
          </div>
          <div className="item7">Price: {from}</div>
          <div className="item8">Balance: {balance}</div>
          <div className="item9">
            <button className="proceeed_to_checkout">
              Proceed to Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
