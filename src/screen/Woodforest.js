import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Woodforest() {
  const [smallerScreenWidth, setsmallerScreenWidth] = useState(true);
  return (
    <div className="homePagebg">
      <div className="row container-fluid">
        <div className="col-md-2 sidebarDiv">
          <span
            className="smallbarsmenu"
            onClick={() => setsmallerScreenWidth(!smallerScreenWidth)}
          >
            <i
              className={
                smallerScreenWidth
                  ? "fa fa-bars barsmall2"
                  : "fa fa-bars barsmall"
              }
              aria-hidden="true"
            ></i>
          </span>{" "}
          <h2 className="legitVendor">Legit-Logstore</h2>
          <div
            className="dashboard addfundsDashBoard"
            style={{ height: "95%" }}
          >
            <div className="ulDiv">
              <ul>
                <li className="dashboardLi">
                  <i className="fa fa-tachometer" aria-hidden="true"></i>
                  <Link
                    to="/home"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    Dashboard{" "}
                  </Link>
                </li>
                <li className="dashboardLi">
                  {" "}
                  <i className="fa fa-th" aria-hidden="true"></i>
                  Bank Logs
                  <div className="dropdownMenu">
                    <ul>
                      <li>Bank Logins</li>
                      <li className="dropdownLiwhite">
                        <Link
                          to="/home"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          {" "}
                          Chase Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/chimebanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Chime Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/boabanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          BOA Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/suntrustbanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          suntrust Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wellsfargologs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Wells Fargo Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/citibanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Citi Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tdbanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          TD Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/hsbcbanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Hsbc Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/huntingtonlogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          huntington logs{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/rbcbanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          RBC Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/scotiabanklogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Scotia Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        {" "}
                        <Link
                          to="/woodforestlogs"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Woodforest{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi">
                  {" "}
                  <i className="fa fa-th" aria-hidden="true"></i>
                  Logs
                  <div className="dropdownMenu">
                    <ul>
                      <li>Logs</li>
                      <li>
                        <Link
                          to="/cashappaccount"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Cashapp account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/paypalaccount"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Paypal Account{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shopwithscript"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          ShopWithscript{" "}
                        </Link>
                      </li>
                      <li
                        style={{
                          position: "absolute",
                          opacity: 0,
                          pointerEvents: "none",
                        }}
                      ></li>
                      <li>
                        <Link
                          to="/zelleaccount"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Zelle Account{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/moneygram"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Moneygram{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/westernunion"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Western Union{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi">
                  {" "}
                  <i className="fa fa-th" aria-hidden="true"></i>
                  PUA&FULLZ
                  <div className="dropdownMenu">
                    <ul>
                      <li>PUA&FULLZ</li>
                      <li>
                        <Link
                          to="/newyorkpua"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Newyork Pua{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/newyorkfuliz"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Newyork Fullz{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/idahopua"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          idahoPua{" "}
                        </Link>
                      </li>
                      <li
                        style={{
                          position: "absolute",
                          opacity: 0,
                          pointerEvents: "none",
                        }}
                      ></li>
                      <li>
                        <Link
                          to="/idahofuliz"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Idaho Fuliz{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/texaspua"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Texas Pua{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/texasfuliz"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Texas Fuliz{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/illionspua"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Illions Pua{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi">
                  {" "}
                  <i className="fa fa-th" aria-hidden="true"></i>
                  Accounts
                  <div className="dropdownMenu">
                    <ul>
                      <li>Accounts</li>
                      <li>
                        <Link
                          to="/blockchainaccount"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Blockchain Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/coinbasewallet"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          coinbase Wallet{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/paxfull"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Paxfull{" "}
                        </Link>
                      </li>
                      <li
                        style={{
                          position: "absolute",
                          opacity: 0,
                          pointerEvents: "none",
                        }}
                      ></li>
                      <li>
                        <Link
                          to="/cpanleAccount"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          CPanel Account{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rdpaccount"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          RDP Account{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi">
                  {" "}
                  <i className="fa fa-th" aria-hidden="true"></i>
                  Credit Cards
                  <div className="dropdownMenu">
                    <ul>
                      <li>Credit Cards</li>
                      <li>
                        <Link
                          to="/visacards"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Visa Cards
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mastercards"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Master Cards{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amexcards"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Amex Cards{" "}
                        </Link>
                      </li>
                      <li
                        style={{
                          position: "absolute",
                          opacity: 0,
                          pointerEvents: "none",
                        }}
                      ></li>
                      <li>
                        <Link
                          to="/discovercards"
                          style={{ color: "#ffffff", textDecoration: "none" }}
                        >
                          Discover Cards{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi bdl">
                  <i className="fa fa-paypal" aria-hidden="true"></i>
                  <Link
                    to="/paypalmethod"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    Paypal Method{" "}
                  </Link>
                </li>
                <li className="dashboardLi bdl">
                  <i className="fa fa-paypal" aria-hidden="true"></i>
                  <Link
                    to="/navyfederalmethod"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {" "}
                    Navy Federal Method{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="smaller_screen_menu">
            {/* smaller screeen menu start*/}
            <div className={smallerScreenWidth ? "menu_sc2" : "menu_sc"}>
              <ul>
                <li className="dashboardFirstlI">
                  <i
                    class="fa fa-tachometer submenuicon"
                    aria-hidden="true"
                  ></i>
                  <Link
                    to="/home"
                    style={{
                      color: "#e1e5e9",
                      textDecoration: "none",
                    }}
                  >
                    Dashboard{" "}
                  </Link>
                </li>

                <li className="dashboardLi_smaller_screen">
                  {" "}
                  <i class="fa fa-th" aria-hidden="true"></i>
                  Bank Logs
                  <div className="dropdownMenu_smaller_screen">
                    <ul>
                      <li style={{ color: "white" }}>Bank Logins</li>
                      <li>
                        <Link
                          to="/home"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          {" "}
                          Chase Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/chimebanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Chime Bank Logs{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/boabanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          BOA Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/suntrustbanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Suntrust Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/wellsfargologs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          WellsFargo Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/citibanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Citi Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tdbanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          TD Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/hsbcbanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Hsbc Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/huntingtonlogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Huntington Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rbcbanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          RBC Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/scotiabanklogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Scotia Bank Logs
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/woodforestlogs"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Woodforest Bank Logs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="dashboardLi_smaller_screen">
                  {" "}
                  <i class="fa fa-th" aria-hidden="true"></i>
                  Logs
                  <div className="dropdownMenu_smaller_screen">
                    <ul>
                      <li>
                        <Link
                          to="/paypalaccount"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          {" "}
                          Paypal Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/shopwithscript"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          ShopWithscript{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/zelleaccount"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Zelle Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/moneygram"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Moneygram
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/westernunion"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Western Union
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi_smaller_screen">
                  {" "}
                  <i class="fa fa-th" aria-hidden="true"></i>
                  PUA&FULLZ
                  <div className="dropdownMenu_smaller_screen">
                    <ul>
                      <li>
                        <Link
                          to="/newyorkpua"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          {" "}
                          newyork Pua
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/newyorkfuliz"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Newyork Fuliz{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/idahopua"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Idaho Pua
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/idahofuliz"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Idaho Fuliz
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/texaspua"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Texas Pua
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/texasfuliz"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Texas Fuliz
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/illionspua"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Illions Pua
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi_smaller_screen">
                  {" "}
                  <i class="fa fa-th" aria-hidden="true"></i>
                  Credit Cards
                  <div className="dropdownMenu_smaller_screen">
                    <ul>
                      <li>
                        <Link
                          to="/visacards"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          {" "}
                          Visa Cards
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/mastercards"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Master Cards{" "}
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/amexcards"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Amex Cards
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/discovercards"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Discovercards
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardLi_smaller_screen">
                  {" "}
                  <i class="fa fa-th" aria-hidden="true"></i>
                  Accounts
                  <div className="dropdownMenu_smaller_screen">
                    <ul>
                      <li>
                        <Link
                          to="/blockchainaccount"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          {" "}
                          Blockchain Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/coinbasewallet"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Coinbase Wallet
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/paxfull"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Paxfull
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/cpanleAccount"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          Cpanel Account
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/rdpaccount"
                          style={{ color: "#8e9eae", textDecoration: "none" }}
                        >
                          RDP Account
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="dashboardFirstlI">
                  <i class="fa fa-paypal submenuicon" aria-hidden="true"></i>
                  <Link
                    to="/paypalmethod"
                    style={{
                      color: "#8e9eae",
                      textDecoration: "none",
                    }}
                  >
                    Paypalmethod{" "}
                  </Link>
                </li>
                <li className="dashboardFirstlI">
                  <i class="fa fa-paypal submenuicon" aria-hidden="true"></i>
                  <Link
                    to="/navyfederalmethod"
                    style={{
                      color: "#8e9eae",
                      textDecoration: "none",
                    }}
                  >
                    Navyfederalmethod{" "}
                  </Link>
                </li>
              </ul>
            </div>
            {/* smaller screeen menu end*/}
          </div>
        </div>
        <div className="col-md-10 tables-section">
          <div className="row h4row">
            <h4>Woodforest Bank</h4>
          </div>
          <div>
            <table className="table table-striped darker">
              <thead>
                <tr>
                  <th colspan="4">
                    <span className="bg-danger dangerbg">
                      Woodforest Bank Logs: 13 Logs available
                    </span>
                  </th>
                </tr>
                <tr>
                  <th scope="col">Log Info</th>
                  <th scope="col">Balance</th>
                  <th scope="col">Price</th>
                  <th scope="col">Buy</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$1014.76</td>
                  <td>$95</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$1014.76", balance: "$95" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="evencols">
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$1254.64</td>
                  <td>$100</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "1254.64", balance: "$100" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$1632.75</td>
                  <td>$150</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$1632.75", balance: "$150" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="evencols">
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$1883.53</td>
                  <td>$180</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$1883.53", balance: "$180" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$2165.53</td>
                  <td>$203</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$2165.53", balance: "$203" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="evencols">
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$2755.02</td>
                  <td>$240</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$2755.02", balance: "$240" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$3027.01</td>
                  <td>$263</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$3057.11", balance: "$245" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="evencols">
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$3164.56</td>
                  <td>$299</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "3164.56", balance: "$299" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$3674.91</td>
                  <td>$310</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$3674.91", balance: "$310" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="evencols">
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$3900.43</td>
                  <td>$350</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$3900.43", balance: "$350" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$4117.86</td>
                  <td>$380</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$4117.86", balance: "$380" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr className="evencols">
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$4684.35</td>
                  <td>$400</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$4684.35", balance: "$400" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>
                    Online access, Email Access, Questions and answers, card
                    information and owner's fullz info
                  </td>
                  <td>$4853.45</td>
                  <td>$430</td>
                  <td>
                    <Link
                      to="/addfunds"
                      state={{ from: "$4853.45", balance: "$430" }}
                    >
                      <button className="Purchasebtn">
                        {" "}
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>
                        Purchase
                      </button>
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row footer">&copy; 2022 legit-logstore</div>
        </div>
      </div>
    </div>
  );
}
