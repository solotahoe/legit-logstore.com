import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CopyToClipboard } from "react-copy-to-clipboard";

export default function Purchase() {
  const [toggle, setToggle] = useState(true);
  const purchase_order = [
    "b0acc10-fgh63-33d4-xta5n",
    "c0acc10-fgjh3-hhd4-ay5n",
    "g0acc10-f856m3-ffd4-hha5n",
    "t0acc10-f349m3-ht6d-rra5n",
    "c0acc10-ferm3-dd4-vt5n",
    "n0acc10-ert9m3-asfd4-ara5n",
    "x0acc10-ge9m3-agd4-rga5n",
  ];
  return (
    <div className="cointainer-fluid addfunds">
      <div className="holder">
        <div className="item1">Checkout</div>
        <div className="item2">
          <span className="loadingGif">
            <img src="loading.gif" alt="loadingGif" />
          </span>
          awaiting payment
        </div>
        <div className="item3">
          0 <span className="orange">/0.001757787</span> BTC
        </div>{" "}
        <div className="item4">
          <img src="bit.png" />
        </div>
        <div className="item8">
          You are paying with <span className="orange">BITCOIN</span>
        </div>
        <div className="item6">
          ORDER ID :{" "}
          {purchase_order[Math.floor(Math.random() * purchase_order.length)]}
        </div>
        <div className="itemScan_copy">
          <button className="copy" onClick={() => setToggle(true)}>
            copy
          </button>
          <button className="scan" onClick={() => setToggle(false)}>
            Scan
          </button>
        </div>
        <div className="item8">
          Send exactly <span className="orange">0.00175787</span> BTC
        </div>
        <div className="code_qrcode">
          {toggle ? (
            <div className="addressFragemnt">
              <input
                type="text"
                className="input_scan_copy"
                value="35KdJVgYQFiKd1sHwJgo8g5jLHKC6HSFy9"
              />
              <CopyToClipboard text="35KdJVgYQFiKd1sHwJgo8g5jLHKC6HSFy9">
                <i className="fa fa-clone" aria-hidden="true"></i>
              </CopyToClipboard>
            </div>
          ) : (
            <img src="code.jpeg" alt="qrcode" />
          )}
        </div>
        <div className="item10">Got An issue? Email us</div>
      </div>
    </div>
  );
}
