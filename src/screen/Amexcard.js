import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import "./cashapp.css";

export default function Amexcard() {
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
                    <li>Cashapp Account</li>
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
                    to="/blockchainwallet"
                  >
                    <li>Blockchanin wallet</li>
                  </Link>

                  <Link style={{ textDecoration: "none" }} to="/coinbasewallet">
                    <li>Coinbase wallet</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/paxfull">
                    <li>paxfull</li>
                  </Link>
                  <Link style={{ textDecoration: "none" }} to="/cpanelaccount">
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
              <div className="udpated">Cashapp Logs 100% Valid updated </div>
              <div className="goodForCC">
                Cashapp logs. All my Cashapp is BTC Enabled! Bank/Card Linked
                2021 Updated 06/01/2022
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$4,853.57</td>
                      <td>484$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$95", balance: "$1,017.76" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$1,254.64</td>
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
                          state={{ from: "$100", balance: "$1,254.64" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$1,632.75</td>
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
                          state={{ from: "$150", balance: "$1,632.75" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$1,883.53</td>
                      <td>180$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$180", balance: "$1,883.53" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$2,165.53</td>
                      <td>230$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$203", balance: "$2,165.53" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$2,523.48</td>
                      <td>240$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$240", balance: "$2,523.48" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$2,755.00</td>
                      <td>263$</td>
                      <td>
                        <label className="badge badge-danger blink_me">
                          sold out
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$263", balance: "$2,755.00" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$10,736.88</td>
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
                          state={{ from: "$190", balance: "$10,736.88" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$3,027.01</td>
                      <td>299$</td>
                      <td>
                        <label className="badge badge-danger blink_me">
                          sold out
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$299", balance: "$3,027.01" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$3,163.56</td>
                      <td>310$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$310", balance: "$3,163.56" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$3,674.90</td>
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
                          state={{ from: "$350", balance: "$3,674.90" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$3,900.43</td>
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
                          state={{ from: "$380", balance: "$3,900.43" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$3,674.90</td>
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
                          state={{ from: "$350", balance: "$3,674.90" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$4,117.86</td>
                      <td>324$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$240", balance: "$2,523.48" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$4,684.35</td>
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
                          state={{ from: "$450", balance: "$4,684.35" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$4,853.57</td>
                      <td>484$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$484", balance: "$4,853.57" }}
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
                      <th scope="row">Cashapp</th>
                      <td>@makerthree</td>
                      <td>
                        Cash app BTC enable, fully verified, email access, Max
                        transaction limit per day is high
                      </td>
                      <td>$5,024.42</td>
                      <td>498$</td>
                      <td>
                        <label className="badge badge-success blink_me">
                          Available
                        </label>
                      </td>
                      <td>
                        <Link
                          to="/addfunds"
                          style={{ textDecoration: "none" }}
                          state={{ from: "$498", balance: "$5,024.42" }}
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
