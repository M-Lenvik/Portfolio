import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer__top">
        <p className="footer__question">Vill du veta mer om mig?</p>
        <h2 className="footer__big-text">Kontakta mig</h2>

        <div className="footer__buttons">
          <a
            href="mailto:lenvik.marie@gmail.com"
            className="footer__btn footer__btn--reveal"
            aria-label="Skicka e-post till lenvik.marie@gmail.com"
          >
            <span className="footer__btn-label">E-post</span>
            <span className="footer__btn-value" aria-hidden="true">
              lenvik.marie@gmail.com
            </span>
          </a>
          <a
            href="tel:+46739697927"
            className="footer__btn footer__btn--reveal"
            aria-label="Ring +46 73 969 79 27"
          >
            <span className="footer__btn-label">Mobil</span>
            <span className="footer__btn-value" aria-hidden="true">
              +46 73 969 79 27
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/marie-lenvik-37303385/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__btn"
            aria-label="Marie Lenvik på LinkedIn (öppnas i ny flik)"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/M-Lenvik"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__btn"
            aria-label="Marie Lenvik på GitHub (öppnas i ny flik)"
          >
            GitHub
          </a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Maries Portfolio</p>
        <a href="#header" className="footer__backtotop">Till toppen ↑</a>
      </div>
    </footer>
  );
};
