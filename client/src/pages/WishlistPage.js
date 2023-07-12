/* eslint-disable no-lone-blocks */
import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import { useCart } from "../context/cart";
import { useAuth } from "../context/auth";
import { Link, useNavigate } from "react-router-dom";
import DropIn from "braintree-web-drop-in-react";
import { AiFillWarning } from "react-icons/ai";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/CartStyles.css";
import { useWishlist } from "../context/wishlist";
import ProductCard from "../components/Card/ProductCard";

const WishlistPage = () => {
  const [auth, setAuth] = useAuth();
  const [wishlist, setWishlist] = useWishlist();
  const [clientToken, setClientToken] = useState("");
  const [instance, setInstance] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  //detele item
  //   const removeCartItem = (pid) => {
  //     try {
  //       let myCart = [...cart];
  //       let index = myCart.findIndex((item) => item._id === pid);
  //       myCart.splice(index, 1);
  //       setCart(myCart);
  //       localStorage.setItem("cart", JSON.stringify(myCart));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  return (
    <Layout title={"All Categories"}>
      <div className=" categories-page">
        <div className="container">
          <div className="d-flex justify-content-center align-items-center pt-5">
            {" "}
            <button className="btn btn-dark">OUR CATEGORIES</button>{" "}
          </div>
          <div className="d-flex justify-content-center mt-3">
            {" "}
            <span className="text text-center">
              Finding Best Products Now
              <br /> in Your Fingertips
            </span>{" "}
          </div>
          <div className="row mt-2 g-4 product-cards">
            {wishlist.length > 0 &&
              wishlist.map((w, i) => (
                <ProductCard
                  key={i}
                  product={w}
                  name={w.name}
                  price={w.price}
                  pid={w._id}
                  pSlug={w.slug}
                />
              ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WishlistPage;
