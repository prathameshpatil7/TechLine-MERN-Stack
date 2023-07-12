import React, { useState } from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const ForgotPasssword = () => {
  const [email, setEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [answer, setAnswer] = useState("");

  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/forgot-password", {
        email,
        newPassword,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);

        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <Layout title={"Forgot Password - Ecommerce APP"}>
      <div className="form-container " style={{ minHeight: "90vh" }}>
        <form onSubmit={handleSubmit} className="form">
          <div className="header">Login</div>
          <div className="inputs">
            <input
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control input"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control input"
              id="exampleInputEmail1"
              placeholder="Enter Your favorite Sport Name "
              required
            />
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />

            <button type="submit" className="signin-btn">
              Reset
            </button>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ForgotPasssword;
