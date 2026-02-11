//components/Hero.tsx
import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.scss';

export const Hero = () => {
  const displayedText = useTypewriter(); /*hook for typewriter effect*/

  return (
    <section className="hero">
      <div className="hero__content">
        {/* Mobile: Bild, h1, h2 */}
        <div className="header__intro-mobile">
          <div className="header__picture-mobile">
            <img
              src={`${import.meta.env.BASE_URL}images/marie_AI_generated.png`}
              width="800"
              height="602"
              loading="lazy"
              alt="Marie Lenvik, AI genererat svartvitt porträtt"
            />
          </div>
          <div className="header__name-mobile">
            <h1>marie lenvik</h1>
            <h2 className="header__description-mobile">
              {displayedText} {/*hook for typewriter effect*/}
            </h2>
          </div>
        </div>

        <div className="hero__description">
          <p>

          Jag är student inom frontend utveckling och söker LIA plats till
          hösten 2025. Under utbildningen har jag byggt en grund inom JavaScript, TypeScript, HTML, CSS/SCSS och har även arbetat med Vue och React. 
          Jag har testat på backend med Node.js, Express och SQL, men mitt hjärta ligger i frontend och i att skapa användarvänliga, tillgängliga och visuellt tilltalande lösningar. <br />
          Under min praktikperiod hoppas jag få en djupare insikt i front end där jag kan utvecklas med erfarna kollegor.
          </p>
          <p>

          Vidare på denna sida presenterar jag de projekt jag arbetat med i mina
          studier på Medieinstitutet.
         {/*
          <p>
          Om du är intresserad av att se närmre på min utbildning får du gärna
          läsa mitt CV.
          </p>
          */}
          </p>

        </div>
{/*
        <div className="hero__picture">
          <img
            src={`${import.meta.env.BASE_URL}images/montage.png`}
            width="800"
            height="602"
            loading="lazy"
            alt="bild på fartyg monterat i damm"
          />
        </div>
*/}
      </div>
    </section>
  );
};
