//components/Hero.tsx
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      {/* <h1 className="hero__title">Welcome to My Portfolio</h1> */}
      <div className="hero__content">
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

        <p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginTop: '1em' }}>
          Observera att min portfolio är under uppbyggnad och att jag inte är färdig med att skriva clean code, responsivitet, och tillgänglighet. Inte heller stylingen är helt klar.
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
