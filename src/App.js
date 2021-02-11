import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./styles.css";

//Components

import SideBar from "./components/Header/SideBar";
import Jumbo from "./components/Header/Jumbotron";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Jumbo />
      <Switch>
        <Route exact path='/' component={HomePage}/>
      </Switch>   
      <Footer />
    </BrowserRouter>
  );
}

export default App;
