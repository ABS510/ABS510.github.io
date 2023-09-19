import React from 'react';
import { Link } from 'react-router-dom';
import "./ProjectCard.css"
import imagePath from '../../ghUtil';

const ProjectCard = ({ project, dark }) => {

    
  return (
    <Link to={`${project.path}`} className={dark ? 'project-card dark' : 'project-card'}>
      <div className="image-container">
        <img src={imagePath(project.image)} alt={"project.title"} className="project-image"/>
      </div>
      <div className={dark ? 'project-title dark' : 'project-title'}>{project.title}</div>
    </Link>
  );
};

export default ProjectCard;
