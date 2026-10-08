function QuickServices() {
  const quickServices = [
    {
      icon: 'fas fa-file-signature',
      title: 'CV & Lettre de motivation',
      description:
        'Création, correction et amélioration de CV et lettres de motivation adaptés à votre objectif.',
    },
    {
      icon: 'fas fa-pen-to-square',
      title: 'Rédaction & correction',
      description:
        'Correction, reformulation, mise en forme et amélioration de vos textes et documents.',
    },
    {
      icon: 'fas fa-table',
      title: 'Excel & Saisie de données',
      description:
        'Saisie, organisation et mise en forme de données dans vos tableaux et fichiers Excel.',
    },
    {
      icon: 'fas fa-magnifying-glass',
      title: 'Recherche & synthèse',
      description:
        'Recherche d’informations, comparaison de sources et création de synthèses claires.',
    },
    {
      icon: 'fas fa-robot',
      title: 'Assistance IA',
      description:
        'Aide avec les outils IA, création de prompts et utilisation de l’IA pour gagner du temps.',
    },
    {
      icon: 'fab fa-bitcoin',
      title: 'Assistance Crypto',
      description:
        'Accompagnement pour comprendre et effectuer vos opérations de dépôt et retrait sur les plateformes et wallets compatibles.',
    },
    {
      icon: 'fas fa-file-pdf',
      title: 'Word, PDF & PowerPoint',
      description:
        'Création, conversion, mise en page et organisation de vos documents numériques.',
    },
    {
      icon: 'fas fa-image',
      title: 'Flyer & visuel simple',
      description:
        'Création de visuels simples pour vos événements, activités et publications en ligne.',
    },
  ]

  return (
    <section id="quick-services" className="quick-services-section">
      <div className="container">

        {/* Header */}
        <div className="quick-services-header">

          <div>
            <span className="section-label">
              QUICK SERVICES
            </span>

            <h2>
              Une petite tâche ?
              <span> Je peux vous aider.</span>
            </h2>
          </div>

          <p>
            Des services rapides pour vos besoins ponctuels,
            sans avoir besoin de lancer un projet complet.
          </p>

        </div>

        {/* Services */}
        <div className="row g-3">

          {quickServices.map((service, index) => (
            <div
              className="col-12 col-md-6 col-lg-4 col-xl-3"
              key={index}
            >

              <div className="quick-service-card">

                <div className="quick-service-icon">
                  <i className={service.icon}></i>
                </div>

                <div className="quick-service-number">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <h3>
                  {service.title}
                </h3>

                <p>
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="quick-service-link"
                >
                  Demander

                  <i className="fas fa-arrow-right"></i>
                </a>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div className="quick-services-cta">

          <div>
            <span>
              Vous avez une autre tâche ?
            </span>

            <strong>
              Parlons-en.
            </strong>
          </div>

          <a
            href="#contact"
            className="quick-services-cta-button"
          >
            Décrire mon besoin
            <i className="fas fa-arrow-right"></i>
          </a>

        </div>

      </div>
    </section>
  )
}

export default QuickServices

