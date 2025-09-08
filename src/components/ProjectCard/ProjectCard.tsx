//components/ProjectCard.tsx

//import "./ProjectCard.scss";
//components/ProjectCard.tsx
//import "./ProjectCard.scss";
// components/ProjectCard.tsx
import './ProjectCard.scss';
import type { ProjectCardProps } from '../../types';

export const ProjectCard = ({
  title,
  description,
  tech_description,
  image,
  images,
  video,
  github,
  liveDemo,
  tech,
}: ProjectCardProps) => {
  return (
    <div className="project-card" id='project-card'>
      {/* Innehåll */}
      <div className="project-card__content">
        <h3
          className="project-card__title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></h3>

        <div className='project-card__descriptions'>
        <p
          className="project-card__description"
          dangerouslySetInnerHTML={{
            __html: `${description}`,
          }}
        ></p>
        <p
          className="project-card__description"
          dangerouslySetInnerHTML={{
            __html: `${tech_description}`,
          }}
        ></p>
        </div>

        {/* Tekniker */}
        <div className="project-card__techs">
          {tech.map((techItem, index) => (
            <span key={index} className="project-card__tech">
              {techItem}
            </span>
          ))}
        </div>

        {/* Länkar */}
        <div className="project-card__links">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <i className="fa-brands fa-github"></i> Se koden på GitHub
            </a>
          )}
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              <i className="fa-solid fa-globe"></i> Live demo
            </a>
          )}
        </div>
      </div>

      {/* Bilder / Video */}
      <div className="project-card__images">
        {video ? (
          <video
            src={video}
            controls
            autoPlay
            loop
            muted
            className="project-card__image"
          />
        ) : Array.isArray(images) && images.length ? (
          images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`${title} bild ${index + 1}`}
              className="project-card__image"
              loading="lazy"
            />
          ))
        ) : image ? (
          <img
            src={image}
            alt={title.replace(/<br>/g, ' ')}
            className="project-card__image"
            loading="lazy"
          />
        ) : null}
      </div>
    </div>
  );
};
