import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import "./cashapp.css";

export default function Paypalaccount() {
  const [accordionWidth, setAccordionWidth] = useState(true);
  const [accordionWidthSmall, setAccordionWidthSmall] = useState(true);
  const [showDisplay, setshowDisplay] = useState(false);
  const [showDisplaysc, setshowDisplaysc] = useState(false);
  const [showDisplaysc2, setshowDisplaysc2] = useState(false);
  const navigate = useNavigate();
  const logout = async () => {
    navigate("/");
  };
  return (
    <div>
      <div
        className="cointainer-fluid coinbase"
        style={{ width: accordionWidth ? "99%" : "100%" }}
      >
        <div className="row">
          <header className="header-content">
            <div className="imgHam">
              <Link to="/coinbase">
                {" "}
                <img
                  className="coinbaseLogo"
                  src="/logo.png"
                  alt="headerLogos"
                />
              </Link>
              <span
                className="hambergerbars"
                onClick={() => {
                  setAccordionWidth(!accordionWidth);
                }}
              >
                {" "}
                <i className="fa fa-bars bigScreens" aria-hidden="true"></i>
              </span>
              <span
                className="hambergerbars smallerscreens"
                onClick={() => {
                  setAccordionWidthSmall(!accordionWidthSmall);
                }}
              >
                {" "}
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>
            </div>

            <div className="addbal">
              <span className="badgere badge-dangere">
                <Link
                  to="/Addfunds"
                  style={{ textDecoration: "none", color: "#ffff" }}
                >
                  {" "}
                  <b>Add Balance</b>{" "}
                </Link>
              </span>

              <img
                src="usericon.png"
                className="usericonImg"
                alt="usericon"
                height={"50px"}
                onClick={() => setshowDisplay(!showDisplay)}
              />
              <i
                className="fa fa-arrow-down arowDown"
                aria-hidden="true"
                onClick={() => setshowDisplay(!showDisplay)}
              ></i>
              <div
                className="profilehideShow"
                style={{ opacity: showDisplay ? "1" : "0" }}
              >
                <div className="welcomeLem">Welcome : Lem</div>
                <div className="submitTicket">
                  {" "}
                  <li>
                    {" "}
                    <Link
                      className="submitLinkHover"
                      to="/Support"
                      style={{ color: "#3ac47d" }}
                    >
                      <i class="fa fa-envelope-o" aria-hidden="true"></i>
                      submit ticket{" "}
                    </Link>
                  </li>{" "}
                </div>
                <div className="logoutBtn">
                  {" "}
                  <button onClick={logout}>Logout</button>
                </div>
              </div>
            </div>
            <div
              className="smallerscreensMn"
              onClick={() => setshowDisplaysc2(!showDisplaysc2)}
            >
              <div className="mcchild"></div>
              <div className="mcchild"></div>
              <div className="mcchild"></div>
            </div>
          </header>
        </div>

        <div className="row">
          <div
            className="addBalsmc"
            style={{
              opacity: showDisplaysc2 ? "1" : "0",
              PointerEvent: showDisplaysc2 ? "all" : "none",
            }}
          >
            <span className="addbalbtnsmc">
              <Link
                to="/Addfunds"
                style={{
                  textDecoration: "none",
                  color: "#ffff",
                  cursor: "pointer",
                }}
              >
                {" "}
                <b>Add Balance</b>{" "}
              </Link>
            </span>
            <img
              src="/usericon.png"
              className="usrsmalsc"
              alt="usericon"
              height={"50px"}
              onClick={() => setshowDisplaysc(!showDisplaysc)}
            />
            <i
              className="fa fa-arrow-down arowDsc"
              aria-hidden="true"
              onClick={() => setshowDisplaysc(!showDisplaysc)}
            ></i>
          </div>
          {/* start of small welcome lem */}
          <div
            className="profilehideShowsc"
            style={{
              opacity: showDisplaysc ? "1" : "0",
              PointerEvent: showDisplaysc ? "all" : "none",
            }}
          >
            <div className="welcomeLem">Welcome : Lem</div>
            <div className="submitTicket">
              {" "}
              <li>
                {" "}
                <Link
                  className="submitLinkHover"
                  to="/Support"
                  style={{ color: "#3ac47d" }}
                >
                  <i class="fa fa-envelope-o" aria-hidden="true"></i>
                  submit ticket{" "}
                </Link>
              </li>{" "}
            </div>
            <div className="logoutBtn">
              {" "}
              <button onClick={logout}>Logout</button>
            </div>
          </div>
          {/* end of small welcome lem */}

          <div
            className={
              accordionWidthSmall
                ? "hideaccordion"
                : "accordion accordion_menu col-md-2"
            }
            id="accordionExample"
            style={{ width: accordionWidth ? "18%" : "0", marginTop: "100px" }}
          >
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    <i className="fa fa-university" aria-hidden="true"></i>Logs{" "}
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseFour"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/cashappaccount">
                    <li>paypal Account</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/paypalaccount">
                    <li>Paypal Account</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/shopwithscrip">
                    <li>Shopwithscrip</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/zelleaccount">
                    <li>Zelle Account</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/westernunion">
                    <li>Westernunion</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    <i className="fa fa-credit-card-alt" aria-hidden="true"></i>
                    CREDIT CARDS{" "}
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseFive"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/visacards">
                    <li>Visa Cards</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/mastercards">
                    <li>Master Cards</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/amexcards">
                    <li>Amex Cards</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/discovercards">
                    <li>Discover Cards</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    <i className="fa fa-credit-card" aria-hidden="true"></i>PUA
                    $ FULIZ
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseSix"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link style={{ textDecoration: "none" }} to="/newyorkpua">
                    <li>Newyork Pua</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/newyorkfuliz">
                    <li>Newyork Fuliz</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/idahopua">
                    <li>Idaho Pua</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/idahofuliz">
                    <li>Idaho Fuliz</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/texaspua">
                    <li>Texas Pua</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/texasfuliz">
                    <li>Texas Fuliz</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/illionspua">
                    <li>Illions Pua</li>
                  </Link>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="card-header" id="headingThree">
                <h2 className="mb-0">
                  <button
                    className="btn btn-link collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    <i className="fa fa-address-book-o" aria-hidden="true"></i>
                    ACCOUNTS
                    <i className="fa fa-arrow-down" aria-hidden="true"></i>{" "}
                  </button>
                </h2>
              </div>
              <div
                id="collapseSeven"
                className="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div className="card-body">
                  <Link
                    style={{ textDecoration: "none" }}
                    to="/blockchainaccount "
                  >
                    <li>Blockchanin wallet</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/coinbasewallet">
                    <li>Coinbase wallet</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/paxfull">
                    <li>paxfull</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/cpanleAccount">
                    <li>Cpanel Account</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/rdpaccount">
                    <li>RDP Account</li>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div
            className="thirdSection with_tables col-md-9"
            style={{ width: accordionWidth ? "1000px" : "1200px" }}
          >
            <div className="inner_div_table">
              <div className="udpated">USA Paypal</div>
              <div className="goodForCC">
                Paypal Logs Good for online shopping and Transfers all clean. I
                do paypal transfers aswell Contact ME dollarmakers69@gmail.com
              </div>
              <div>
                <table className="table table-bordered table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Logs Name</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">Includes</th>
                      <th scope="col">Balance</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buy Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$1,111.11</td>
                      <td>100$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$1,1111.11", balance: "$100" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$1,530.33</td>
                      <td>150$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$50", balance: "$1,530.33" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$1,732.75</td>
                      <td>150$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$150", balance: "$1,732.75" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$1,950.89.53</td>
                      <td>190$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$190", balance: "$1,95089.53" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$2,100.42</td>
                      <td>200$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$200", balance: "$2,100.42" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$2,603.32</td>
                      <td>250$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$250", balance: "$2,603.32" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$2,923.74</td>
                      <td>290$</td>
                      <td>
                        <label className="badge badge-danger blink_me">
                          sold out
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$290", balance: "$2,923.74" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$3,000.00</td>
                      <td>390$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$390", balance: "$3,000.88" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$3,2227.01</td>
                      <td>320$</td>
                      <td>
                        <label className="badge badge-danger blink_me">
                          sold out
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$320", balance: "$3,227.01" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$3,503.42</td>
                      <td>330$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$330", balance: "$3,503.42" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$3,974.90</td>
                      <td>350$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$350", balance: "$3,974.90" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$4,000.43</td>
                      <td>380$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$380", balance: "$4,000.43" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$4,217.76.90</td>
                      <td>400$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$400", balance: "$4,217.76" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$4,500.76</td>
                      <td>420$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$420", balance: "$4,500.76" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$5,275.43</td>
                      <td>450$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$450", balance: "$5,275.43" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$5,474.35.57</td>
                      <td>480$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$480", balance: "$5,474.57" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$5,853.57</td>
                      <td>510$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$510", balance: "$5,853.57" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$5,994.32</td>
                      <td>528$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$528", balance: "$5,994.32" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,002.05.57</td>
                      <td>550$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$550", balance: "$6.032.75" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,144.39</td>
                      <td>600$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$600", balance: "$56,144.39" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,144.39</td>
                      <td>600$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$600", balance: "$6,144.39" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,400.63</td>
                      <td>645$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$645", balance: "$6,400.63" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,400.63</td>
                      <td>645$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$645", balance: "$6,400.63" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,423.86</td>
                      <td>650$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$650", balance: "$6,423.86" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$6,532.64</td>
                      <td>661$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$661", balance: "$6,532.64" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$7,001.22</td>
                      <td>700$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$700", balance: "$7,001.22" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$7,455.00</td>
                      <td>730$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$730", balance: "$7,455.00" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$7,772.05</td>
                      <td>765$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$765", balance: "$7,772.05" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$8,445.51</td>
                      <td>835$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$835", balance: "$8,445.51" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$9,110.04</td>
                      <td>900$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$900", balance: "$9,110.04" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$9,602.64</td>
                      <td>950$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$600", balance: "$56,144.39" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$9,602.64</td>
                      <td>950$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$950", balance: "$9,602.64" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$10,550.00</td>
                      <td>1000$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$1000", balance: "$10,50.00" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <th scope="row">paypal</th>
                      <td>@makerthree</td>
                      <td>
                        email access -Dissabled 2FA ,Come with cookies -zelle
                        enabled
                      </td>
                      <td>$19,053.53</td>
                      <td>1190$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$1190", balance: "$19,053.53" }}
                        >
                          <button className="tablePurchased">
                            <i
                              class="fa fa-shopping-cart"
                              aria-hidden="true"
                            ></i>{" "}
                            Purchase
                          </button>
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="thisimportant">
              <h4>
                <b>Official legit-logstore.com Domain!</b>
              </h4>
              <strong>
                <span style={{ color: "black" }}>
                  {" "}
                  legit-logstore.com - Main Domain{" "}
                </span>
                <br />
                <br />
                <strong>
                  <span style={{ color: "black" }}>
                    {" "}
                    legit-logstore.com (Backup Domain - Online!){" "}
                  </span>
                  <br />
                  <br />
                  <strong>
                    <font color="red"> TOR DOMAIN: legit-logstore.com</font>
                  </strong>
                  <br />
                  <br />
                  <strong style={{ color: "black" }}>
                    © Copyright 2016 -2022 !
                  </strong>
                  <br />
                  <center>
                    <strong>
                      <font color="red">SAVE THIS IMPORTANT !</font>
                    </strong>
                  </center>
                  <font color="red">
                    <br />
                  </font>
                </strong>
              </strong>
            </div>
          </div>
        </div>
        {/* close of row */}
      </div>
    </div>
  );
}
