import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Jumbotron } from "reactstrap";
import { useDispatch } from "react-redux";

import { postLogin} from "../../redux/actions/UserAction";

function Login(props) {
  const [userLogin, setUserLogin] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogin = (e) => {
    setUserLogin({
      ...userLogin,
      [e.target.name]: e.target.value,
    });
  };

  const submitLogin = (e) => {
    const body = {
      email: userLogin.email,
      password: userLogin.password,
    };
    dispatch(postLogin(body));
    history.push("/");
  };

  return (
    <Jumbotron className="jumbotron">
      <div className="login-page">
        <div className="login-form">
          <div className="login-header">
            <div className="login-welcome">Welcome Back!</div>
            <div className="login-yourAccount">Login to your account</div>
          </div>
          <br />
          <br />
          <form>
            <p className="email">
              Email<span>*</span>
            </p>
            <div className="email-password-field">
              <input
                type="email"
                placeholder="john@doe.com"
                name="email"
                className="login-email"
                onChange={(e) => handleLogin(e)}
              />
            </div>
            <br />
            <p className="password">
              Password<span>*</span>
            </p>
            <div className="email-password-field">
              <input
                type="password"
                placeholder="********"
                name="password"
                className="login-password"
                onChange={(e) => handleLogin(e)}
              />
            </div>
            <div className="forget-pass">Forgot Password</div>
            <div className="btn-login">
              <button
                type="submit"
                className="login-button"
                onClick={submitLogin}
              >
                Login
              </button>
            </div>
            <div className="register-redirect">
              New user?{" "}
              <Link to="/register">
                <span>Create an account</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </Jumbotron>
  );
}

export default Login;
