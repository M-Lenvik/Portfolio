//components/Projects.tsx

import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard/ProjectCard';

export const Projects = () => (
  <section className="Project_id" id="projects" aria-labelledby="projects-heading">
    <h2 id="projects-heading" className="visually-hidden">
      Utvalda projekt
    </h2>
    <div className="Project">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);
