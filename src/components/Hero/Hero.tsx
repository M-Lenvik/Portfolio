//components/Hero.tsx
import { useTypewriter } from '../../hooks/useTypewriter';
import './Hero.scss';

export const Hero = () => {
  const displayedText = useTypewriter(); /*hook for typewriter effect*/

  return (
    <section className="hero" id="hero">
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
            Jag har studerat frontendutveckling på Medieinstitutet och har tidigare utbildning inom
            interaktionsdesign. Bakgrunden gör att jag ofta landar mellan kod, layout och
            användarbehov — jag vill att det som byggs ska både fungera tekniskt och kännas rimligt
            för den som ska använda det.
          </p>
          <p>
            Nedanför hittar du ett urval av mina skolprojekt från hela utbildningen. Tillsammans visar
            de spannet och utvecklingskurvan: från första HTML och CSS (till exempel pixel
            perfekt-uppgiften), vidare genom JavaScript och webshop, API:er och databaser, ramverk som
            Vue och React, UX- och designarbete, till avslutande examensarbete där flera tekniker och
            verktyg möts i en större helhet.
          </p>
          <p>
            Som en del av utbildningen gör jag LIA på WNDY och arbetar i en skarp produktmiljö. Där
            strävar jag efter att leverera skarpt och i tid — och hittar ofta mina egna uppgifter genom
            att se brister eller luckor i designen innan de blir tekniska problem. Jag testar nya
            funktioner, följer upp beteenden i gränssnittet och bidrar med att hitta och rätta fel.
          </p>
          <p>
            Jag trivs med noggrannhet i arbetet — öga för detaljer, manuell testning och att hitta
            småfel och kantfall innan de hinner bli problem för användaren eller teamet.
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
