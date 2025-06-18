import React from "react";
import { projects } from "../../portfolio";
import "./Project.scss";

export default function Projects() {
  if (!projects.data || projects.data.length === 0) return null;

  return (
    <div className="main" id="projects">
      <h1 className="project-heading">My Projects</h1>
      <div className="project-container">
        {projects.data.map((project) => (
          <div className="project-card" key={project.id}>
            {project.image_path && (
              <img
                src={require(`../../assets/images/${project.image_path}`)}
                alt={project.name}
                className="project-image"
               />
            )}
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.languages.map((lang, i) => (
                <span key={i} className="tech-tag">{lang}</span>
              ))}
            </div>
            {project.url && (
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
