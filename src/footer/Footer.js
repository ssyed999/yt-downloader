import React from "react";
import Fb from "../assets/facebook.svg";
import LinkedIn from "../assets/linkdin.svg";
import Twitter from "../assets/twitter.svg";
import Logo from "../assets/Logo3.png";
import "./Footer.css";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="footer">
      <div className="row no-gutters">
        <div className="col-md-6 footerbox1">
          <div className=" row no-gutters justify-content-center align-items-center">
            <div className="">
              <p className="m-0 callus">CALL US TODAY</p>
              <a className="contactnum link-text" href="tel:+91 7004544049">
                +91 7004544049
              </a>
              <div className="row mt-1">
                <div className="footerImg">
                  <a target="_blank">
                    <img src={Twitter} alt="" />
                  </a>
                </div>
                <div className="footerImg">
                  <a target="_blank">
                    <img src={Fb} alt="" />
                  </a>
                </div>
                <div className="footerImg">
                  <a target="_blank">
                    <img src={LinkedIn} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 footerbox2">
          <div className="row no-gutters justify-content-start align-items-center">
            <div>
              <ul className="px-0">
                <h5>Quick Links</h5>
              </ul>
              <ul className="my-4 px-0">
                <li>
                  <Link className="link-text" to="/">
                    About Company
                  </Link>
                </li>

                <li>
                  <Link className="link-text" to="/">
                    Our Services
                  </Link>
                </li>

                {/* <li><Link className="link-text" to="/OurPricing">Our Pricing</Link></li> */}
                <li>
                  <Link className="link-text" to="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <p className="mt-5">
                FYI Downloader, All rights reserved @ Copyrights 2022;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
