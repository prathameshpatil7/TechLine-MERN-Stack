import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import "../../styles/AdminAllProducts.scss";
import { BiEdit } from "react-icons/bi";
import { RiDeleteBin6Line } from "react-icons/ri";

const AdminProductCard = ({ product }) => {
  const navigate = useNavigate();

  //delete a product
  const handleDelete = async (name, id) => {
    try {
      let answer = window.prompt(
        `Are You Sure want to delete this product ? \nEnter "${
          name ? name : ""
        }" in textbox. `
      );
      if (answer === name) {
        await axios.delete(`/api/v1/product/delete-product/${id}`);
        toast.success("Product Deleted Succfully");
        setTimeout(() => {
          navigate("/dashboard/admin/products");
        }, 100);
      } else return;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <tr className="align-middle alert border-bottom" role="alert">
        <td className="text-center">
          <img
            className="pic"
            src={`/api/v1/product/product-photo/${product._id}`}
            alt=""
          />
        </td>
        <td>
          <div>
            <p className="m-0 fw-bold">{product.name}</p>
            <p className="m-0 text-muted">{product.description}</p>
          </div>
        </td>
        <td className="text-center">
          <div className="fw-600">₹{product.price}</div>
        </td>
        <td className="text-center">
          <input
            className="input"
            disabled
            type="text"
            value={product.quantity}
          />
        </td>
        <td className="d-flex align-items-center justify-content-center gap-2">
          <div className="py-3 h4">
            <Link
              key={product._id}
              to={`/dashboard/admin/product/${product.slug}`}
              className="text-primary"
            >
              <BiEdit />
            </Link>
          </div>
          <div
            className="py-3 h4 text-danger"
            onClick={() => handleDelete(product.name, product._id)}
          >
            <RiDeleteBin6Line />
          </div>
        </td>
      </tr>
    </>
  );
};

export default AdminProductCard;
