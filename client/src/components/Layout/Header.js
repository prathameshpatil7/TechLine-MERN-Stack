import React from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../context/auth";
import toast from "react-hot-toast";
import SearchInput from "../Form/SearchInput";
import useCategory from "../../hooks/useCategory";
import { useCart } from "../../context/cart";
import { Badge } from "antd";
import { BsCart4 } from "react-icons/bs";
import { AiTwotoneHeart } from "react-icons/ai";
import brandLogo from "../../assets/images/brand-logo.png";
import { useWishlist } from "../../context/wishlist";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const [wishlist] = useWishlist();
  const categories = useCategory();
  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };
  return (
    <>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-0 px-4">
          <div className="container-fluid">
            {/* Logo */}
            <Link to="/" className="navbar-brand py-0 px-3">
              <img
                src={brandLogo}
                width="auto"
                height="60"
                className="d-inline-block align-top"
                alt="logo"
              ></img>
            </Link>
            {/* Navigation Toggler Button */}
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>

            {/* Navigation Links */}
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item me-1">
                  <NavLink to="/" className="nav-link ">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown me-1">
                  <Link
                    className="nav-link dropdown-toggle"
                    to={"/categories"}
                    data-bs-toggle="dropdown"
                  >
                    Categories
                  </Link>
                  <ul className="dropdown-menu">
                    <li>
                      <Link className="dropdown-item" to={"/categories"}>
                        All Categories
                      </Link>
                    </li>
                    {categories?.map((c) => (
                      <li>
                        <Link
                          className="dropdown-item"
                          to={`/category/${c.slug}`}
                        >
                          {c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
                {/* Search Input */}
                <SearchInput />
                {!auth?.user ? (
                  <>
                    <li className="nav-item">
                      <NavLink to="/register" className="nav-link">
                        Register
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink to="/login" className="nav-link">
                        Login
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item dropdown">
                      <NavLink
                        className="nav-link dropdown-toggle"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        style={{ border: "none" }}
                      >
                        {auth?.user?.name}
                      </NavLink>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink
                            to={`/dashboard/${
                              auth?.user?.role === 1 ? "admin" : "user"
                            }`}
                            className="dropdown-item"
                          >
                            Dashboard
                          </NavLink>
                        </li>
                        <li>
                          <NavLink
                            onClick={handleLogout}
                            to="/login"
                            className="dropdown-item"
                          >
                            Logout
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                  </>
                )}
                <li className="nav-item pe-3">
                  <NavLink to="/wishlist" className="nav-link">
                    <Badge count={wishlist?.length} showZero offset={[10, -5]}>
                      <AiTwotoneHeart style={{ height: "20", width: "20" }} />
                    </Badge>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/cart" className="nav-link">
                    <Badge count={cart?.length} showZero offset={[10, -5]}>
                      <BsCart4 style={{ height: "20", width: "20" }} />
                    </Badge>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
