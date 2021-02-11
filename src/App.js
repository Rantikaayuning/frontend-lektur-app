import React from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import "./styles.css";

//Components
import SideBar from "./components/Header/SideBar";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage/index'
import SignUp from "./components/Form/SignUp"

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/register' component={SignUp}/>
      </Switch>   
      <Footer />
    </BrowserRouter>
  );
}

export default App;
