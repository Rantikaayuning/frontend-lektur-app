import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="login-header">
          <div
            style={{
              fontSize: "24px",
              fontWeight: "bold",
            }}
          >
            Welcome Back!
          </div>
          <div
            style={{
              fontSize: "18px",
              fontWeight: "400",
            }}
          >
            Login to your account
          </div>
        </div>
        <div>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Email*
          </p>
          <div
            style={{
              borderBottom: "2px grey solid",
              paddingTop: "8px",
              paddingBottom: "2px",
              background: "whitesmoke",
            }}
          >
            <input
              type="text"
              placeholder="john@doe.com"
              className="login-email"
            />
          </div>
          <p
            style={{
              fontWeight: "bold",
              marginBottom: "7px",
            }}
          >
            Password*
          </p>
          <div
            style={{
              borderBottom: "2px grey solid",
              paddingTop: "8px",
              paddingBottom: "2px",
              background: "whitesmoke",
            }}
          >
            <input
              type="password"
              placeholder="********"
              className="login-password"
            />
          </div>
          <div
            style={{
              textAlign: "right",
              padding: "5px 0px 25px 0px",
            }}
          >
            Forgot Password
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              paddingBottom: "15px",
            }}
          >
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="register-redirect">
            New user?{" "}
            <Link to="#" style={{ textDecoration: "none", color: "blue" }}>
              Create an account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
