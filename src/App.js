import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import "./styles.css";

//Components
import SideBar from "./components/Header/SideBar";
import Footer from "./components/Footer";
import HomePage from './pages/HomePage/index'
import SignUp from "./components/Form/SignUp"
import Login from "./components/Form/Login";
import StudentBoard from "./pages/StudentDashboard"
import StudentMaterial from "./pages/StudentMaterial"
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentAssessment from "./pages/StudentAssessment";

function App() {
  return (
    <BrowserRouter>
      <SideBar />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/register' component={SignUp}/>
        <Route exact path='/login' component={Login}/>
        <Route path='/student' component={StudentBoard}/>
        <Route path='/material' component={StudentMaterial}/>
        <Route path='/assessment' component={StudentAssessment} />
        <Route path='/teacher' component={TeacherDashboard} />
      </Switch>   
      <Footer />
    </BrowserRouter>
  );
}

export default App;
