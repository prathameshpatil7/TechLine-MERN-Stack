/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useCategory from "../hooks/useCategory";
import Layout from "../components/Layout/Layout";
import "../styles/Categories.scss";
const Categories = () => {
  const categories = useCategory();
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
          <div className="row mt-2 g-4">
            {categories.map((c) => (
              <div className="col-md-3" key={c._id}>
                <div className="card p-1">
                  <div className="d-flex justify-content-between align-items-center p-2">
                    <div className="flex-column lh-1 imagename">
                      {" "}
                      <span>{c.name}</span>{" "}
                    </div>
                    <div>
                      {" "}
                      <Link to={`/category/${c.slug}`}>
                        <img
                          src="https://i.imgur.com/b9zkoz0.jpg"
                          height={100}
                          width={100}
                        />{" "}
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Categories;
