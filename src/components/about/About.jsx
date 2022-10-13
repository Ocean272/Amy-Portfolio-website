import React from "react";
import "./about.css";
import Me2 from "../../assets/me2.jpg";
import { BiAward } from "react-icons/bi";
import { BiDumbbell } from "react-icons/bi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me2} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BiAward className="about__icon" />
              <h5>Experience</h5>
              <small>
                6-month Full-time Programme in Software Developer Immersive,
                accredited by NTU
              </small>
            </article>
            <article className="about__card">
              <BiDumbbell className="about__icon" />
              <h5>Strengths</h5>
              <small>Positivity, Resilient, Constant learning, Curious, Attention to details  </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3 completed Projects</small>
            </article>
          </div>
          <p>
            Software Developer seeking new career path
            <br />
            <br />I have completed a 6-month full-time certification in
            Software Development Immersive accredited by Nanyang Technological
            University, with the aspiration to embark on my next career in
            software development. 
          </p>

          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
