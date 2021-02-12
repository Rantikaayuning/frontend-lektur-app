import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login-page">
      <div className="login-form">
        <div className="login-header">
          <div className="login-welcome">Welcome Back!</div>
          <div className="login-yourAccount">Login to your account</div>
        </div>
        <form>
          <p className="email">
            Email<span>*</span>
          </p>
          <div className="email-password-field">
            <input
              type="email"
              placeholder="john@doe.com"
              className="login-email"
            />
          </div>
          <p className="password">
            Password<span>*</span>
          </p>
          <div className="email-password-field">
            <input
              type="password"
              placeholder="********"
              className="login-password"
            />
          </div>
          <div className="forget-pass">Forgot Password</div>
          <div className="btn">
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          <div className="register-redirect">
            New user? <Link to="#">Create an account</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
