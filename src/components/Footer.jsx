function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer-section">
      <div className="container">

        <div className="footer-main">

          {/* Brand */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="brand-dot"></span>
              Digital<span>Services</span>
            </a>

            <p>
              Des solutions digitales simples, rapides et professionnelles
              pour vous aider à gagner du temps.
            </p>

            <div className="footer-socials">
              <a
                href="https://www.facebook.com/thiams.andrianasolo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                href="https://t.me/tiavinaAND"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <i className="fab fa-telegram-plane"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/tiavina-andrianasolo-0b8a362a1/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="mailto:tiavinaandrianasolo6@gmail.com"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-column">
            <h3>Navigation</h3>

            <a href="#services">Services</a>
            <a href="#projects">Réalisations</a>
            <a href="#about">À propos</a>
            <a href="#contact">Contact</a>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3>Services</h3>

            <a href="#services">Développement Web</a>
            <a href="#services">IA & Productivité</a>
            <a href="#services">Design Digital</a>
            <a href="#services">Assistance numérique</a>
          </div>

          {/* Contact */}
          <div className="footer-column footer-contact">
            <h3>Contact</h3>

            <a href="mailto:tiavinaandrianasolo6@gmail.com">
              <i className="fas fa-envelope"></i>
              tiavinaandrianasolo6@gmail.com
            </a>

            <a
              href="https://t.me/tiavinaAND"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-telegram-plane"></i>
              Telegram
            </a>

            <a href="#contact" className="footer-contact-button">
              Demander un service
              <i className="fas fa-arrow-right"></i>
            </a>
          </div>

        </div>

        {/* Bottom */}
        <div className="footer-bottom">

          <p>
            © {currentYear} DigitalServices. Tous droits réservés.
          </p>

          <div className="footer-bottom-links">
            <a href="#contact">Me contacter</a>
            <span>•</span>
            <a href="#services">Mes services</a>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer