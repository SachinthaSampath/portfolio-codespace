/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/portfolio_bg_1.png";

const imageAltText = "ring binders aligned";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Associate Software Engineer at WireApps",
    description:
      "Started as an Intern on 2023 and currently working as an Associate Software Engineer (Full Stack).",
    url: "#",
  },
  {
    title: "Reading for MSc (IT-EAD)",
    description:
      "Reading for a Master's Degree in IT, specialized in Enterprise Application Development at SLIIT.",
    url: "#",
  },
  {
    title: "Assistant Lecturer at ESOFT",
    description:
      "Started working at ESOFT on 2021 as a Tutor and promoted to an Assistenat Lecturer, Program Coordinator in 2022 and continued work until 2023.",
    url: "#",
  },
  {
    title: "ESOFT Toastmasters Club",
    description:
      "Former President of the ESOFT Toastmaster Club from October 2021 to March 2022. Also served as the Vice President of Public Relations from April 2021 to September 2021.",
    url: "#",
  },
  {
    title: "Graduated in BIT (UCSC)",
    description:
      "Graduated with a Second Class (Upper Division) degree with the highest GPA in the batch (2020) and achieved the Prof. V.K. Samaranayake Memorial Medal for the best performance. Also achieved all Best e-Learner awards given for semesters.",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
