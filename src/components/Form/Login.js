import React from "react";
import { Link } from "react-router-dom";
import {Jumbotron} from "reactstrap"

function Login() {
  return (
    <Jumbotron className="mb-3 jumbotron">
    <div className="login-page">
      <div className="login-form">
        <div className="login-header">
          <div className="login-welcome">Welcome Back!</div>
          <div className="login-yourAccount">Login to your account</div>
        </div>
        <br/><br/>
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
          </div><br/>
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
            <Link to='/student'>
            <button type="submit" className="login-button">
              Login
            </button>
            </Link>
          </div>
          <div className="register-redirect">
            New user?{' '} <Link to="/register"><span>Create an account</span></Link>
          </div>
        </form>
      </div>
    </div>
    </Jumbotron>
  );
}

export default Login;
