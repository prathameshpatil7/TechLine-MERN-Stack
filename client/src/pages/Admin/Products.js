import React, { useState, useEffect } from "react";
import AdminMenu from "../../components/Layout/AdminMenu";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/AdminAllProducts.scss";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";
import AdminProductCard from "../../components/Card/AdminProductCard";
const Products = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  //getall products
  const getAllProducts = async () => {
    try {
      const { data } = await axios.get("/api/v1/product/get-product");
      setProducts(data.products);
    } catch (error) {
      console.log(error);
      toast.error("Someething Went Wrong");
    }
  };

  //lifecycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout>
      <div className="container-fluid p-3 dashboard all-products">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 all-products">
            <h1 className="text-center">All Products List</h1>
            {/* <div className="row">
              {products?.map((p) => (
                <Link
                  key={p._id}
                  to={`/dashboard/admin/product/${p.slug}`}
                  className="product-link col-lg-4 col-md-12 mb-4"
                >
                  <div className="card">
                    <div
                      className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
                      data-mdb-ripple-color="light"
                    >
                      <img
                        src={`/api/v1/product/product-photo/${p._id}`}
                        className="w-100"
                        alt="product img"
                      />
                      <a href="#!">
                        <div className="mask">
                          <div className="d-flex justify-content-start align-items-end h-100">
                            <h5>
                              <span className="badge bg-primary ms-2">New</span>
                            </h5>
                          </div>
                        </div>
                        <div className="hover-overlay">
                          <div
                            className="mask"
                            style={{
                              backgroundColor: "rgba(251, 251, 251, 0.15)",
                            }}
                          />
                        </div>
                      </a>
                    </div>
                    <div className="card-body">
                      <div href className="text-reset">
                        <h5 className="card-title mb-3">{p.name}</h5>
                      </div>
                      {console.log(p)}
                      <div href className="text-reset">
                        <p>{p.category.name}</p>
                      </div>
                      <h6 className="mb-3">₹ {p.price}</h6>
                    </div>
                  </div>
                </Link>
              ))}
            </div> */}
            <div className="container admin-all-products">
              <div className="table-wrap">
                <table className="table table-responsive table-borderless">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th className="text-left">Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products?.map((p) => (
                      <AdminProductCard product={p} key={p._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
