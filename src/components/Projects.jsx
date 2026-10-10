
import edumadaImage from '../assets/images/edu.PNG'
import familleManagerImage from '../assets/images/pub1.PNG'
import tananakoImage from '../assets/images/tana.PNG'

function Projects() {
  const projects = [
    {
      image: edumadaImage,
      category: 'Plateforme éducative',
      title: 'EduMada',
      description:
        'Plateforme dédiée à la préparation des examens à Madagascar avec ressources éducatives, sujets et fonctionnalités interactives.',
      technologies: ['React', 'Symfony', 'MySQL'],
    },
    {
      image: familleManagerImage,
      category: 'Application web',
      title: 'Famille Manager',
      description:
        'Application web de gestion familiale permettant d’organiser les membres, activités, informations et ressources de la famille.',
      technologies: ['Symfony', 'PHP', 'MySQL'],
    },
    {
      image: tananakoImage,
      category: 'Site culturel',
      title: 'Tananako',
      description:
        'Site web dédié à la découverte d’Antananarivo et de Madagascar à travers son histoire, ses lieux et sa culture.',
      technologies: ['React', 'Vite', 'Bootstrap'],
    },
  ]

  // Duplication des projets pour créer un défilement infini
  const infiniteProjects = [...projects, ...projects]

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        {/* Header */}
        <div className="projects-header">

          <div>
            <span className="section-label">
              MES RÉALISATIONS
            </span>

            <h2>
              Des projets en cours qui
              <span> parlent pour moi.</span>
            </h2>
          </div>

          <p>
            Découvrez quelques projets, créations et solutions digitales
            réalisés dans différents domaines.
          </p>

        </div>

      </div>

      {/* Carousel infini */}
      <div className="projects-marquee-wrapper">

        <div className="projects-marquee">

          {infiniteProjects.map((project, index) => (

            <article
              className="project-card project-marquee-card"
              key={`${project.title}-${index}`}
            >

              {/* Image */}
              <div className="project-image-wrapper">

                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />

                <span className="project-category">
                  {project.category}
                </span>

              </div>

              {/* Content */}
              <div className="project-content">

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="project-technologies">

                  {project.technologies.map((technology, techIndex) => (
                    <span key={techIndex}>
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="project-link"
                >
                  Voir le projet
                  <i className="fas fa-arrow-right"></i>
                </a>

              </div>

            </article>

          ))}

        </div>

      </div>

      {/* Bottom CTA */}
      <div className="container">

        <div className="projects-bottom">

          <span>
            Une idée ou une création à réaliser ?
          </span>

          <a href="#contact">
            Parlons-en
            <i className="fas fa-arrow-right"></i>
          </a>

        </div>

      </div>

    </section>
  )
}

export default Projects

