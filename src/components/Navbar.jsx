import { Link } from 'react-router-dom'

const serviceLinks = [
  {
    label: 'Développement Web',
    icon: 'fas fa-code',
    path: '/services/developpement-web',
  },
  {
    label: 'IA & Productivité',
    icon: 'fas fa-robot',
    path: '/services/ia-productivite',
  },
  {
    label: 'Design Digital',
    icon: 'fas fa-palette',
    path: '/services/design-digital',
  },
  {
    label: 'Création de contenu',
    icon: 'fas fa-video',
    path: '/services/creation-contenu',
  },
  {
    label: 'Debug & Maintenance',
    icon: 'fas fa-screwdriver-wrench',
    path: '/services/debug-maintenance',
  },
  {
    label: 'Assistance numérique',
    icon: 'fas fa-file-lines',
    path: '/services/assistance-numerique',
  },
  {
    label: 'Crypto & Portefeuilles',
    icon: 'fas fa-wallet',
    path: '/services/assistance-crypto',
  },
]

function Navbar() {
  return (
    <header className="site-header">
      {/* NAVBAR PRINCIPALE */}
      <nav className="navbar navbar-expand-lg navbar-dark custom-navbar">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <span className="brand-dot"></span>
            T.A.D.<span>S</span>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="false"
            aria-label="Ouvrir le menu"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="mainNavbar">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Accueil
                </Link>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#services">
                  Services
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#projects">
                  Réalisations
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  À propos
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#contact">
                  Contact
                </a>
              </li>
            </ul>

            <a href="/#contact" className="btn btn-service">
              Demander un service
              <i className="fas fa-arrow-right ms-2"></i>
            </a>
          </div>
        </div>
      </nav>

      {/* DEUXIÈME NAVBAR : TOUS LES SERVICES */}
      <div className="services-nav-bar">
        <div className="container">
          <div className="services-nav-scroll">
            {serviceLinks.map((service) => (
              <Link
                key={service.path}
                to={service.path}
                className={`services-nav-link ${
                  service.path === '/services/assistance-crypto'
                    ? 'crypto-nav-link'
                    : ''
                }`}
              >
                <i className={service.icon}></i>
                <span>{service.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
