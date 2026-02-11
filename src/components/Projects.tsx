//components/Projects.tsx

import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard/ProjectCard';

export const Projects = () => (
  <section className="Project_id" id="projects">
    {/*<h2>Mina projekt</h2>*/}
    <div className="Project">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  </section>
);
