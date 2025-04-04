import React from "react";
import img1 from "../../assets/images/home-two/project-icon.png";
import img2 from "../../assets/images/home-two/project-icon2.png";
import img3 from "../../assets/images/home-two/project-icon3.png";
import img4 from "../../assets/images/home-two/project-icon4.png";
import prors from "../../assets/images/home-two/project-rs.png";
import prows from "../../assets/images/home-two/project-ws.png";

const ProjectArea = ({ retentionPeriod, kpiScore }) => {
  return (
    <div className="project-area style-three mt-3">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <div className="section-title text-left">
              <h5 className="section-sub-title">
                Begin your journey with De Koshur Crafts
              </h5>
              <h1 className="section-main-title">Pre Screening</h1>
              <h4 className="">
                Choose Your Partnership Platform <br />{" "}
                <span>
                  <b style={{ color: "#ff3b00;" }}>
                    As per your Retention Period & KPI Score
                  </b>
                </span>{" "}
              </h4>
            </div>
          </div>

          <div className="col-lg-5">
            <div className="section-title text-left">
              <p className="section-des " style={{ color: "black" }}>
                <b> Buyer Partnership Registration Process </b>
                <h1 className="section-main-title" style={{ fontSize: "40px" }}>
                  Process 1
                </h1>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
          <div className="card my-2 shadow p-3 mx-3" style={{ width: "35rem",backgroundColor:"#ff3c00" }}>
            <h4 className="">Retention Period: <span className="text-white"> {retentionPeriod} Weeks</span></h4>
         
            <p>Your total stay in this partnership as of today</p>
          </div>
          <div className="card my-2 shadow p-3" style={{ width: "35rem",backgroundColor:"#ff3c00" }}>
            <h4 className="">KPI Score: <span className="text-white">{kpiScore} Points</span></h4>
          
            <p>Your total key performance indicator score in this partnership as of today</p>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectArea;
