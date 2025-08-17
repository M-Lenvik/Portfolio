//types.ts

export interface ProjectCardProps {
  title: string;
  description: string;
  tech_description: string;
  image?: string;       // för enstaka bild
  images?: string[];    // för flera bilder
  video?: string;
  github?: string;
  liveDemo?: string;
  tech: string[];
}
