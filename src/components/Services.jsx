function Services() {
  const services = [
    {
      icon: 'fas fa-code',
      title: 'Développement Web',
      description:
        'Création de sites web et applications modernes, rapides et adaptés à vos besoins.',
      tags: ['React', 'Symfony', 'PHP'],
    },
    {
      icon: 'fas fa-robot',
      title: 'IA & Productivité',
      description:
        'Utilisation intelligente de l’IA pour rédiger, rechercher, organiser et automatiser vos tâches.',
      tags: ['IA', 'Automatisation', 'Productivité'],
    },
    {
      icon: 'fas fa-palette',
      title: 'Design Digital',
      description:
        'Création de visuels professionnels pour vos activités, entreprises, événements et réseaux sociaux.',
      tags: ['Canva', 'Visuels', 'Branding'],
    },
    {
      icon: 'fas fa-video',
      title: 'Création de contenu',
      description:
        'Montage de vidéos courtes, publications, sous-titres et contenus adaptés aux réseaux sociaux.',
      tags: ['Vidéo', 'Social Media', 'Contenu'],
    },
    {
      icon: 'fas fa-bug',
      title: 'Debug & Maintenance',
      description:
        'Correction de bugs et amélioration de vos applications, sites web et projets existants.',
      tags: ['PHP', 'JavaScript', 'MySQL'],
    },
    {
      icon: 'fas fa-file-lines',
      title: 'Assistance numérique',
      description:
        'Aide pour vos documents, recherches, saisies de données, présentations et tâches numériques.',
      tags: ['Word', 'Excel', 'PDF'],
    },
  ]

  // On regroupe les services par 3 pour chaque slide
  const slides = []

  for (let i = 0; i < services.length; i += 3) {
    slides.push(services.slice(i, i + 3))
  }

  return (
    <section id="services" className="services-section">
      <div className="container">

        {/* Section header */}
        <div className="services-header">
          <div>
            <span className="section-label">
              MES SERVICES
            </span>

            <h2>
              Des solutions pour
              <span> vos besoins.</span>
            </h2>
          </div>

          <p>
            Que vous soyez particulier, étudiant, entrepreneur ou entreprise,
            je peux vous accompagner dans vos différents besoins digitaux.
          </p>
        </div>

        {/* Carousel */}
        <div
          id="servicesCarousel"
          className="carousel slide"
          data-bs-ride="false"
        >

          {/* Slides */}
          <div className="carousel-inner">

            {slides.map((slide, slideIndex) => (
              <div
                className={`carousel-item ${
                  slideIndex === 0 ? 'active' : ''
                }`}
                key={slideIndex}
              >

                <div className="row g-4">

                  {slide.map((service, index) => {

                    const serviceIndex = slideIndex * 3 + index

                    return (
                      <div
                        className="col-12 col-md-6 col-lg-4"
                        key={serviceIndex}
                      >

                        <div className="service-card">

                          {/* Card top */}
                          <div className="service-card-top">

                            <div className="service-card-icon">
                              <i className={service.icon}></i>
                            </div>

                            <span className="service-number">
                              {String(serviceIndex + 1).padStart(2, '0')}
                            </span>

                          </div>

                          {/* Title */}
                          <h3>
                            {service.title}
                          </h3>

                          {/* Description */}
                          <p>
                            {service.description}
                          </p>

                          {/* Tags */}
                          <div className="service-tags">

                            {service.tags.map((tag, tagIndex) => (
                              <span key={tagIndex}>
                                {tag}
                              </span>
                            ))}

                          </div>

                          {/* Link */}
                          <a
                            href="#contact"
                            className="service-link"
                          >
                            Demander ce service

                            <i className="fas fa-arrow-right"></i>
                          </a>

                        </div>

                      </div>
                    )
                  })}

                </div>

              </div>
            ))}

          </div>

          {/* Controls + indicators */}
          <div className="services-carousel-controls">

            {/* Previous */}
            <button
              className="carousel-control-custom"
              type="button"
              data-bs-target="#servicesCarousel"
              data-bs-slide="prev"
              aria-label="Services précédents"
            >
              <i className="fas fa-arrow-left"></i>
            </button>

            {/* Indicators */}
            <div className="services-indicators">

              {slides.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#servicesCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? 'active' : ''}
                  aria-current={index === 0 ? 'true' : undefined}
                  aria-label={`Slide ${index + 1}`}
                ></button>
              ))}

            </div>

            {/* Next */}
            <button
              className="carousel-control-custom"
              type="button"
              data-bs-target="#servicesCarousel"
              data-bs-slide="next"
              aria-label="Services suivants"
            >
              <i className="fas fa-arrow-right"></i>
            </button>

          </div>

        </div>

      </div>
    </section>
  )
}

export default Services

