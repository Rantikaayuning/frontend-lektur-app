import React from "react";
import bgcontent from "../../assets/rectangle55.png";
import { Link } from "react-router-dom";
import Content from "../../components/ContentCard/index";
import Jumbo from "../../components/Header/Jumbotron";

const Home = () => {
  return (
    <>
      <Jumbo />
      <Content />
      <div className="content-register">
        <img src={bgcontent} alt="background content" />
        <div className="register-button">
          <h1>
            Create Your <span className="own-class">Own Class</span>
          </h1>
          <Link to="/register">
            <button>Register now</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Home;
