import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { NavLink } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [answer, setAnswer] = useState("");
  const navigate = useNavigate();
  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/register", {
        name,
        email,
        password,
        phone,
        address,
        answer,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        console.log(res.data && res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 500);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container">
        <form onSubmit={handleSubmit} className="form">
          <div className="header">Register </div>
          <div className="inputs">
            <input
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control input"
              id="exampleInputEmail1"
              placeholder="Enter Your Name "
              required
              type="text"
            />
            <input
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control input"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
            <input
              value={password}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control input"
              id="exampleInputEmail1"
              placeholder="Enter Your Password "
              required
            />
            <input
              value={phone}
              type="text"
              onChange={(e) => setPhone(e.target.value)}
              className="form-control input"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone Number"
              required
            />
            <input
              value={address}
              type="text"
              onChange={(e) => setAddress(e.target.value)}
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="Enter Your Address"
              required
            />
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="What is Your Favorite sports"
              required
            />

            <button type="submit" className="signin-btn">
              Submit
            </button>

            <p className="signup-link">
              Already have an account? <NavLink to="/login">Sign In</NavLink>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
