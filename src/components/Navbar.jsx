function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        {/* Logo */}
        <a className="navbar-brand" href="/">
          <span className="brand-dot"></span>
          T.A Digital<span>Services</span>
        </a>

        {/* Mobile button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        {/* Navigation */}
        <div className="collapse navbar-collapse" id="mainNavbar">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

            <li className="nav-item">
              <a className="nav-link active" href="/">
                Accueil
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#projects">
                Réalisations
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#about">
                À propos
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>

          </ul>

          {/* CTA */}
          <a href="#contact" className="btn btn-service">
            Demander un service
            <i className="fas fa-arrow-right ms-2"></i>
          </a>
        </div>

      </div>
    </nav>
  )
}

export default Navbar