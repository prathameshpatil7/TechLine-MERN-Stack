import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { toast } from "react-hot-toast";
import "../../styles/AuthStyles.css";
import { useAuth } from "../../context/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useAuth();

  const navigate = useNavigate();
  const location = useLocation();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/login", {
        email,
        password,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate(location.state || "/");
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
      <div className="form-container ">
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
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="form-control input"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
              value={password}
            />
            <NavLink to="/forgot-password" className="forget ">
              Forget password ?
            </NavLink>
            <button type="submit" className="signin-btn">
              Submit
            </button>

            <p className="signup-link">
              Don't have an account? <NavLink to="/register">Sign up</NavLink>
            </p>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Login;
