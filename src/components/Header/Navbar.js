import React, { useState, useEffect } from "react";
import Logo from "../../assets/LEKTUR.png";
import { Link } from "react-router-dom";
import garis from "../../assets/Rectangle 2.png";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { getUserProfile } from "../../redux/actions/UserAction";
import { getMovieSearch } from "../../redux/actions/CoursesAction";
import { connect } from "react-redux";
import Cookies from "js-cookie";

import profile from "../../assets/Ellipse 2.png";

function Navbar(props) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [search, setSearch] = useState("");

  const toggle = () => setDropdownOpen(prevState => !prevState);

  useEffect(() => {
    getUserProfile();
  }, []);
  const handleChange = e => {
    setSearch(e.target.value);
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
        <input
          type="text"
          placeholder="Search Course or Lecturer"
          onChange={handleChange}
        />
        <i
          className="fa fa-search icon"
          onClick={() => {
            console.log(props.searchCourse);
            getMovieSearch(search);
          }}
        ></i>
      </div>
      <div className="right">
        <ul>
          <li className="li-1">
            <Dropdown isOpen={dropdownOpen} toggle={toggle} size="md">
              <DropdownToggle className="sidebar-dropdown" color="none">
                <span>
                  Category <i className="fa fa-caret-down fa-lg dropbtn"></i>
                </span>
              </DropdownToggle>
              <DropdownMenu className="sidebar-dropdown-menu-item">
                <Link to="" className="dropdown-item">
                  <DropdownItem>Bussiness</DropdownItem> {/*Student*/}
                </Link>
                <Link to="" className="dropdown-item">
                  <DropdownItem>Art</DropdownItem> {/*Teacher*/}
                </Link>
              </DropdownMenu>
            </Dropdown>
          </li>
          <li>
            <div>
              {props.userProfile ? (
                <>
                  <div className="drop-img">
                    <div className="vl"></div>
                    <Link>
                      <img
                        src={profile}
                        alt="profile"
                        className="profile-img"
                      />
                    </Link>
                    <span> {props.userProfile.fullname}</span>
                    {props.userProfile.status === 0 ? (
                      <div className="dropdown-content-img">
                        <Link to="/student-courses" className="drop">
                          Dashboard
                        </Link>
                        <Link to="/" className="drop">
                          <div
                            onClick={() => {
                              Cookies.remove("token");
                              window.open("/", "_self");
                            }}
                          >
                            Sign Out
                          </div>
                        </Link>
                      </div>
                    ) : (
                      <div className="dropdown-content-img">
                        <Link to="/teacher-dashboard" className="drop">
                          Dashboard
                        </Link>
                        <Link to="/" className="drop">
                          <div
                            onClick={() => {
                              // localStorage.removeItem("token");
                              Cookies.remove("token");
                              window.open("/", "_self");
                            }}
                          >
                            Sign Out
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                </>
              ) : (
                <div className="form-navbar">
                  <div className="for">
                    <Link to="/register">Select Role</Link>
                  </div>
                  <div className="vl"></div>
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
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    userProfile: state.users.userProfile,
    searchCourse: state.courses.searchCourse,
  };
};

export default connect(mapStateToProps, { getUserProfile, getMovieSearch })(
  Navbar
);
