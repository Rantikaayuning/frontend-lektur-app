import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

//Components
import Header from "./components/Header/SideBar"
import Footer from "./components/Footer";
import HomePage from './pages/HomePage/index'
import SignUp from "./components/Form/SignUp"
import Login from "./components/Form/Login";
import StudentBoardCourses from "./pages/StudentDashboard/Tab/Courses";
import StudentMaterial from "./pages/StudentMaterial";
import TeacherDashboard from "./pages/TeacherDashboard";
import StudentAssessment from "./pages/StudentAssessment";
import TeacherCourseTab from "./pages/TeacherNewCourse/Tab/Course";
import TeacherAssessmentTab from "./pages/TeacherNewCourse/Tab/Assessment";
import TeacherStudentsTab from "./pages/TeacherNewCourse/Tab/Students";
import StudentBoardAssessment from "./pages/StudentDashboard/Tab/Assessment";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import StudentAssessmentResult from "./pages/StudentAssessment/Result";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/register' component={SignUp}/>
        <Route path='/login' component={Login}/>
        <Route path='/student-courses' component={StudentBoardCourses}/>
        <Route path='/student-assessment' component={StudentBoardAssessment}/>
        <Route path='/material' component={StudentMaterial}/>
        <Route path='/assessment' component={StudentAssessment} />
        <Route path='/assessment-result' component={StudentAssessmentResult} />
        <Route path='/teacher-dashboard' component={TeacherDashboard} />
        <Route path='/teacher-new-course' component={TeacherCourseTab} />
        <Route path='/teacher-new-assessment' component={TeacherAssessmentTab} />
        <Route path='/teacher-new-students' component={TeacherStudentsTab} />
        <Route path="/course-detail" component={CourseDetail} />
      </Switch>   
      <Footer />
    </BrowserRouter>
  );
}

export default App;
