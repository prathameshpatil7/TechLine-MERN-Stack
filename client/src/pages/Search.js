import React from "react";
import Layout from "./../components/Layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const navigate = useNavigate();
  const [values, setValues] = useSearch();
  return (
    <Layout title={"Search results"}>
      <div className="container-fluid col-md-12 mt-5 ">
        <div className="text-center">
          <h1>Search Resuts</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Showing results for ${values?.results.length} products`}
          </h6>
          <div className="d-flex justify-content-center flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2 col-md-3 mx-2" key={p._id}>
                <img
                  src={`/api/v1/product/product-photo/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title" title={p.name}>
                      {p.name.length > 20
                        ? p.name.substring(0, 20) + "..."
                        : p.name}
                    </h5>
                    <h5 className="card-title card-price">
                      {p.price.toLocaleString("en-US", {
                        style: "currency",
                        currency: "INR",
                      })}
                    </h5>
                  </div>
                  <p className="card-text" title={p.description}>
                    {p.description.substring(0, 15)}...
                  </p>
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      onClick={() => navigate(`/product/${p.slug}`)}
                    >
                      More Details
                    </button>
                    <button
                      className="btn btn-dark ms-1"
                      // onClick={() => {
                      //   setCart([...cart, p]);
                      //   localStorage.setItem(
                      //     "cart",
                      //     JSON.stringify([...cart, p])
                      //   );
                      //   toast.success("Item Added to cart");
                      // }}
                    >
                      ADD TO CART
                    </button>
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

export default Search;
