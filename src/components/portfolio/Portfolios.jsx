import React from "react";
import "./portfolios.css";
import proj1 from "../../assets/proj-1.jpg";
import proj2 from "../../assets/proj-2.jpg";
import proj3 from "../../assets/proj3.jpg";

const data = [
  {
    id: 1,
    image: proj1,
    title: "Shopping-List",
    github: "https://github.com/Ocean272/Shopping-list",
    demo: "https://ocean272.github.io/Shopping-list/",
  },
  {
    id: 2,
    image: proj2,
    title: "Covid Situation App",
    github: "https://github.com/Ocean272/covid-tracker",
    demo: "https://Ocean272.github.io/covid-tracker/",
  },
  {
    id: 3,
    image: proj3,
    title: "Supper App",
    github: "https://github.com/Farrhann03/Group1-project4",
  },
];

const Portfolios = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="-blank">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="-blank">
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolios;
