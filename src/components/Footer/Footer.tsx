import './Footer.scss';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <p className="footer__question">Vill du veta mer om mig?</p>
        <h2 className="footer__big-text">Kontakta mig</h2>

        <div className="footer__buttons">
          <a href="mailto:lenvik.marie@gmail.com" className="footer__btn">E-post</a>
          <a href="tel:+46739697927" className="footer__btn">Mobil</a>
          <a href="https://github.com/M-Lenvik" target="_blank" rel="noopener noreferrer" className="footer__btn">GitHub</a>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copy">&copy; {new Date().getFullYear()} Maries Portfolio</p>
        <a href="#header" className="footer__backtotop">Till toppen ↑</a>
      </div>
    </footer>
  );
};
