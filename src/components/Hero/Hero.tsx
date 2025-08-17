//components/Hero.tsx
import './Hero.scss';

export const Hero = () => {
  return (
    <section className="hero">
      {/* <h1 className="hero__title">Welcome to My Portfolio</h1> */}
      <div className="hero__content">
        <p className="hero__description">
          Jag är student inom frontend utveckling och söker LIA plats till
          hösten 2025. Tidigare har jag studerat systemvetenskap med
          spetskompetens i interaktionsdesign. <br />
          Under min praktikperiod hoppas jag få en djupare insikt i front end,
          men jag är också intresserad av att arbeta i en roll nära UX designers
          samt att lära mig mer kring gränssnittsdesign. Eftersom jag har ett
          privat intresse inom fotografering skulle det även vara roligt att
          lära en del inom bildredigering. Bilden här intill är ett montage jag
          gjort av viadukten och fartyget. Jag har även skapat speglingen av
          fartyget.
          <br />
          Vidare på denna sida presenterar jag de projekt jag arbetat med i mina
          studier på Medieinstitutet.
          <p>

          Om du är intresserad av att se närmre på min utbildning får du gärna
          läsa mitt CV.
          </p>

<p style={{ fontSize: '0.8rem', fontWeight: 'bold', marginTop: '1em' }}>
  Observera att min portfolio är under uppbyggnad och att jag inte är färdig med att skriva clean code, responsivitet, och tillgänglighet. Inte heller stylingen är helt klar.
</p>

        </p>

        <div className="hero__picture">
          <img
            src="/images/montage.png"
            width="800"
            height="602"
            loading="lazy"
            alt="bild på fartyg monterat i damm"
          />
        </div>
      </div>
    </section>
  );
};
