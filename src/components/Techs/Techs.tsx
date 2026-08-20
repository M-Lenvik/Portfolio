import type { IconType } from 'react-icons';
import {
  SiClaude,
  SiCss,
  SiCursor,
  SiEslint,
  SiExpress,
  SiFigma,
  SiGithub,
  SiGithubcopilot,
  SiGooglegemini,
  SiHtml5,
  SiInsomnia,
  SiJavascript,
  SiLighthouse,
  SiMongodb,
  SiMysql,
  SiNodedotjs,
  SiNpm,
  SiPrettier,
  SiPwa,
  SiReact,
  SiReactrouter,
  SiSass,
  SiTailwindcss,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si';
import { TbBrandVscode } from 'react-icons/tb';
import './Techs.scss';

// Mapping between tech names and react-icons – omit entry to use text fallback
const techIcons: Record<string, IconType> = {
  // Frontend
  HTML: SiHtml5,
  CSS: SiCss,
  SASS: SiSass,
  Tailwind: SiTailwindcss,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Vue: SiVuedotjs,
  React: SiReact,
  'React Router': SiReactrouter,
  PWA: SiPwa,
  // Backend
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  MongoDB: SiMongodb,
  Insomnia: SiInsomnia,
  SQL: SiMysql,
  // Design & UX
  Figma: SiFigma,
  // Tillgänglighet
  Lighthouse: SiLighthouse,
  // Verktyg & metodik
  'VS Code': TbBrandVscode,
  GitHub: SiGithub,
  Vite: SiVite,
  Cursor: SiCursor,
  'GitHub Copilot': SiGithubcopilot,
  Claude: SiClaude,
  NPM: SiNpm,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  Gemini: SiGooglegemini,
};

type TechItemProps = {
  name: string;
};

const TechItem = ({ name }: TechItemProps) => {
  const Icon = techIcons[name];

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
