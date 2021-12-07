import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreens(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>
            {props.heading ? (
              props.link ? (
                <a className="projectLinks" href={props.link}>
                  {props.heading}
                </a>
              ) : (
                props.heading
              )
            ) : (
              ""
            )}
          </span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Achievements", logoSrc: "interests.svg" },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 80 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "C++", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "PeerVantage",
      duration: { fromDate: "2020", toDate: "2021" },
      description:
        "This project is made using MERN Stack. With the help of this project, you can have a group video call with your friends and can also have a fun quiz with them in real time.",
      subHeading: "Technologies Used: Express Js, Node Js, Redux, Socket.io",
      link: "https://github.com/Nirbhay1910/PeerVantage",
    },
    {
      title: "Facebook Clone",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "This project is made using reactjs and firebase. With this app, we can post our posts and can comment on other posts in realtime.",
      subHeading: "Technologies Used: ReactJS, firebase, redux",
      link: "https://github.com/Nirbhay1910/facebook-clone",
    },
    {
      title: "Whatsapp Clone",
      duration: { fromDate: "2021", toDate: "2021" },
      description:
        "This clone is made using reactjs and firebase. With this app, we can add new rooms and can chat in realtime.",
      subHeading: "Technologies Used: ReactJS, firebase, redux",
      link: "https://github.com/Nirbhay1910/wp-clone",
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"Bharati Vidyapeeth's College of Engineering, New Delhi"}
        subHeading={"BACHELOR OF TECHNOLOGY INFORMATION TECHNOLOGY - 9.3 CGPA"}
        fromDate={"2019"}
        toDate={"2023"}
      />

      <ResumeHeading
        heading={"Adarsh Jain Dharmic Shiksha Sadan"}
        subHeading={"Class XII - 91.6%"}
        fromDate={"2018"}
        toDate={"2019"}
      />
      <ResumeHeading
        heading={"Holy Cross School"}
        subHeading={"Class X - 9.8 CGPA"}
        fromDate={"2016"}
        toDate={"2017"}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Vyorius"}
          subHeading={"FULL STACK DEVELOPER INTERN"}
          fromDate={"June 2021"}
          toDate={"August 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
          <span className="resume-description-text">
            Worked closely with other developers to create reusable react codes,
            APIs and integrating backend with frontend.
          </span>
          <br />
          <span className="resume-description-text">
            Done functional and integration testing of website and fixed bugs in
            production
          </span>
          <br />
        </div>
      </div>
      <div className="experience-container">
        <ResumeHeading
          heading={"Coding Ninjas"}
          subHeading={"Teaching Assistant INTERN"}
          fromDate={"September 2021"}
          toDate={"October 2021"}
        />
        <div className="experience-description">
          <span className="resume-description-text"></span>
          <span className="resume-description-text">
            Resolved more than 120 doubts of students in competitive programming
            with 4.9 ratings
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
          link={projectsDetails.link}
        />
      ))}
    </div>,

    /* Achievements */
    <div className="resume-screen-container" key="achievements">
      <ResumeHeading heading="1777 ratings on codechef and 5 ⭐ coder at hackerrank" />
      <ResumeHeading heading="Won 3rd Prize at WIEHACK 3.0 (International Level Hackathon)" />
      <ResumeHeading heading="Won 3rd prize at Prepbytes Build it up Hackathon" />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
