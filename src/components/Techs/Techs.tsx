import './Techs.scss';

// Mapping between tech names and their image files – one canonical key per tech
const techImages: Record<string, string> = {
  // Frontend
  HTML: 'HTML5_Badge.svg',
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
  Insomnia: 'insomnia.png',
  SQL: 'mysql-logo.png',
  // Design & UX
  UX_UI_design: 'ux_ui.png',
  Figma: 'figma-icon.svg',
  'Adobe Photoshop': 'adobe-photoshop-seeklogo.svg',
  'Adobe Firefly': 'Adobe_Firefly_Logo.svg.png',
  Flowcharts: 'flowchart.png',
  Mid_fidelity_prototyping: 'prototyping.png',
  Användbarhetstester: 'ux_test.png',
  // Verktyg & metodik
  'VS Code': 'Visual Studio Code-logo.jpeg',
  Git: 'github-tile.svg',
  Vite: 'vitejsdev-icon.svg',
  'WCAG 2.0': 'wcag2.2AAA.png',
  Lighthouse: 'lighthouse.png',
  'Agile/Scrum': 'agile.png',
  Gemini: 'gemini.png',
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
          onError={(e) => {
            const img = e.currentTarget;
            img.style.display = 'none';
            const parent = img.parentElement;
            parent?.classList.remove('tech-stack__tech--image', 'tech-stack__tech--image-light');
            parent?.classList.add('tech-stack__tech--fallback');
            const label = img.nextElementSibling as HTMLElement | null;
            if (label) label.style.display = 'inline';
          }}
        />
        <span className="tech-stack__tech-label" aria-hidden>{name}</span>
      </span>
    );
  }

  return (
    <span className="tech-stack__tech tech-stack__tech--fallback">
      <span className="tooltip" aria-hidden>{name}</span>
      <span className="tech-stack__tech-label">{name}</span>
    </span>
  );
};

export const Techs = () => {
  return (
    <section className="techs" id="techs">
      <div className="tech-stack">
        <div className="tech-stack__group">
          <span className="tech-stack__title">Frontend:</span>
          <TechItem name="HTML" />
          <TechItem name="CSS" />
          <TechItem name="SASS" />
          <TechItem name="Tailwind" />
          <TechItem name="JavaScript" />
          <TechItem name="Vue" />
          <TechItem name="React" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Backend:</span>
          <TechItem name="Node.js" />
          <TechItem name="Express" />
          <TechItem name="REST API" />
          <TechItem name="MongoDB" />
          <TechItem name="Insomnia" />
          <TechItem name="SQL" />
        </div>

        <div className="tech-stack__group">
          <span className="tech-stack__title">Design & UX:</span>
          <TechItem name="UX_UI_design" />
          <TechItem name="Figma" />
          <TechItem name="Adobe Photoshop" />
          <TechItem name="Adobe Firefly" />
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
          <TechItem name="Git" />
          <TechItem name="Vite" />
          <TechItem name="Agile/Scrum" />
          <TechItem name="Gemini" />
        </div>
      </div>
    </section>
  );
};
