import React, { useState } from "react";
import Logo from "../../assets/LEKTUR.png";
import { Link } from "react-router-dom"
import {useSelector} from "react-redux"
import garis from "../../assets/Rectangle 2.png";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import profile from "../../assets/Ellipse 2.png"

function SideBarStudent(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    const { isAuthentificated, role } = useSelector((state) => state.users); 

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
                                <Link to='/student-courses' className='dropdown-item'><DropdownItem>Student</DropdownItem></Link>
                                <Link to='/teacher-dashboard' className='dropdown-item'><DropdownItem>Teacher</DropdownItem></Link> 
                                {/* only added to check the routes, please move to the correct position later */}
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <Link to='/'>
                    <li onClick={props.isOpen}>
                        For Teacher
                    </li >    
                    </Link>
                    <li >
                        <div className="vl" ></div>{" "}
                    </li>
                    <li>
                        <div>
                        {isAuthentificated ? (
                            <div className="drop-img">
                                <Link ><img src={profile} /></Link>
                                <span>{" "}John Doe</span>
                                <div className="dropdown-content-img">
                                    {role ? (
                                        <Link to="/student" className="drop">Dashboard</Link>
                                    ) : (
                                        <Link to="/teacher" className="drop">Dashboard</Link>
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
                            <div>
                                <div className='sidebar-login-button'> 
                                    <Link to='/login'>
                                        <button > 
                                        Login 
                                        </button>
                                    </Link>
                                </div>
                                <div className='sidebar-signup-button'>
                                    <Link to='/register-teacher'>
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

export default SideBarStudent;
