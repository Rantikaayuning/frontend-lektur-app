import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

import Logo from "../../assets/LEKTUR.png";
import garis from "../../assets/Rectangle 2.png";
import { postLogout } from "../../redux/actions/UserAction";

function SideBar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdown, setDropDown] = useState("Set Role");

  const toggle = () => setDropdownOpen((prevState) => !prevState);

  //   // LOGIN
  //   useEffect(() => {
  //     if (!props.token) {
  //       props.history.push("login");
  //     }
  //   }, [props]);

  // LOGOUT
  const handleLogout = () => {
    props.postLogout();
  };

  return (
    <div className="sidebar">
      <div className="left">
        <a href="/" className="logo">
          <img src={Logo} alt="logo" className="bl" />
        </a>
        <img src={garis} alt="garis" className="bl" />
      </div>
      <div className="center">
        <input type="text" placeholder="Search Course or Lecturer" />
        <i className="fa fa-search icon"></i>
      </div>
      <div className="right">
        <ul>
          <li>
            <Dropdown isOpen={dropdownOpen} toggle={toggle} size="md">
              <DropdownToggle className="sidebar-dropdown">
                Category
                <i className="fa fa-caret-down fa-lg dropbtn"></i>
              </DropdownToggle>
              <DropdownMenu>
                <Link to="student">
                  <DropdownItem onClick={() => setDropDown("For Student")}>
                    For Student
                  </DropdownItem>
                </Link>
                <Link to="/teacher">
                  <DropdownItem onClick={() => setDropDown("For Teacher")}>
                    For Teacher
                  </DropdownItem>
                </Link>
                {/* only added to check the routes, please move to the correct position later */}
              </DropdownMenu>
            </Dropdown>
          </li>
          <li>{dropdown}</li>
          <li>
            <div className="vl"></div>
          </li>
          <li>
            <div className="sidebar-login-button">
              {props.token ? (
                <>
                  <button onClick={handleLogout}>Logout</button>
                </>
              ) : (
                <>
                  <div className="sidebar-login-button">
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  </div>
                  <div className="sidebar-signup-button">
                    <Link to="/register">
                      <button>Sign Up </button>
                    </Link>
                  </div>
                </>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.users.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postLogout: () => dispatch(postLogout()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
