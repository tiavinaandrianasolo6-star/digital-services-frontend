function Contact() {
  const socialLinks = [
    {
      icon: 'fab fa-facebook-f',
      name: 'Facebook',
      label: 'Discutons sur Facebook',
      url: 'https://www.facebook.com/thiams.andrianasolo',
    },
    {
      icon: 'fab fa-telegram-plane',
      name: 'Telegram',
      label: 'Contactez-moi sur Telegram',
      url: 'https://t.me/tiavinaAND',
    },
    {
      icon: 'fab fa-linkedin-in',
      name: 'LinkedIn',
      label: 'Retrouvez-moi sur LinkedIn',
      url: 'https://www.linkedin.com/in/tiavina-andrianasolo-0b8a362a1/',
    },
    {
      icon: 'fas fa-envelope',
      name: 'Email',
      label: 'Envoyez-moi un email',
      url: 'mailto:tiavinaandrianasolo6@gmail.com',
    },
  ]

  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="contact-header">
          <div>
            <span className="section-label">CONTACT</span>

            <h2>
              Parlons de votre
              <span> projet.</span>
            </h2>
          </div>

          <p>
            Vous avez une question, une idée ou besoin d’un service digital ?
            Contactez-moi directement ou envoyez votre message depuis ce site.
          </p>
        </div>

        <div className="row g-4">

          {/* Informations de contact */}
          <div className="col-12 col-lg-5">
            <div className="contact-info-card">

              <div className="contact-intro">
                <div className="contact-main-icon">
                  <i className="fas fa-paper-plane"></i>
                </div>

                <div>
                  <span>DISPONIBLE POUR VOUS</span>
                  <h3>Une question ?</h3>
                </div>
              </div>

              <p className="contact-info-text">
                Choisissez le moyen de contact qui vous convient le mieux.
                Je vous répondrai dès que possible.
              </p>

              <div className="social-links">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-contact-link"
                  >
                    <div className="social-contact-icon">
                      <i className={social.icon}></i>
                    </div>

                    <div className="social-contact-content">
                      <strong>{social.name}</strong>
                      <span>{social.label}</span>
                    </div>

                    <i className="fas fa-arrow-up-right-from-square social-arrow"></i>
                  </a>
                ))}

              </div>

            </div>
          </div>

          {/* Formulaire */}
          <div className="col-12 col-lg-7">
            <div className="contact-form-card">

              <div className="contact-form-header">
                <span>MESSAGE DIRECT</span>
                <h3>Décrivez votre besoin</h3>
                <p>
                  Remplissez le formulaire et envoyez-moi directement votre
                  demande.
                </p>
              </div>

              <form>

                <div className="row g-3">

                  <div className="col-12 col-md-6">
                    <label htmlFor="name">
                      Nom
                    </label>

                    <div className="contact-input-wrapper">
                      <i className="fas fa-user"></i>

                      <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <label htmlFor="email">
                      Email
                    </label>

                    <div className="contact-input-wrapper">
                      <i className="fas fa-envelope"></i>

                      <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="subject">
                      Sujet
                    </label>

                    <div className="contact-input-wrapper">
                      <i className="fas fa-tag"></i>

                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        placeholder="Objet de votre demande"
                      />
                    </div>
                  </div>

                  <div className="col-12">
                    <label htmlFor="message">
                      Message
                    </label>

                    <div className="contact-input-wrapper textarea-wrapper">
                      <i className="fas fa-message"></i>

                      <textarea
                        id="message"
                        name="message"
                        rows="6"
                        placeholder="Décrivez votre besoin..."
                      ></textarea>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      type="submit"
                      className="contact-submit"
                    >
                      Envoyer mon message
                      <i className="fas fa-paper-plane"></i>
                    </button>
                  </div>

                </div>

              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Contact