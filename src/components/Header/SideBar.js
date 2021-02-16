import React, { useState, useEffect } from "react";
import Logo from "../../assets/LEKTUR.png";
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import garis from "../../assets/Rectangle 2.png";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { getUserProfile } from "../../redux/actions/UserAction";
import { connect } from "react-redux";

import profile from "../../assets/Ellipse 2.png"

function SideBar(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const {  status } = useSelector((state) => state.users); 

    const [isStatus, setIsStatus] = useState(true)

    const changeStatus = () => {
        setIsStatus(!isStatus);
      }; 

    useEffect(() => {
        props.getUserProfile();
    }, []);

    return (
        <div className="sidebar" >
            <div className="left" >
                <a href="/" className="logo" >
                    <img src={Logo} alt="logo" className="bl" />
                </a>{" "}
                <img src={garis} alt="garis" className="bl" />
            </div>{" "}
            <div className="center" >
                <input type="text" placeholder="Search Course or Lecturer" />
                <i className="fa fa-search icon" ></i>{" "}
            </div>{" "}
            <div className="right" >
                <ul >
                    <li>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} size='md'  >
                            <DropdownToggle className='sidebar-dropdown' color="none">
                                <span>Category{' '}<i className="fa fa-caret-down fa-lg dropbtn"></i></span>
                            </DropdownToggle>
                            <DropdownMenu className='sidebar-dropdown-menu-item'>
                                <Link to='' className='dropdown-item'><DropdownItem>Student</DropdownItem></Link>
                                <Link to='' className='dropdown-item'><DropdownItem>Teacher</DropdownItem></Link> 
                             </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        <div>
                        {props.userProfile ? (
                            <div className="drop-img">
                                 <div className="vl" ></div>
                                <Link ><img src={profile} alt="profile" className="profile-img"/></Link>
                                <span>{" "}{props.userProfile.fullname}</span>
                                <div className="dropdown-content-img">
                                    {status === 0 ? (
                                        <Link to="/student-courses" className="drop">Dashboard</Link>
                                    ) : (
                                        <Link to="/teacher-dashboard" className="drop">Dashboard</Link>
                                    )}
                                        <Link to='/register-teacher' className="drop">
                                            <div onClick={() => { localStorage.removeItem("token");
                                                                    window.open("/", "_self")}}
                                            >
                                                Sign Out 
                                            </div>
                                        </Link>  
                                    </div>
                            </div>
                            ) : (
                            <div className="form-navbar">
                                {isStatus === true ? (
                                <div className="for">
                                    <Link to='/' isTeacher={changeStatus}>
                                      For Teacher
                                    </Link>
                                </div>
                                ) : (
                                <div className="for">
                                    <Link to='/' isStudent={changeStatus}>
                                    For Student
                                    </Link>
                                </div>
                            )}
                                <div className="vl" ></div>
                                <div className='sidebar-login-button'> 
                                    <Link to='/login'>
                                        <button > 
                                        Login 
                                        </button>
                                    </Link>
                                </div>
                                <div className='sidebar-signup-button'>
                                    <Link to='/register'>
                                        <button>Sign Up </button>
                                    </Link>
                                </div>
                            </div>)
                            }
                        </div>
                    </li>
                </ul>{" "}
            </div>{" "}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.users.userProfile,
    };
};

export default connect(mapStateToProps, { getUserProfile })(SideBar);
