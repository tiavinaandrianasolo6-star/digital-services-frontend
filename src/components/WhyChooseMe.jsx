function WhyChooseMe() {
  const advantages = [
    {
      icon: 'fas fa-bolt',
      number: '01',
      title: 'Rapide & efficace',
      description:
        'Des solutions pensées pour vous faire gagner du temps et répondre efficacement à vos besoins.',
    },
    {
      icon: 'fas fa-bullseye',
      number: '02',
      title: 'Solutions sur mesure',
      description:
        'Chaque demande est étudiée selon votre objectif afin de proposer une solution adaptée.',
    },
    {
      icon: 'fas fa-robot',
      number: '03',
      title: 'Technologies modernes',
      description:
        'J’utilise des outils et technologies modernes comme React, Symfony et les solutions basées sur l’IA.',
    },
    {
      icon: 'fas fa-handshake',
      number: '04',
      title: 'Accompagnement',
      description:
        'Un échange simple et direct pour comprendre votre besoin et vous accompagner jusqu’à la réalisation.',
    },
  ]

  return (
    <section id="about" className="why-section">
      <div className="container">
        <div className="why-header">
          <div>
            <span className="section-label">POURQUOI MOI ?</span>

            <h2>
              Une approche simple,
              <span> des solutions efficaces.</span>
            </h2>
          </div>

          <p>
            Mon objectif est de transformer vos besoins numériques en
            solutions simples, modernes et utiles.
          </p>
        </div>

        <div className="row g-4">
          {advantages.map((advantage) => (
            <div
              className="col-12 col-md-6 col-lg-3"
              key={advantage.number}
            >
              <div className="why-card">
                <div className="why-card-top">
                  <div className="why-icon">
                    <i className={advantage.icon}></i>
                  </div>

                  <span className="why-number">
                    {advantage.number}
                  </span>
                </div>

                <h3>{advantage.title}</h3>

                <p>{advantage.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="why-bottom">
          <div className="why-bottom-content">
            <span className="why-bottom-label">
              BESOIN D’UNE SOLUTION ?
            </span>

            <h3>
              Vous avez une idée ou une tâche à réaliser ?
            </h3>

            <p>
              Décrivez-moi simplement votre besoin et voyons ensemble
              comment le transformer en solution.
            </p>
          </div>

          <a href="#contact" className="why-button">
            Parlons de votre projet
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseMe