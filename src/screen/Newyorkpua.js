import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import "./cashapp.css";

export default function Newyorkpua() {
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
              <div className="udpated">New York PUA </div>
              <div className="goodForCC">
                New York PUA All logs are hacked Valid and have balance to be
                paid All sales are Final. only invalid logs will be replace
              </div>
              <div>
                <table className="table table-bordered table-responsive">
                  <thead>
                    <tr>
                      <th scope="col">Logs Name</th>
                      <th scope="col">Vendor</th>
                      <th scope="col">Includes</th>
                      <th scope="col">Login here</th>
                      <th scope="col">Price</th>
                      <th scope="col">Status</th>
                      <th scope="col">Buy Now</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
                      <td>200$</td>
                      <td>
                        <label className="badge badge-danger blink_me">
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
                      <td>200$</td>
                      <td>
                        <label className="badge badge-danger blink_me">
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
                      <th scope="row">New York PUA</th>
                      <td>@makerthree</td>
                      <td>
                        Username/Password Date of Birth, Full Name, Ssn, MMN
                        Full Access
                      </td>
                      <td>https://my.ny.gov/LoginV4/login.xhtml</td>
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
