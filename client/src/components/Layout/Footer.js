import React from "react";
import { Link } from "react-router-dom";
import { RiSendPlaneFill } from "react-icons/ri";
const Footer = () => {
  return (
    // <footer className="footer mt-auto bg-light text-center py-3">
    //   <div className="container">
    //     <h4 className="text-center">
    //       Made with passion &copy; Prathamesh Patil
    //     </h4>
    //     <p className="text-center">
    //       <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
    //       <Link to="/policy">Privacy Policy</Link>
    //     </p>
    //     <p>Copyright © 2023</p>
    //   </div>
    // </footer>
    <div className="footer-section d-flex flex-column h-100">
      <footer className="footer w-100 py-4 flex-shrink-0">
        <div className="container py-4">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6">
              <h5 className="h3 text-white fw-bolder">Techline.</h5>
              <p className="small text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="small text-secondary mb-0">
                © Copyrights. All rights reserved.{" "}
              </p>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-secondary">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-6">
              <h5 className="text-white mb-3">Quick links</h5>
              <ul className="list-unstyled text-secondary">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/">Get started</Link>
                </li>
                <li>
                  <Link to="/">FAQ</Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-6">
              <h5 className="text-white mb-3">Newsletter</h5>
              <p className="small text-secondary">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <form action="#">
                <div className="input-group mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="button-addon2"
                  />
                  <button
                    className="btn btn-success"
                    id="button-addon2"
                    type="button"
                  >
                    <RiSendPlaneFill color="white" height="24px" width="24px" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
