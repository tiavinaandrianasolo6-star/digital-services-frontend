import heroImage from '../assets/images/color.png'
function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* LEFT */}
          <div className="col-lg-7">

            <div className="hero-badge">
              <span className="status-dot"></span>
              Disponible pour de nouveaux projets
            </div>

            <h1 className="hero-title">
              Des solutions digitales
              <span> pour vous faire gagner du temps.</span>
            </h1>

            <p className="hero-description">
              Développement web, intelligence artificielle, design digital,
              contenu et assistance numérique. Des services simples,
              rapides et adaptés à vos besoins.
            </p>

            <div className="hero-actions">
              <a href="#contact" className="btn hero-btn-primary">
                Demander un service
                <i className="fas fa-arrow-right ms-2"></i>
              </a>

              <a href="#services" className="btn hero-btn-secondary">
                Découvrir mes services
              </a>
            </div>

            <div className="hero-trust">
              <div className="trust-item">
                <i className="fas fa-bolt"></i>
                <span>Rapide</span>
              </div>

              <div className="trust-item">
                <i className="fas fa-laptop-code"></i>
                <span>Digital</span>
              </div>

              <div className="trust-item">
                <i className="fas fa-robot"></i>
                <span>IA assistée</span>
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="col-lg-5">

            <div className="hero-visual">

              <div className="glow glow-one"></div>
              <div className="glow glow-two"></div>

              <div className="service-panel"style={{ backgroundImage: `url(${heroImage})` }}>

                <div className="panel-header">
                  <div>
                    <span className="panel-label">
                      DIGITAL SERVICES
                    </span>

                    <h3>
                      Votre besoin.
                      <br />
                      Ma solution.
                    </h3>
                  </div>

                  <div className="panel-icon">
                    <i className="fas fa-layer-group"></i>
                  </div>
                </div>

                <div className="service-list">

                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-code"></i>
                    </div>

                    <div>
                      <strong>Web Development</strong>
                      <small>Sites & applications</small>
                    </div>

                    <i className="fas fa-check service-check"></i>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-robot"></i>
                    </div>

                    <div>
                      <strong>AI & Productivity</strong>
                      <small>Gagner du temps</small>
                    </div>

                    <i className="fas fa-check service-check"></i>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-palette"></i>
                    </div>

                    <div>
                      <strong>Design Digital</strong>
                      <small>Visuels & contenus</small>
                    </div>

                    <i className="fas fa-check service-check"></i>
                  </div>

                  <div className="service-item">
                    <div className="service-icon">
                      <i className="fas fa-wrench"></i>
                    </div>

                    <div>
                      <strong>Debug & Maintenance</strong>
                      <small>Corriger & améliorer</small>
                    </div>

                    <i className="fas fa-check service-check"></i>
                  </div>

                </div>

                <div className="panel-footer">
                  <span>
                    <i className="fas fa-circle"></i>
                    Disponible maintenant
                  </span>

                  <span>
                    <i className="fas fa-arrow-up-right-from-square"></i>
                  </span>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  )
}

export default Hero