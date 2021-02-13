import React, { useState } from "react";
import Logo from "../../assets/LEKTUR.png";
import { Link } from "react-router-dom"
import garis from "../../assets/Rectangle 2.png";
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


function SideBar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <div className="sidebar" >
            <div className="left" >
                <a href="/" className="logo" >
                    <img src={Logo} alt="logo" className="bl" />
                </a>
                <img src={garis} alt="garis" className="bl" />
            </div>
            <div className="center" >
                <input type="text" placeholder="Search Course or Lecturer" />
                <i className="fa fa-search icon" ></i>
            </div>
            <div className="right" >
                <ul >
                    <li>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle} size='md'  >
                            <DropdownToggle className='sidebar-dropdown'>
                                Category
                        <i className="fa fa-caret-down fa-lg dropbtn"></i>
                            </DropdownToggle>
                            <DropdownMenu>
                                <Link to='student'><DropdownItem>Student</DropdownItem></Link>
                                <Link to='/teacher'><DropdownItem>Teacher</DropdownItem></Link> 
                                {/* only added to check the routes, please move to the correct position later */}
                            </DropdownMenu>
                        </Dropdown>
                    </li>
                    <li>
                        For Teacher
                    </li >
                    <li >
                        <div className="vl" ></div>
                    </li>
                    <li>
                        <div className='sidebar-login-button'> 
                            <Link to='/login'>
                                <button > Login </button>
                            </Link>
                        </div>
                        <div className='sidebar-signup-button'>
                            <Link to='/register'>
                                <button>Sign Up </button>
                            </Link>
                        </div>
                    </li>
                  
                    <li >
                        <Link to='/teacher'>Teacher</Link> {/* only added to check the routes, please move to the correct position later */}
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
