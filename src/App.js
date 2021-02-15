import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./styles.css";

//Components
import Header from "./components/Header/Header"
import Footer from "./components/Footer";
import HomePage from './pages/HomePage/index'
import SignUpStudent from "./components/Form/SignUpStudent"
import SignUpTeacher from "./components/Form/SignUpTeacher"
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route path='/register-student' component={SignUpStudent}/>
        <Route path='/register-teacher' component={SignUpTeacher}/>
        <Route path='/login' component={Login}/>
        <Route path='/student-courses' component={StudentBoardCourses}/>
        <Route path='/student-assessment' component={StudentBoardAssessment}/>
        <Route path='/material' component={StudentMaterial}/>
        <Route path='/assessment' component={StudentAssessment} />
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
