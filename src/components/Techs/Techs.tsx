import {
  techIcons,
  techImages,
  techImagesLight,
} from '../../helpers/techIcons';
import './Techs.scss';

type TechItemProps = {
  name: string;
};

const TechItem = ({ name }: TechItemProps) => {
  const imageFile = techImages[name];
  const Icon = techIcons[name];

  if (imageFile) {
    const lightClass = techImagesLight.has(name)
      ? ' tech-stack__tech--icon-light'
      : '';
    return (
      <span className={`tech-stack__tech tech-stack__tech--icon${lightClass}`}>
        <span className="tooltip" aria-hidden>
          {name}
        </span>
        <img
          src={`${import.meta.env.BASE_URL}images/tech/${imageFile}`}
          alt={name}
          className="tech-stack__tech-img"
        />
      </span>
    );
  }

  if (Icon) {
    return (
      <span className="tech-stack__tech tech-stack__tech--icon">
        <span className="tooltip" aria-hidden>
          {name}
        </span>
        <Icon className="tech-stack__tech-img" aria-hidden />
        <span className="visually-hidden">{name}</span>
      </span>
    );
  }

  return (
    <span className="tech-stack__tech tech-stack__tech--fallback">
      <span className="tooltip" aria-hidden>
        {name}
      </span>
      <span className="tech-stack__tech-label">{name}</span>
    </span>
  );
};

export const Techs = () => {
  return (
    <section className="techs" id="techs" aria-labelledby="techs-heading">
      <h2 id="techs-heading" className="visually-hidden">
        Tekniker och verktyg
      </h2>
      <div className="tech-stack">
        <div className="tech-stack__group">
          <span className="tech-stack__title">Frontend:</span>
          <TechItem name="HTML" />
          <TechItem name="CSS" />
          <TechItem name="SASS" />
          <TechItem name="Tailwind" />
          <TechItem name="JavaScript" />
          <TechItem name="TypeScript" />
          <TechItem name="React" />
          <TechItem name="Vue" />
          <TechItem name="React Router" />
          <TechItem name="PWA" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Backend:</span>
          <TechItem name="Node.js" />
          <TechItem name="Express" />
          <TechItem name="REST API" />
          <TechItem name="MongoDB" />
          <TechItem name="SQL" />
          <TechItem name="Insomnia" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Design & UX:</span>
          <TechItem name="Figma" />
          <TechItem name="Adobe Photoshop" />
          <TechItem name="Adobe Firefly" />
          <TechItem name="UX_UI_design" />
          <TechItem name="Flowcharts" />
          <TechItem name="Mid_fidelity_prototyping" />
          <TechItem name="Användbarhetstester" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Tillgänglighet:</span>
          <TechItem name="A11Y" />
          <TechItem name="WCAG 2.0" />
          <TechItem name="Lighthouse" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Verktyg & metodik:</span>
          <TechItem name="VS Code" />
          <TechItem name="Cursor" />
          <TechItem name="GitHub" />
          <TechItem name="GitHub Copilot" />
          <TechItem name="Claude" />
          <TechItem name="NPM" />
          <TechItem name="Vite" />
          <TechItem name="ESLint" />
          <TechItem name="Prettier" />
          <TechItem name="LocalStorage" />
          <TechItem name="Agile/Scrum" />
          <TechItem name="Gemini" />
        </div>
      </div>
    </section>
  );
};
