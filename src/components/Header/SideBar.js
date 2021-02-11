import React from "react";
import Logo from "../../assets/LEKTUR.png";
import garis from "../../assets/Rectangle 2.png";

function SideBar() {
    return ( <
        div className = "sidebar fixed" >
        <
        div className = "left" >
        <
        a href = "/sidebar"
        className = "logo" >
        <
        img src = { Logo }
        alt = "logo"
        className = "bl" / >
        <
        /a>{" "} <
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
        <
        button > Sign Up < /button>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /div>
    );
}

export default SideBar;