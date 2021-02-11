import React from "react";
import Logo from "../../assets/LEKTUR.png";
import {Link} from "react-router-dom"
import garis from "../../assets/Rectangle 2.png";

function SideBar() {
    return ( <
        div className = "sidebar fixed" >
        <
        div className = "left" >
        <Link to="/"
        className = "logo" >
        <
        img src = { Logo }
        alt = "logo"
        className = "bl" / >
        <
        /Link>{" "} <
        img src = { garis }
        alt = "garis"
        className = "bl" / >
        <
        /div>{" "} <
        div className = "center" >
        <
        input type = "text"
        placeholder = "Search Course or Lecturer" / >
        <
        i className = "fa fa-search icon" > < /i>{" "} <
        /div>{" "} <
        div className = "right" >
        <
        ul >
        <
        li > Category < /li> <li> For Teacher </li >
        <
        li >
        <
        div className = "vl" > < /div>{" "} <
        /li>{" "} <
        li > { " " } <
        span > Login < /span>{" "} <
        /li>{" "} <
        li >
        <Link to="/register"><
        button > Sign Up < /button></Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /div>
    );
}

export default SideBar;
