import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component/dist-modules";
import "react-vertical-timeline-component/style.min.css";

export default function Paypalmethod() {
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
                <img
                  src="/timeline/1.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Login to an Old PayPal account</p>
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
                  src="/timeline/2.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Click on WALLET on the top menu</p>
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
                  src="/timeline/3.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Now click on LINK A CARD OR BANK</p>
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
                  src="/timeline/4.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Click on LINK A BANK AC</p>
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
                  src="/timeline/5.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now you can choose your bank account from this list, I bought
                  a suntrust bank login so will choose SUNTRUST/HUNTINGTON/CHASE
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
                  src="/timeline/6.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  You will input the account and routine number of bank info u
                  bought from the shop or spammer
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
                <h3 className="vertical-timeline-element-title">Step 7</h3>
                <img
                  src="/timeline/7.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">After that, click on AGREE AND LINK</p>
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
                  src="/timeline/8.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  Now this the next Page, to make this transfer Faster, click on
                  CONFIRM INSTANTLY INSTEAD Enter the username and password of
                  the bank login info u bought and click CONFIRM INSTANTLY
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
                  src="/timeline/9.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  A code will be sent to the EMAIL ATTACHED TO THE BANK INFO u
                  bought , always make sure u are using a bank log with email
                  attached , it makes the job more professional
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
                  src="/timeline/10.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Finally done ✅ ✅ ✅</p>
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
                  src="/timeline/11.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Click on ADD MONEY TO YOUR BALANCE</p>
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
                  src="/timeline/12.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">
                  You will choose the bank added and then input AMOUNT PayPal
                  takes 2days to reflect for almost all banks but it will
                  reflect INSTANTLY if you use the following banks -USAA -NFCU
                  or any Bank with FEDERAL next to it Apart from that, just
                  continue with the 2days reflection, all the ones I do are
                  24hours reflection so no need to rush
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
                  src="/timeline/13.jpg"
                  alt="step1"
                  className="timelinejpg"
                />
                <p id="description">Money added 💰 💰 ✅ ✅</p>
              </VerticalTimelineElement>
            </VerticalTimeline>
          </div>
        </div>
      </div>
    </div>
  );
}
