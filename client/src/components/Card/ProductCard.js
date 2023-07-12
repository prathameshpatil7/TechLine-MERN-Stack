import React from "react";
import { Rate } from "antd";
import { Link } from "react-router-dom";
import { AiTwotoneHeart, AiOutlineHeart } from "react-icons/ai";
import { useCart } from "../../context/cart";
import toast from "react-hot-toast";
import { useWishlist } from "../../context/wishlist";

const ProductCard = (props) => {
  const { product = {}, name = "", price = 0, pid = "", pSlug = "" } = props;

  const [cart, setCart] = useCart();
  const [wishlist, setWishlist] = useWishlist();

  const isWishlisted = () => {
    return wishlist.find((product) => product.slug === pSlug);
  };
  const isAddedToCart = () => {
    return cart.find((product) => product._id === pid);
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
    let index = myCart.findIndex((item) => item._id === pid);
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
    const updatedWishlist = wishlist.filter(
      (product) => product.slug !== pSlug
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
    toast.error("Item removed from wishlist");
  };

  return (
    <div className="col-md-3 col-sm-6">
      <div className="product-grid">
        <div className="product-image">
          <Link to={`/product/${pSlug}`} className="image">
            <img alt="" src={`/api/v1/product/product-photo/${pid}`} />
          </Link>
          <ul className="product-links">
            <Link to="#">
              <li onClick={handleWishlist}>
                {isWishlisted() ? (
                  <AiTwotoneHeart className="heart" />
                ) : (
                  <AiOutlineHeart className="no-heart" />
                )}
              </li>
            </Link>
          </ul>
        </div>
        <div className="product-content">
          <h3 className="title" title="More Details">
            <Link to={`/product/${pSlug}`}>{name}</Link>
          </h3>
          <Rate
            allowHalf
            defaultValue={2.5}
            disabled
            style={{ fontSize: "16px" }}
          />
          <div className="row pt-2">
            <div className="col-5 col my-auto">
              <div className="price-text">Price:</div>
              <div className="price">₹ {price}</div>
            </div>
            <div className="col-7 col my-auto bg-error">
              <div
                onClick={handleCart}
                className="d-flex justify-content-center atc-btn"
              >
                {isAddedToCart() ? (
                  <button>Added to cart</button>
                ) : (
                  <button>Add to cart</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
