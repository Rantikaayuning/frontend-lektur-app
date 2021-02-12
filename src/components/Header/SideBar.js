import React from "react";
import Logo from "../../assets/LEKTUR.png";
import {Link} from "react-router-dom"
import garis from "../../assets/Rectangle 2.png";

function SideBar() {
    return ( 
        <div className = "sidebar" >
            <div className = "left" >
                <a href = "/" className = "logo" >
                    <img src = { Logo } alt = "logo" className = "bl"/>
                </a>{" "} 
                    <img src = { garis } alt = "garis" className = "bl" />
            </div>{" "} 
            <div className = "center" >
                <input type = "text" placeholder = "Search Course or Lecturer"/>
                <i className = "fa fa-search icon" ></i>{" "} 
            </div>{" "} 
            <div className = "right" >
                <ul >
                    <li > 
                        Category 
                    </li> 
                    <li> 
                        For Teacher 
                    </li >
                    <li >
                        <div className = "vl" ></div>{" "}
                    </li>{" "} 
                    <li className='sidebar-login-button'> { " " }
                        <Link to='/login'>
                            <button > Login </button>{" "} 
                        </Link>
                    </li>{" "} 
                    <li className='sidebar-signup-button'>
                        <Link to='/register'>
                            <button>Sign Up </button>{" "} 
                        </Link>
                    </li>{" "} 
                </ul>{" "} 
            </div>{" "}
        </div>
    );
}

export default SideBar;
