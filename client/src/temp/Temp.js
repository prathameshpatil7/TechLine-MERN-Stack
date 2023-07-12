/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./temp.scss";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { FaCartPlus } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

const Temp = (props) => {
  const { name = "", price = 0 } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-6">
          <div className="product-grid">
            <div className="product-image">
              <Link to="/" className="image">
                <img className="pic-1" src="images/z.png" />
              </Link>
              <ul className="product-links">
                <li>
                  <Link to="/">
                    <FaCartPlus />
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    <AiOutlineHeart />
                  </Link>
                </li>
              </ul>
            </div>
            <div className="product-content">
              <h3 className="title">
                <Link to="/temp">{name}</Link>
              </h3>
              <Rate allowHalf defaultValue={2.5} disabled />

              <div className="price">
                {price.toLocaleString("en-US", {
                  style: "currency",
                  currency: "INR",
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Temp;
