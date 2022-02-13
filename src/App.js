import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./screen/login";
import Home from "./screen/register";
import Dashboard from "./screen/dashboard";
import Chimebanklogs from "./screen/Chimebanklogs";
import Boabanklogs from "./screen/Boabanklogs";
import Suntrustbanklogs from "./screen/Suntrustbanklogs";
import Wellsfargologs from "./screen/Wellsfargologs";
import Citibanklogs from "./screen/Citibanklogs";
import Tdbanklogs from "./screen/Tdbanklogs";
import Hsbcbanklogs from "./screen/Hsbcbanklogs";
import Huntingtonlogs from "./screen/Huntingtonlogs";
import Rbcbanklogs from "./screen/Rbcbanklogs";
import Scotiabanklogs from "./screen/Scotiabanklogs";
import Woodforest from "./screen/Woodforest";
import Cashappaccount from "./screen/Cashappaccount";
import Paypalaccount from "./screen/paypalaccount";
import Shopwithscript from "./screen/Shopwithscript";
import Moneygram from "./screen/Moneygram";
import Westernunion from "./screen/Westernunion";
import Newyorkpua from "./screen/Newyorkpua";
import Newyorkfuliz from "./screen/Newyorkfuliz";
import Zelleaccount from "./screen/Zelleaccount";
import Idahopua from "./screen/Idahopua";
import Idahofuliz from "./screen/Idahofuliz";
import Texaspua from "./screen/Texaspua";
import Texasfuliz from "./screen/Texasfuliz";
import Illionspua from "./screen/Illionspua";
import Visacard from "./screen/Visacard";
import Mastercard from "./screen/mastercard";
import Amexcard from "./screen/Amexcard";
import Discovercards from "./screen/Discovercards";
import Blockchainaccount from "./screen/blockchainaccount";
import Coinbasewallet from "./screen/Coinbasewallet";
import Paxfull from "./screen/Paxfull";
import Cpanel from "./screen/Cpanel";
import Rdpaccount from "./screen/Rdpaccount";
import Paypalmethod from "./screen/Paypalmethod";
import Navyfederalmethod from "./screen/navyfederalmethod";
import Test from "./screen/testing";
import Addfunds from "./screen/addfunds";
import Purchase from "./screen/purchase";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact={true} element={<Login />} />
          <Route path="/register" exact={true} element={<Home />} />
          <Route path="/home" exact={true} element={<Dashboard />} />
          <Route
            path="/chimebanklogs"
            exact={true}
            element={<Chimebanklogs />}
          />
          <Route path="/boabanklogs" exact={true} element={<Boabanklogs />} />
          <Route
            path="/suntrustbanklogs"
            exact={true}
            element={<Suntrustbanklogs />}
          />
          <Route
            path="/wellsfargologs"
            exact={true}
            element={<Wellsfargologs />}
          />
          <Route path="/citibanklogs" exact={true} element={<Citibanklogs />} />
          <Route path="/tdbanklogs" exact={true} element={<Tdbanklogs />} />
          <Route path="/hsbcbanklogs" exact={true} element={<Hsbcbanklogs />} />
          <Route
            path="/huntingtonlogs"
            exact={true}
            element={<Huntingtonlogs />}
          />
          <Route path="/rbcbanklogs" exact={true} element={<Rbcbanklogs />} />
          <Route
            path="/scotiabanklogs"
            exact={true}
            element={<Scotiabanklogs />}
          />
          <Route path="/woodforestlogs" exact={true} element={<Woodforest />} />
          <Route
            path="/cashappaccount"
            exact={true}
            element={<Cashappaccount />}
          />
          <Route
            path="/paypalaccount"
            exact={true}
            element={<Paypalaccount />}
          />
          <Route
            path="/shopwithscript"
            exact={true}
            element={<Shopwithscript />}
          />
          <Route path="/zelleaccount" exact={true} element={<Zelleaccount />} />
          <Route path="/moneygram" exact={true} element={<Moneygram />} />
          <Route path="/westernunion" exact={true} element={<Westernunion />} />
          <Route path="/newyorkpua" exact={true} element={<Newyorkpua />} />
          <Route path="/newyorkfuliz" exact={true} element={<Newyorkfuliz />} />
          <Route path="/idahopua" exact={true} element={<Idahopua />} />
          <Route path="/idahofuliz" exact={true} element={<Idahofuliz />} />
          <Route path="/texaspua" exact={true} element={<Texaspua />} />
          <Route path="/texasfuliz" exact={true} element={<Texasfuliz />} />
          <Route path="/illionspua" exact={true} element={<Illionspua />} />
          <Route path="/visacards" exact={true} element={<Visacard />} />
          <Route path="/mastercards" exact={true} element={<Mastercard />} />
          <Route path="/amexcards" exact={true} element={<Amexcard />} />
          <Route
            path="/discovercards"
            exact={true}
            element={<Discovercards />}
          />
          <Route
            path="/blockchainaccount"
            exact={true}
            element={<Blockchainaccount />}
          />
          <Route
            path="/coinbasewallet"
            exact={true}
            element={<Coinbasewallet />}
          />
          <Route path="/paxfull" exact={true} element={<Paxfull />} />
          <Route path="/cpanleAccount" exact={true} element={<Cpanel />} />
          <Route path="/rdpaccount" exact={true} element={<Rdpaccount />} />
          <Route path="/paypalmethod" exact={true} element={<Paypalmethod />} />
          <Route path="/test" exact={true} element={<Test />} />
          <Route path="/addfunds" exact={true} element={<Addfunds />} />
          <Route path="/Purchase" exact={true} element={<Purchase />} />
          <Route
            path="/navyfederalmethod"
            exact={true}
            element={<Navyfederalmethod />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
