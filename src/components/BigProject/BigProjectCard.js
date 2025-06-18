import React from "react";
import "./BigProjectCard.scss";


export default function BigProjectCard({ project }) {
  return (
    <div className="big-project-card">
      {project.image_path && (
        <img
          src={require(`../../assets/images/${project.image_path}`)}
          alt={project.projectName}
          className="big-project-image"
        />
      )}
      <h2>{project.projectName}</h2>
      <p>{project.projectDesc}</p>
      <div className="project-links">
        {project.footerLink.map((link, index) => (
          <a
            key={index}
            href={link.url}
            className="project-btn"
            target="_blank"
            rel="noopener noreferrer"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
}
