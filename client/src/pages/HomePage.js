import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Checkbox, Radio } from "antd";
import { Prices } from "../components/Prices";
import { useCart } from "../context/cart";
import axios from "axios";
import toast from "react-hot-toast";
import Layout from "./../components/Layout/Layout";
import { AiOutlineReload } from "react-icons/ai";
import "../styles/Homepage.scss";
import BannerCarousel from "../components/Carousel/Carousel";
import ProductCard from "../components/Card/ProductCard";
import CategoryCarousel from "../components/Carousel/CategoryCarousel";

const HomePage = () => {
  const navigate = useNavigate();
  const [cart, setCart] = useCart();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [checked, setChecked] = useState([]);
  const [radio, setRadio] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  //get all cat
  const getAllCategory = async () => {
    try {
      const { data } = await axios.get("/api/v1/category/get-category");
      if (data?.success) {
        setCategories(data?.category);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllCategory();
    getTotal();
  }, []);
  //get products
  const getAllProducts = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts(data.products);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  //getTOtal COunt
  const getTotal = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/product-count");
      setTotal(data?.total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (page === 1) return;
    loadMore();
  }, [page]);
  //load more
  const loadMore = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(`/api/v1/product/product-list/${page}`);
      setLoading(false);
      setProducts([...products, ...data?.products]);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // filter by cat
  const handleFilter = (value, id) => {
    let all = [...checked];
    if (value) {
      all.push(id);
    } else {
      all = all.filter((c) => c !== id);
    }
    setChecked(all);
  };
  useEffect(() => {
    if (!checked.length && !radio.length) getAllProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked.length, radio.length]);

  useEffect(() => {
    if (checked.length || radio.length) filterProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [checked, radio]);

  //get filterd product
  const filterProduct = async () => {
    try {
      const { data } = await axios.post("/api/v1/product/product-filters", {
        checked,
        radio,
      });
      setProducts(data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  const handleResetFilters = () => {
    setChecked([]);
    setRadio([]);
  };
  return (
    <Layout title={"ALl Products - Best offers "}>
      {/* banner image */}
      {/* <img
        // src="/images/banner.jpeg"
        // src="/images/banner2.png"
        // src="/images/1.png"
        // src="/images/2.png"
        src="/images/3.png"
        className="banner-img"
        alt="bannerimage"
        width={"100%"}
      /> */}
      <div className="bg-white w-100">
        {/* <div className="container"> */}
        <BannerCarousel />
        {/* </div> */}
      </div>
      {/* banner image */}
      <div className="row mx-0 home-page">
        {/* <div className="col-md-2 pb-3 ps-0 border-right">
          <div className="container">
            <div className="filters-tab px-2 fw-bold">Filters</div>

            <div className="filters-tab px-2">
              <div className="fw-bold pb-2">Filter By Category</div>
              <div className="d-flex flex-column">
                {categories?.map((c) => (
                  <div key={c._id}>
                    <input
                      type="checkbox"
                      name={c.name}
                      value="Bike"
                      checked={checked.includes(c._id)}
                      onChange={(e) => handleFilter(e.target.checked, c._id)}
                      className="categories-checkbox"
                    />
                    <label for={c.name} className="categories-checkbox ps-2">
                      {c.name}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* // price filter  
            <div className="filters-tab px-2">
              <div className="fw-bold pb-2">Filter By Price</div>
              <div className="d-flex flex-column">
                <Radio.Group
                  onChange={(e) => setRadio(e.target.value)}
                  value={radio}
                >
                  {Prices?.map((p) => (
                    <div key={p._id}>
                      <Radio value={p.array}>{p.name}</Radio>
                    </div>
                  ))}
                </Radio.Group>
              </div>
            </div>
            <div className="d-flex flex-column">
              <button className="btn reset-btn" onClick={handleResetFilters}>
                RESET FILTERS
              </button>
            </div>
          </div>
        </div> */}
        <div className="container-fluid pb-4">
          <div className="container-fluid mt-2">
            <CategoryCarousel />
          </div>
          <h1 className="text-center">All Products</h1>

          <div className="container ps-5">
            <div className="row">
              {products?.map((p, i) => (
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
          {products.length === 0 && (
            <div
              className="d-flex align-items-center"
              style={{ minHeight: "100vh" }}
            >
              <div className="container vertical-center ">
                <div className="text-center">
                  <p>No Products Found</p>
                </div>
              </div>
            </div>
          )}
          {products && products.length < total && (
            <div className="m-2 p-3">
              {products.length !== 0 && (
                <button
                  className="btn loadmore"
                  onClick={(e) => {
                    e.preventDefault();
                    setPage(page + 1);
                  }}
                >
                  {loading ? (
                    "Loading ..."
                  ) : (
                    <>
                      {" "}
                      Loadmore <AiOutlineReload />
                    </>
                  )}
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
