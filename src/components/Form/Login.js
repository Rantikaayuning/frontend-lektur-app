import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Jumbotron } from "reactstrap";
// import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { postLogin } from "../../redux/actions/UserAction";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);

    props.postLogin(email, password);
  };

  useEffect(() => {
    if (props.token) {
      props.history.push("/");
    }
  }, [props]);

  // const dispatch = useDispatch();

  // const handleLogin = (e) => {
  //   setUserLogin({
  //     ...userLogin,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitLogin = (e) => {
  //   const body = {
  //     email: userLogin.email,
  //     password: userLogin.password,
  //   };
  //   dispatch(postLogin(body));
  // };

  return (
    <Jumbotron className="mb-3 jumbotron">
      <div className="login-page">
        <div className="login-form">
          <div className="login-header">
            <div className="login-welcome">Welcome Back!</div>
            <div className="login-yourAccount">Login to your account</div>
          </div>
          <br />
          <br />
          <form onSubmit={handleSubmit}>
            <p className="email">
              Email<span>*</span>
            </p>
            <div className="email-password-field">
              <input
                className="login-email"
                type="text"
                placeholder="john@doe.com"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
            </div>
            <br />
            <p className="password">
              Password<span>*</span>
            </p>
            <div className="email-password-field">
              <input
                className="login-password"
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
            <div className="forget-pass">
              <Link to="#">Forgot Password</Link>
            </div>
            <div className="btn">
              <button className="login-button">Login</button>
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

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postLogin: (email, password) => dispatch(postLogin(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
