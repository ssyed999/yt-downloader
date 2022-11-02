import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* <div className="footer-content">
        <div className="call-us">
          <p className="m-0 callus">CALL US TODAY</p>
          <a className="contactnum link-text" href="tel:+91 9000000000">
            +91 9000000000
          </a>
          <a target="_blank" href="https://twitter.com" rel="noreferrer">
            <img src={Twitter} alt="www.twitter.com" />
          </a>
          <a target="_blank" href="https://fb.com" rel="noreferrer">
            <img src={Fb} alt="" />
          </a>
          <a target="_blank" href="https://linkedin.com" rel="noreferrer">
            <img src={LinkedIn} alt="linkedIn" />
          </a>
        </div>
        <div>
          <ul className="px-0">
            <h5>Quick Links</h5>
          </ul>
          <div className="quick-links">
            <Link className="link-text" to="/">
              About Company
            </Link>

            <Link className="link-text" to="/">
              Our Services
            </Link>
            <Link className="link-text" to="/">
              Contact Us
            </Link>
          </div>
        </div>
      </div> */}
      <div className="copyright">
        FYI Downloader, All rights reserved @ Copyrights 2022;
      </div>
    </div>
  );
}
