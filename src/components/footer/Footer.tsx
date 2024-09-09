import "../../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <header>
          <a href="/">
            <img
              src="/assets/logo-large.png"
              alt="Logo"
              className="footer__image"
              height={48}
            />
          </a>
        </header>
        <div className="footer__content">
          <p>
            Built by{" "}
            <a href="https://github.com/Azamat-developer-88" target="_blank" rel="noreferrer noopener">
              Azamat Mirzaboyev
            </a>{" "}
           
           
          </p>
         
        </div>
      </footer>
    </div>
  );
};

export default Footer;
