import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";

export default function Navyfederalmethod() {
  const [slide, setSlide] = useState(false);
  return (
    <div className="container-fluid">
      <div className="row header">
        <div className="iconshowhi">
          <div className="icondiv" onClick={() => setSlide(!slide)}>
            <i className="fa fa-chevron-right" aria-hidden="true"></i>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3 sidebarPaypalmethod">
          <ul>
            <Link
              to="/paypalmethod"
              className="linkPm"
              style={{ textDecoration: "none" }}
            >
              <li className="differen">
                {" "}
                <i className="fa fa-paypal" aria-hidden="true"></i>PayPal Method
              </li>
            </Link>

            <Link to="/navyfederalmethod" className="linkPm">
              <li className="different1">Navy Federal Method</li>
            </Link>
            <Link to="/" className="linkPm">
              <li className="different">
                <i className="fa fa-home" aria-hidden="true"></i>
                Home Page
              </li>
            </Link>
          </ul>
        </div>
        <div
          className={
            slide
              ? "col-md-3 sidebarPaypalmethod2"
              : "col-md-3 sidebarPaypalmethod21"
          }
        >
          <ul>
            <Link
              to="/paypalmethod"
              className="linkPm"
              style={{ textDecoration: "none" }}
            >
              <li className="differen">
                {" "}
                <i className="fa fa-paypal" aria-hidden="true"></i>PayPal Method
              </li>
            </Link>

            <Link to="/navyfederalmethod" className="linkPm">
              <li className="different1">Navy Federal Method</li>
            </Link>
            <Link to="/" className="linkPm">
              <li className="different">
                <i className="fa fa-home" aria-hidden="true"></i>
                Home Page
              </li>
            </Link>
          </ul>
        </div>
        <div className="col-md-9">
          <div className="animatedTimeline">
            <VerticalTimeline>
              <VerticalTimelineElement
                iconStyle={{ background: "#2EC5D3" }}
                icon={
                  <i
                    className="fa fa-tags verticalicons"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 1</h3>

                <p id="description">
                  Stay tuned my guys This tutorial am gon' teach yall is how to
                  open Up “NAVY FEDERAL CREDIT UNION I take it as if everyone
                  here knows how to buy SSN so please I need you to get your
                  drops and SSN’s ready In case you don’t know what SSN is It’s
                  social security number
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#EC5E69" }}
                icon={
                  <i
                    className="fa fa-map-marker verticalicons2"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 2</h3>
                <img
                  src="/navy/nfcu1.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Please start setting off your VPNs and RDPs First google Navy
                  federal credit union and select become a member, Click on Join
                  now or sign up -Please phone also works even if not on RDP
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#5893DF" }}
                icon={
                  <i
                    className="fa fa-star verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 3</h3>
                <img
                  src="/navy/nfcu2.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now select "Im serving or have served in the military
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#5893DF" }}
                icon={
                  <i
                    className="fa fa-comments verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 4</h3>
                <img
                  src="/navy/nfcu3.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now select "Im serving or have served in the military
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#F1C205" }}
                icon={
                  <i
                    className="fa fa-pencil-square verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 5</h3>
                <img
                  src="/navy/nfcu4.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  now select 'I'm a veteran" After, You can select "Navy" or
                  "Army"
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 6</h3>
                <img
                  src="/navy/nfcu6.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Select "Retired/still employed"</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 7</h3>
                <img
                  src="/navy/nfcu7.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">You will see this Agree and continue</p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 8</h3>
                <img
                  src="/navy/nfcu8.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  You can begin putting your SSN details in
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 9</h3>
                <img
                  src="/navy/nfcu9.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  the next page File in the number and email you created and
                  scroll down
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 10</h3>
                <img
                  src="/navy/nfcu10.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Under the "Address type" Select US Fill in your drop's address
                  Please note this point well. Your drop address not address on
                  the Ssn you are using but if same person will receive the card
                  then you don’t have any problem
                </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 11</h3>
                <img
                  src="/navy/nfcu11.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Under"Zip code" You will see " Have you lived at this address
                  longer than 6 months?" Select "NO"
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 12</h3>
                <img
                  src="/navy/nfcu12.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Put in the SSN victim's SSN address as previous address
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 13</h3>
                <img
                  src="/navy/nfcu13.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  put in the ID either state ID or DL And select the State If
                  you bought the fullz and you don’t have the dL or state ID
                  just generate fake one
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 14</h3>
                <img
                  src="/navy/nfcu14.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now fill in the Work details that can be be found the the JOB
                  description side of the website you used to build the SSN
                  fullz
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 15</h3>
                <img
                  src="/navy/nfcu15.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  now my is a Insurance Broker in Hartford Ins Group so i just
                  filled it
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 16</h3>
                <img
                  src="/navy/nfcu16.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now select "Im serving or have served in the military
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 17</h3>
                <img
                  src="/navy/nfcu17.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now Navy would want you to fund your account Select" Mail a
                  check" on
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 18</h3>
                <img
                  src="/navy/nfcu18.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  This next screen you get is this SO just put in the debit card
                  pin you would like to use and continue
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 19</h3>
                <img
                  src="/navy/nfcu19.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now you get to this page and you have to scroll down to agree
                  with Navy Fed terms and conditions which brings you here
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 20</h3>
                <img
                  src="/navy/nfcu20.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Agree and continue</p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 21</h3>
                <img
                  src="/navy/nfcu21.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  The last step is this Here it will be decided if they will
                  approve you instantly or not SUBMIT APPLICATION
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 22</h3>
                <img
                  src="/navy/nfcu22.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  See, easy as ABCD dawg,Real Quick💯 Now we click on Continue
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 23</h3>
                <img
                  src="/navy/nfcu23.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now you set up online banking Which is your preferred username
                  and password
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 24</h3>
                <img
                  src="/navy/nfcu24.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  After you select a Username and password Click on "Go
                  paperless
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 25</h3>
                <img
                  src="/navy/nfcu25.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now this is a summary of my account details so i will copy and
                  paste them somewhere safe and click on 'SIgn IN"
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 26</h3>
                <img
                  src="/navy/nfcu26.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  It will open a new tab and take you to the login page Put in
                  your username and password
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 27</h3>
                <img
                  src="/navy/nfcu27.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  it will ask you to verify your identity In that case they will
                  send a code(numbers only) to your phone or email depending on
                  which one you prefer I prefer email
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 28</h3>
                <img
                  src="/navy/nfcu28.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  I put in the code and i am in This is my Navyfed Account My
                  drop will receive the card in 7 business days Now you can use
                  name and SSN of the victim to apply for unemployment benefits
                  and use the account numbers to receive your money
                </p>
              </VerticalTimelineElement>
              <VerticalTimelineElement
                date="01-02-2022"
                dateClassName="date"
                iconStyle={{ background: "#9F7CE1" }}
                icon={
                  <i
                    className="fa fa-paperclip verticalicons3"
                    aria-hidden="true"
                  ></i>
                }
              >
                <h3 className="vertical-timeline-element-title">Step 29</h3>

                <p id="description">Good Job</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
}
