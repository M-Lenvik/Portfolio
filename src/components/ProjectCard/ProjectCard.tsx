import { useEffect, useRef } from 'react';
import './ProjectCard.scss';
import { Carousel } from '../Carousel/Carousel';
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
  const contentRef = useRef<HTMLDivElement>(null);
  const imagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const matchHeights = () => {
      if (contentRef.current && imagesRef.current && window.innerWidth >= 1024) {
        const contentHeight = contentRef.current.offsetHeight;
        const imagesWidth = imagesRef.current.offsetWidth;
        // Kvadratisk storlek, men aldrig högre än texten till vänster
        const size = Math.min(contentHeight, imagesWidth);
        imagesRef.current.style.height = `${size}px`;
        imagesRef.current.style.maxHeight = `${size}px`;
      } else if (imagesRef.current) {
        imagesRef.current.style.height = '';
        imagesRef.current.style.maxHeight = '';
      }
    };

    const runAfterLayout = () => requestAnimationFrame(matchHeights);
    runAfterLayout();
    window.addEventListener('resize', runAfterLayout);
    return () => window.removeEventListener('resize', runAfterLayout);
  }, [title, description, tech_description, tech]);

  return (
    <div className="project-card" id="project-card">
      {/*Innehåll*/}
      <div className="project-card__content" ref={contentRef}>
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

        {/* Bilder / Video - Mobile: efter text, före techs */}
        <div className="project-card__images" ref={imagesRef}>
          <div className="project-card__images-wrapper">
          {video ? (
            <video
              src={video}
              controls
              autoPlay
              loop
              muted
              className="project-card__image"
            />
          ) : Array.isArray(images) && images.length > 1 ? (
            <Carousel
              images={images}
              altPrefix={title.replace(/<br>/g, ' ')}
              imageClassName="project-card__image"
            />
          ) : Array.isArray(images) && images.length === 1 ? (
            <img
              src={images[0]}
              alt={title.replace(/<br>/g, ' ')}
              className="project-card__image"
              loading="lazy"
            />
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
    </div>
  );
};
