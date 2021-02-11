import React from "react";

import "./styles/App.css";
import "./styles/Props.css";

//Components

import SideBar from "./components/Header/SideBar";
import Jumbo from "./components/Header/Jumbotron";
import Content from "./components/ContentCard";

function App() {
  return (
    <div>
      <div className="App flex">
        <SideBar />
        <Jumbo />
      </div>
      <Content />
    </div>
  );
}

export default App;
