import './Techs.scss';

// Mapping between tech names and their image files
const techImages: Record<string, string> = {
  // Frontend
  HTML5: 'HTML5_Badge.svg',
  CSS: 'css-icon.svg',
  SASS: 'sass-lang-icon.svg',
  Tailwind: 'tailwindcss-icon.svg',
  JavaScript: 'javascript-icon.svg',
  TypeScript: 'typescriptlang-icon.svg',
  Vue: 'vuejs-icon.svg',
  React: 'reactjs-icon.svg',
  A11Y: 'a11y-icon.svg',
  // Backend
  'Node.js': 'nodejs-icon.svg',
  Express: 'expressjs-icon.svg',
  'REST API': 'rest-api-icon.svg',
  MongoDB: 'mongodb-icon.svg',
  SQL: 'mysql-logo.png',
  // Design & UX
  'UX/UI-design': 'ux_ui.png',
  Figma: 'figma-icon.svg',
  'Adobe Photoshop': 'adobe-photoshop-seeklogo.svg',
  // Verktyg & metodik
  'VS Code': 'Visual Studio Code-logo.jpeg',
  Git: 'github-tile.svg',
  Vite: 'vitejsdev-icon.svg',
  'WCAG 2.0': 'wcag2.2AAA.png',
  'Agile/Scrum': 'agile.png',
};

// Icons that are dark by default – render as light via CSS filter
const techIconsLight = new Set(['A11Y', 'Express', 'REST API']);

type TechItemProps = {
  name: string;
};

const TechItem = ({ name }: TechItemProps) => {
  const imageFile = techImages[name];
  const useLight = techIconsLight.has(name);

  if (imageFile) {
    return (
      <span
        className={`tech-stack__tech tech-stack__tech--image${useLight ? ' tech-stack__tech--image-light' : ''}`}
      >
        <span className="tooltip" aria-hidden>{name}</span>
        <img
          src={`${import.meta.env.BASE_URL}images/tech/${imageFile}`}
          alt={name}
          className="tech-stack__tech-img"
        />
      </span>
    );
  }

  return (
    <span className="tech-stack__tech">
      <span className="tooltip" aria-hidden>{name}</span>
      {name}
    </span>
  );
};

export const Techs = () => {
  return (
    <section className="techs" id="techs">
      <div className="tech-stack">
        <div className="tech-stack__group">
          <span className="tech-stack__title">Frontend:</span>
          <TechItem name="HTML5" />
          <TechItem name="CSS" />
          <TechItem name="SASS" />
          <TechItem name="Tailwind" />
          <TechItem name="JavaScript" />
          <TechItem name="TypeScript" />
          <TechItem name="Vue" />
          <TechItem name="React" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Backend:</span>
          <TechItem name="Node.js" />
          <TechItem name="Express" />
          <TechItem name="REST API" />
          <TechItem name="MongoDB" />
          <TechItem name="SQL" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Design & UX:</span>
          <TechItem name="UX/UI-design" />
          <TechItem name="Figma" />
          <TechItem name="Adobe Photoshop" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Tillgänglighet:</span>
          <TechItem name="A11Y" />
          <TechItem name="WCAG 2.0" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Verktyg & metodik:</span>
          <TechItem name="VS Code" />
          <TechItem name="Git" />
          <TechItem name="Vite" />
          <TechItem name="Agile/Scrum" />
        </div>
      </div>
    </section>
  );
};
