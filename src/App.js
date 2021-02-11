import React from "react";

import "./styles/App.css";
import "./styles/Props.css";

//Components

import SideBar from "./components/Header/SideBar";
import Jumbo from "./components/Header/Jumbotron";

function App() {
    return ( <
        div className = "App flex" >
        <
        SideBar / >
        <
        Jumbo / >
        <
        /div>
    );
}

export default App;