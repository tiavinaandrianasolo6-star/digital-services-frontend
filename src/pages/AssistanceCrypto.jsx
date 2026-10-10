
import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'digitalServicesCryptoRates'

const DEFAULT_RATES = {
  retraitRate: '',
  depotRate: '',
  retraitFee: '0',
  depotFee: '0',
  updatedAt: '',
}

function readRates() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...DEFAULT_RATES, ...JSON.parse(saved) } : DEFAULT_RATES
  } catch {
    return DEFAULT_RATES
  }
}

function formatNumber(value, maximumFractionDigits = 2) {
  return new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits,
  }).format(value)
}

function AssistanceCrypto() {
  const [rates, setRates] = useState(DEFAULT_RATES)
  const [mode, setMode] = useState('retrait')
  const [amount, setAmount] = useState('')
  const [notice, setNotice] = useState('')

  useEffect(() => {
    setRates(readRates())
  }, [])

  const rate = Number(
    mode === 'retrait' ? rates.retraitRate : rates.depotRate,
  )
  const fee = Number(
    mode === 'retrait' ? rates.retraitFee : rates.depotFee,
  )

  const result = useMemo(() => {
    const value = Number(amount)

    if (!amount || !Number.isFinite(value) || value <= 0 || rate <= 0) {
      return null
    }

    if (mode === 'retrait') {
      const gross = value * rate
      return {
        amount: Math.max(0, gross * (1 - fee / 100)),
        currency: 'Ar',
        feeAmount: gross * (fee / 100),
      }
    }

    const gross = value / rate
    return {
      amount: Math.max(0, gross * (1 - fee / 100)),
      currency: 'USDT',
      feeAmount: gross * (fee / 100),
    }
  }, [amount, rate, fee, mode])

  const updatedLabel = rates.updatedAt
    ? new Date(rates.updatedAt).toLocaleString('fr-FR')
    : 'Pas encore renseigné'

  function requestTransaction() {
    const message =
      mode === 'retrait'
        ? `Bonjour, je souhaite demander un retrait de ${amount} USDT en Ariary. Pouvez-vous me confirmer le taux, les frais et le montant final ?`
        : `Bonjour, je souhaite effectuer un dépôt de ${amount} Ar pour recevoir des USDT. Pouvez-vous me confirmer le taux, les frais et le montant final ?`

    const url = `https://t.me/tiavinaAND?text=${encodeURIComponent(message)}`
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <main className="crypto-page">
      <section className="crypto-hero">
        <div className="container crypto-hero-grid">
          <div className="crypto-hero-copy">
            <span className="crypto-eyebrow">
              <span className="crypto-live-dot" />
              ASSISTANCE CRYPTO & PORTEFEUILLES
            </span>

            <h1>
              Vos transactions crypto,
              <span> accompagnées en toute clarté.</span>
            </h1>

            <p>
              Dépôt, retrait USDT en Ariary et assistance à l’utilisation
              de Binance et des portefeuilles numériques. Les conditions
              et le taux final sont confirmés avant chaque transaction.
            </p>

            <div className="crypto-hero-actions">
              <a href="#cours-crypto" className="crypto-btn-primary">
                Voir les cours du jour
                <i className="fas fa-arrow-right" />
              </a>

              <a href="#assistance-crypto" className="crypto-btn-secondary">
                Découvrir les services
              </a>
            </div>

            <div className="crypto-trust-line">
              <i className="fas fa-shield-halved" />
              <span>Confirmation du taux avant transaction</span>
            </div>
          </div>

          <div className="crypto-visual-card">
            <div className="crypto-visual-top">
              <span>ÉCHANGE NUMÉRIQUE</span>
              <i className="fas fa-arrow-right-arrow-left" />
            </div>

            <div className="crypto-coin-row">
              <div className="crypto-coin crypto-coin-usdt">₮</div>
              <div>
                <strong>USDT</strong>
                <span>Tether</span>
              </div>
              <span className="crypto-coin-tag">Crypto</span>
            </div>

            <div className="crypto-exchange-symbol">
              <i className="fas fa-arrow-down-up-across-line" />
            </div>

            <div className="crypto-coin-row">
              <div className="crypto-coin crypto-coin-mga">Ar</div>
              <div>
                <strong>Ariary</strong>
                <span>MGA</span>
              </div>
              <span className="crypto-coin-tag">Local</span>
            </div>

            <div className="crypto-visual-bottom">
              <i className="fas fa-circle-check" />
              Taux confirmé avant validation
            </div>
          </div>
        </div>
      </section>

      <section className="crypto-rates-section" id="cours-crypto">
        <div className="container">
          <div className="crypto-section-heading">
            <span className="crypto-eyebrow">COURS DU JOUR</span>
            <h2>Les taux de change</h2>
            <p>
              Taux renseignés manuellement par le gestionnaire.
              Le montant final doit être confirmé avant chaque opération.
            </p>
          </div>

          <div className="crypto-rates-grid">
            <article className="crypto-rate-card">
              <div className="crypto-rate-card-head">
                <div className="crypto-rate-icon green">
                  <i className="fas fa-arrow-down" />
                </div>
                <span className="crypto-rate-type">RETRAIT</span>
              </div>

              <h3>USDT <i className="fas fa-arrow-right" /> Ariary</h3>
              <p>Vous envoyez des USDT et recevez des Ariary.</p>

              <div className="crypto-rate-value">
                {Number(rates.retraitRate) > 0
                  ? `${formatNumber(Number(rates.retraitRate))} Ar`
                  : 'Taux à confirmer'}
                {Number(rates.retraitRate) > 0 && (
                  <small>pour 1 USDT</small>
                )}
              </div>

              <a
                href="#calculateur-crypto"
                onClick={() => setMode('retrait')}
                className="crypto-text-link"
              >
                Calculer un retrait <i className="fas fa-arrow-right" />
              </a>
            </article>

            <article className="crypto-rate-card featured">
              <div className="crypto-rate-card-head">
                <div className="crypto-rate-icon red">
                  <i className="fas fa-arrow-up" />
                </div>
                <span className="crypto-rate-type">DÉPÔT</span>
              </div>

              <h3>Ariary <i className="fas fa-arrow-right" /> USDT</h3>
              <p>Vous envoyez des Ariary et recevez des USDT.</p>

              <div className="crypto-rate-value">
                {Number(rates.depotRate) > 0
                  ? `${formatNumber(Number(rates.depotRate))} Ar`
                  : 'Taux à confirmer'}
                {Number(rates.depotRate) > 0 && (
                  <small>pour 1 USDT</small>
                )}
              </div>

              <a
                href="#calculateur-crypto"
                onClick={() => setMode('depot')}
                className="crypto-text-link"
              >
                Calculer un dépôt <i className="fas fa-arrow-right" />
              </a>
            </article>
          </div>

          <div className="crypto-rate-update">
            <i className="far fa-clock" />
            Dernière mise à jour : {updatedLabel}
          </div>
        </div>
      </section>

      <section className="crypto-calculator-section" id="calculateur-crypto">
        <div className="container">
          <div className="crypto-calculator">
            <div className="crypto-calculator-info">
              <span className="crypto-eyebrow">ESTIMATION</span>
              <h2>Calculez votre transaction</h2>
              <p>
                Obtenez une estimation selon le taux actuellement affiché.
                Le montant définitif dépend de la confirmation du taux et
                des éventuels frais annoncés avant la transaction.
              </p>

              <div className="crypto-calculator-note">
                <i className="fas fa-circle-info" />
                <span>Il s’agit d’une estimation, pas d’une confirmation de paiement.</span>
              </div>
            </div>

            <div className="crypto-calculator-form">
              <label htmlFor="crypto-mode">Type de transaction</label>
              <select
                id="crypto-mode"
                value={mode}
                onChange={(event) => {
                  setMode(event.target.value)
                  setAmount('')
                  setNotice('')
                }}
              >
                <option value="retrait">Retrait — USDT vers Ariary</option>
                <option value="depot">Dépôt — Ariary vers USDT</option>
              </select>

              <label htmlFor="crypto-amount">
                {mode === 'retrait' ? 'Montant en USDT' : 'Montant en Ariary'}
              </label>
              <input
                id="crypto-amount"
                type="number"
                min="0"
                step="any"
                value={amount}
                onChange={(event) => setAmount(event.target.value)}
                placeholder={mode === 'retrait' ? 'Ex. 50' : 'Ex. 250000'}
              />

              <div className="crypto-result-box">
                <span>Montant estimé à recevoir</span>
                <strong>
                  {result
                    ? `${formatNumber(result.amount, 4)} ${result.currency}`
                    : '—'}
                </strong>
                {result && fee > 0 && (
                  <small>Frais estimés : {formatNumber(result.feeAmount, 4)} {result.currency}</small>
                )}
                {!result && (
                  <small>Entrez un montant et vérifiez que le taux est disponible.</small>
                )}
              </div>

              <button
                type="button"
                className="crypto-btn-primary crypto-full-btn"
                disabled={!result}
                onClick={requestTransaction}
              >
                Demander confirmation
                <i className="fab fa-telegram" />
              </button>

              {notice && <p className="crypto-form-notice">{notice}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="crypto-services-section" id="assistance-crypto">
        <div className="container">
          <div className="crypto-section-heading">
            <span className="crypto-eyebrow">NOS SERVICES</span>
            <h2>Un accompagnement adapté à vos besoins</h2>
            <p>Du change crypto à la prise en main de vos portefeuilles.</p>
          </div>

          <div className="crypto-services-grid">
            <article className="crypto-service-card">
              <div className="crypto-service-icon"><i className="fas fa-wallet" /></div>
              <h3>Dépôt & retrait USDT</h3>
              <p>
                Demande de dépôt ou retrait avec vérification du montant,
                du taux, du réseau et des frais avant confirmation.
              </p>
            </article>

            <article className="crypto-service-card">
              <div className="crypto-service-icon"><i className="fas fa-mobile-screen-button" /></div>
              <h3>Binance & wallets</h3>
              <p>
                Accompagnement pour comprendre les portefeuilles,
                les adresses de réception et les réseaux de transfert.
              </p>
            </article>

            <article className="crypto-service-card">
              <div className="crypto-service-icon"><i className="fas fa-user-shield" /></div>
              <h3>Assistance numérique</h3>
              <p>
                Aide à la prise en main des comptes, aux réglages de sécurité
                et à l’utilisation des portefeuilles électroniques.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="crypto-steps-section">
        <div className="container">
          <div className="crypto-section-heading">
            <span className="crypto-eyebrow">COMMENT ÇA MARCHE ?</span>
            <h2>Une démarche simple et transparente</h2>
          </div>

          <div className="crypto-steps-grid">
            {[
              ['01', 'Faites votre demande', 'Indiquez le type de transaction et le montant souhaité.'],
              ['02', 'Confirmez le taux', 'Le taux, les frais, le réseau et le montant final sont confirmés.'],
              ['03', 'Vérification', 'La réception des fonds est vérifiée avant toute opération correspondante.'],
              ['04', 'Confirmation finale', 'Une confirmation de transaction est communiquée après vérification.'],
            ].map(([number, title, description]) => (
              <article className="crypto-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="crypto-security-section">
        <div className="container crypto-security-inner">
          <div className="crypto-security-icon"><i className="fas fa-shield-halved" /></div>
          <div>
            <h2>Votre sécurité reste prioritaire</h2>
            <p>
              Ne communiquez jamais votre mot de passe, code de vérification,
              clé privée ou phrase de récupération. Vérifiez toujours le réseau
              et l’adresse de destination avant de valider un transfert.
            </p>
          </div>
        </div>
      </section>

      <section className="crypto-final-cta">
        <div className="container">
          <span className="crypto-eyebrow">BESOIN D’UN ACCOMPAGNEMENT ?</span>
          <h2>Parlons de votre transaction.</h2>
          <p>Contactez-moi pour confirmer les conditions avant toute opération.</p>
          <a
            href="https://t.me/tiavinaAND"
            target="_blank"
            rel="noreferrer"
            className="crypto-btn-primary"
          >
            Contacter sur Telegram <i className="fab fa-telegram" />
          </a>
          <div>
            <Link to="/" className="crypto-back-home">Retour à DigitalServices</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default AssistanceCrypto