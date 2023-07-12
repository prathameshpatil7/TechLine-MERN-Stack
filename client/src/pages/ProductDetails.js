import React, { useState, useEffect } from "react";
import Layout from "./../components/Layout/Layout";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/ProductDetailsStyles.scss";
import ProductCard from "../components/Card/ProductCard";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { useWishlist } from "../context/wishlist";
import { useCart } from "../context/cart";
import toast from "react-hot-toast";
import ProductQuantityController from "../components/Card/ProductQuantityController";

const ProductDetails = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [wishlist, setWishlist] = useWishlist();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);

  //initalp details
  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);
  //getProduct
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/get-product/${params.slug}`
      );
      setProduct(data?.product);
      getSimilarProduct(data?.product._id, data?.product.category._id);
    } catch (error) {
      console.log(error);
    }
  };
  //get similar product
  const getSimilarProduct = async (pid, cid) => {
    try {
      const { data } = await axios.get(
        `/api/v1/product/related-product/${pid}/${cid}`
      );
      setRelatedProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };

  const isWishlisted = () => {
    return wishlist.find((p) => p.slug === product.slug);
  };
  const isAddedToCart = () => {
    return cart.find((p) => p._id === product._id);
  };
  const handleCart = () => {
    if (isAddedToCart()) {
      removeFromCart();
    } else {
      addToCart();
    }
  };
  const addToCart = () => {
    setCart([...cart, product]);
    localStorage.setItem("cart", JSON.stringify([...cart, product]));
    toast.success("Item Added to cart");
  };

  const removeFromCart = () => {
    let myCart = [...cart];
    let index = myCart.findIndex((item) => item._id === product._id);
    myCart.splice(index, 1);
    setCart(myCart);
    localStorage.setItem("cart", JSON.stringify(myCart));
    toast.error("Item removed from cart");
  };
  const handleWishlist = () => {
    if (isWishlisted()) {
      removeFromWishlist();
    } else {
      addToWishlist();
    }
  };
  const addToWishlist = () => {
    setWishlist([...wishlist, product]);
    localStorage.setItem("wishlist", JSON.stringify([...wishlist, product]));
    toast.success("Item Added to wishlist");
  };

  const removeFromWishlist = () => {
    const updatedWishlist = wishlist.filter((p) => p.slug !== product.slug);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.error("Item removed from wishlist");
  };
  return (
    <Layout>
      <section>
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0 object-fit-contain"
                src={`/api/v1/product/product-photo/${product._id}`}
                alt="..."
                height="300"
                width={"350px"}
              />
            </div>
            <div className="col-md-6 details-section">
              <div className="small">{product?.category?.name}</div>
              <h1 className="mb-0 display-5 fw-bolder">{product.name}</h1>
              <p className="fw-bold mb-1 text-seconary">Details </p>
              <div className="list-unstyled ps-3 text-muted">
                <div>- {product.description}</div>
              </div>
              <div
                className="p-2 py-1 my-2 fw-bold"
                style={{
                  width: "fit-content",
                  backgroundColor: "#37e600",
                  fontSize: "12px",
                  color: "#fff",
                }}
              >
                40% OFF
              </div>
              <div className="fs-5 mb-4">
                <span
                  className="fw-bolder"
                  style={{
                    color: "#ff2323",
                  }}
                >
                  {product?.price?.toLocaleString("en-US", {
                    style: "currency",
                    currency: "INR",
                  })}
                </span>
                <span
                  className="text-decoration-line-through ms-2 text-muted"
                  style={{
                    fontSize: "14px",
                  }}
                >
                  {product
                    ? (product.price * 1.3)?.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })
                    : ""}
                </span>
                <li className="fs-6 mt-2 list-unstyled text-success">
                  {product?.quantity} in stock
                </li>
              </div>
              <div className="d-flex gap-4 ">
                <p className="my-1">Quantity:</p>
                <ProductQuantityController />
              </div>
              <div className="d-flex">
                <div
                  onClick={handleCart}
                  className="d-flex justify-content-center details-atc-btn"
                >
                  {isAddedToCart() ? (
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                    >
                      Added to cart
                    </button>
                  ) : (
                    <button
                      className="btn btn-outline-dark flex-shrink-0"
                      type="button"
                    >
                      Add to cart
                    </button>
                  )}
                </div>

                <div className="px-3" onClick={handleWishlist}>
                  {isWishlisted() ? (
                    <AiTwotoneHeart className="heart my-1" />
                  ) : (
                    <AiOutlineHeart className="no-heart my-1" />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Related items section*/}
      <section className="py-2 bg-light">
        <div className="container px-4 px-lg-5 mt-5 rel-section">
          <h2 className="fw-bolder mb-4">Related products</h2>
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 rel-cards">
            {relatedProducts.length < 1 && (
              <p className="text-center">No Similar Products found</p>
            )}
            {relatedProducts?.map((p, i) => (
              <ProductCard
                key={i}
                product={p}
                name={p.name}
                price={p.price}
                pid={p._id}
                pSlug={p.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ProductDetails;
