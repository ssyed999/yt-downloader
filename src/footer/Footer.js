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
      <div className="row ">
        <div className="col-md-6 footerbox1">
          <div className=" row  justify-content-center align-items-center">
            <div className="">
              <p className="m-0 callus">CALL US TODAY</p>
              <a className="contactnum link-text" href="tel:+91 9000000000">
                +91 9000000000
              </a>
              <div className="row mt-1">
                <div className="footerImg">
                  <a target="_blank" href="https://twitter.com">
                    <img src={Twitter} alt="www.twitter.com" />
                  </a>
                </div>
                <div className="footerImg">
                  <a target="_blank" href="https://fb.com">
                    <img src={Fb} alt="" />
                  </a>
                </div>
                <div className="footerImg">
                  <a target="_blank" href="https://linkedin.com">
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
                <li>
                  <Link className="link-text" to="/">
                    Contact Us
                  </Link>
                </li>
              </ul>
              <p className="mt-5" style={{ color: "white" }}>
                FYI Downloader, All rights reserved @ Copyrights 2022;
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
