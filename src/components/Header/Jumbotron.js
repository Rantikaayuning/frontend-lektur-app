import React from "react";
import "../../styles/Jumbotron.css";

function Jumbo() {
  return (
    <div className="jumbotron">
      <div className="jumbotron-left">
        {" "}
        <h2>
          {" "}
          Bring Your Class <span> At Home </span>{" "}
        </h2>{" "}
        <button>
          <span> Enroll Now </span>{" "}
        </button>{" "}
      </div>{" "}
      <div className="jumbotron-right">
        {" "}
        <div className="video-content">
          <iframe
            src="https://www.youtube.com/embed/lnrpkHbSb_Y?autoplay=0&mute=0"
            title="glints"
          />
          <div className="bottom">
            <div className="left">
              <p className="p1"> 156 Enrolled </p>{" "}
              <p className="p2"> Sales and Marketing Master Class </p>{" "}
              <p className="p3"> Susan Sarah </p>{" "}
            </div>{" "}
            <div className="right">
              <p> 4 Study Material </p> <p> 14 Learning Videos </p>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default Jumbo;
