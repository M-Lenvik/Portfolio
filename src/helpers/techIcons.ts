import type { IconType } from 'react-icons';
import {
  FaPencilRuler,
  FaProjectDiagram,
  FaUniversalAccess,
  FaUserCheck,
} from 'react-icons/fa';
import { MdDevices, MdStorage, MdVerified } from 'react-icons/md';
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
  SiScrumalliance,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
} from 'react-icons/si';
import {
  TbBrandAdobePhotoshop,
  TbBrandVite,
  TbBrandVscode,
  TbFlame,
} from 'react-icons/tb';

/** Custom image files for techs without a good react-icons match */
export const techImages: Record<string, string> = {
  'REST API': 'rest-api-icon.svg',
};

/** Dark source images that should render white via CSS filter */
export const techImagesLight = new Set(['REST API']);

/** Mapping between tech names and react-icons – omit entry to use text fallback */
export const techIcons: Record<string, IconType> = {
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
  'Adobe Photoshop': TbBrandAdobePhotoshop,
  'Adobe Firefly': TbFlame,
  UX_UI_design: FaPencilRuler,
  Flowcharts: FaProjectDiagram,
  Mid_fidelity_prototyping: MdDevices,
  Användbarhetstester: FaUserCheck,
  // Tillgänglighet
  A11Y: FaUniversalAccess,
  'WCAG 2.0': MdVerified,
  Lighthouse: SiLighthouse,
  // Verktyg & metodik
  'VS Code': TbBrandVscode,
  GitHub: SiGithub,
  Vite: TbBrandVite,
  Cursor: SiCursor,
  'GitHub Copilot': SiGithubcopilot,
  Claude: SiClaude,
  NPM: SiNpm,
  ESLint: SiEslint,
  Prettier: SiPrettier,
  LocalStorage: MdStorage,
  'Agile/Scrum': SiScrumalliance,
  Gemini: SiGooglegemini,
};
