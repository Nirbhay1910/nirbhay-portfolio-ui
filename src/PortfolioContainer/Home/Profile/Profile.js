import React from "react";
import Typical from "react-typical";
import ScrollService from "../../../utilities/ScrollService";
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.linkedin.com/in/nirbhay-jain-041a1b191/">
                <i className="fa fa-linkedin-square"></i>
              </a>
              <a href="https://www.instagram.com/nirbhay_1910/">
                <i className="fa fa-instagram"></i>
              </a>
              <a href="https://github.com/Nirbhay1910">
                <i className="fa fa-github"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              Hello I'm <span className="highlighted-text">Nirbhay</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Student 📗",
                    1000,
                    "Full Stack Developer 😎",
                    1000,
                    "Competitive Programmer 💻",
                    1000,
                    "MERN Stack Dev 🌐",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              An engineering student with knack of building web applications
              using MERN stack
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            >
              Hire Me{" "}
            </button>
            <a
              href="https://drive.google.com/file/d/1-cz5NH_G_pFx7vZilwrOOusOsSBnhxnD/view?usp=sharing"
              target="__blank"
            >
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
