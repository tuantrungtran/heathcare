import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import logo from "../../images/logo.svg";
import { AUTH } from "../../utils/contants";
import { toast } from "react-toastify";

import "./login.css";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    if (email === "test@gmail.com" && password === "123") {
      localStorage.setItem(AUTH, "token");
      navigate("/my-page");
    } else {
      toast.error("Email or Password invalid", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light"
      });
    }
  };

  const handleEmailChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <section className="pb-5 login-wrapper">
        <div className="container py-5">
          <div className="row d-flex justify-content-center align-items-center ">
            <div className="card-body p-md-5 mx-md-4">
              <div className="text-center">
                <img src={logo} className="card-img" alt="logo" />
              </div>
              <p className="d-flex justify-content-start mb-2">
                Please login to your account
              </p>
              <div className="form-outline mb-4">
                <input
                  onBlur={handleEmailChange}
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  onBlur={handlePasswordChange}
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  required
                />
              </div>

              <div className="text-center pt-1 mb-5 pb-1">
                <Button
                  onClick={handleSubmit}
                  type="button"
                  className="btn-login">
                  Login
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
