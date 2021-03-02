import React from "react";
import bgcontent from "../../assets/rectangle55.png";
import { Link } from "react-router-dom";
import Content from "../../components/ContentCard/index";
import Jumbo from "../../components/Header/Jumbotron";
import { useSelector } from "react-redux";

const Home = () => {
  const { searchCourse } = useSelector((state) => state.courses);

  return (
    <>
      {searchCourse !== "" ? <div></div> : <Jumbo />}
      <Content />
      <div className="content-register">
        <img src={bgcontent} alt="background content" />
        <div className="register-button">
          <h1>
            Create Your <span className="own-class">Own Class</span>
          </h1>
          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
