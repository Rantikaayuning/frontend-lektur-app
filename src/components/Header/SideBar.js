import React from "react";
import Logo from "../../assets/LEKTUR.png";
import { Link } from "react-router-dom";
import garis from "../../assets/Rectangle 2.png";

function SideBar() {
    function myFunction() {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches(".dropbtn")) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    };
    return ( <
        div className = "sidebar fixed" >
        <
        div className = "left" >
        <
        Link to = "/"
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
        li className = "category" > { " " }
        Category { " " } <
        i className = "fa fa-caret-down fa-lg dropbtn"
        onClick = { myFunction } > { " " } <
        /i>{" "} <
        div id = "myDropdown"
        className = "dropdown-content" >
        <
        a href = "/student" > I 'm a Teacher </a>{" "} <
        a href = "teacher" > I 'm a Student </a>{" "} <
        /div>{" "} <
        /li>{" "} <
        li > For Teacher < /li>{" "} <
        li >
        <
        div className = "vl" > < /div>{" "} <
        /li>{" "} <
        li > { " " } <
        span > Login < /span>{" "} <
        /li>{" "} <
        li >
        <
        Link to = "/register" >
        <
        button > Sign Up < /button>{" "} <
        /Link>{" "} <
        /li>{" "} <
        /ul>{" "} <
        /div>{" "} <
        /div>
    );
}

export default SideBar;