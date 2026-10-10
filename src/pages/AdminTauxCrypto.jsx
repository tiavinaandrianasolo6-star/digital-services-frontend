
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const STORAGE_KEY = 'digitalServicesCryptoRates'

const EMPTY_RATES = {
  retraitRate: '',
  depotRate: '',
  retraitFee: '0',
  depotFee: '0',
  updatedAt: '',
}

function loadRates() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? { ...EMPTY_RATES, ...JSON.parse(saved) } : EMPTY_RATES
  } catch {
    return EMPTY_RATES
  }
}

function AdminTauxCrypto() {
  const [rates, setRates] = useState(EMPTY_RATES)
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    setRates(loadRates())
  }, [])

  function handleChange(event) {
    const { name, value } = event.target

    setRates((previous) => ({
      ...previous,
      [name]: value,
    }))

    setMessage('')
    setError('')
  }

  function handleSubmit(event) {
    event.preventDefault()
    setMessage('')
    setError('')

    const retraitRate = Number(rates.retraitRate)
    const depotRate = Number(rates.depotRate)
    const retraitFee = Number(rates.retraitFee)
    const depotFee = Number(rates.depotFee)

    if (
      !Number.isFinite(retraitRate) ||
      !Number.isFinite(depotRate) ||
      retraitRate <= 0 ||
      depotRate <= 0
    ) {
      setError('Saisissez un taux supérieur à zéro pour le dépôt et le retrait.')
      return
    }

    if (
      !Number.isFinite(retraitFee) ||
      !Number.isFinite(depotFee) ||
      retraitFee < 0 ||
      depotFee < 0 ||
      retraitFee >= 100 ||
      depotFee >= 100
    ) {
      setError('Les frais doivent être compris entre 0 et moins de 100 %.')
      return
    }

    const updatedRates = {
      retraitRate: String(retraitRate),
      depotRate: String(depotRate),
      retraitFee: String(retraitFee),
      depotFee: String(depotFee),
      updatedAt: new Date().toISOString(),
    }

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedRates))
      setRates(updatedRates)
      setMessage('Les taux ont été enregistrés dans ce navigateur.')
    } catch {
      setError('Impossible d’enregistrer les taux dans ce navigateur.')
    }
  }

  function resetRates() {
    const confirmed = window.confirm(
      'Voulez-vous effacer les taux enregistrés sur ce navigateur ?',
    )

    if (!confirmed) return

    localStorage.removeItem(STORAGE_KEY)
    setRates(EMPTY_RATES)
    setMessage('Les taux locaux ont été effacés.')
    setError('')
  }

  const updatedAt = rates.updatedAt
    ? new Date(rates.updatedAt).toLocaleString('fr-FR')
    : 'Aucune mise à jour enregistrée'

  return (
    <main className="crypto-admin-page">
      <div className="crypto-admin-topbar">
        <Link to="/" className="crypto-admin-brand">
          <span className="crypto-admin-brand-mark">D</span>
          <span>Digital<span>Services</span></span>
        </Link>

        <Link to="/services/assistance-crypto" className="crypto-admin-public-link">
          Voir la page publique <i className="fas fa-arrow-up-right-from-square" />
        </Link>
      </div>

      <div className="crypto-admin-container">
        <div className="crypto-admin-heading">
          <span className="crypto-eyebrow">GESTION DES COURS</span>
          <h1>Administration des taux</h1>
          <p>
            Modifiez ici les taux de dépôt et de retrait affichés sur la page
            Assistance Crypto.
          </p>
        </div>

        <div className="crypto-admin-warning">
          <i className="fas fa-triangle-exclamation" />
          <div>
            <strong>Version locale de démonstration</strong>
            <p>
              Les modifications sont enregistrées uniquement dans le navigateur
              utilisé. Cette page n’est pas protégée par une authentification
              et ne convient pas encore à une utilisation publique en production.
            </p>
          </div>
        </div>

        <form className="crypto-admin-form" onSubmit={handleSubmit}>
          <div className="crypto-admin-form-heading">
            <div className="crypto-admin-heading-icon">
              <i className="fas fa-coins" />
            </div>
            <div>
              <h2>Paramètres de change</h2>
              <p>Renseignez les montants en Ariary pour 1 USDT.</p>
            </div>
          </div>

          <div className="crypto-admin-fields">
            <div className="crypto-admin-field">
              <label htmlFor="retraitRate">Taux de retrait — USDT vers Ar</label>
              <div className="crypto-admin-input-wrap">
                <input
                  id="retraitRate"
                  name="retraitRate"
                  type="number"
                  min="0.01"
                  step="any"
                  value={rates.retraitRate}
                  onChange={handleChange}
                  placeholder="Ex. 4500"
                  required
                />
                <span>Ar / USDT</span>
              </div>
              <small>Montant en Ariary versé pour 1 USDT, avant frais.</small>
            </div>

            <div className="crypto-admin-field">
              <label htmlFor="depotRate">Taux de dépôt — Ariary vers USDT</label>
              <div className="crypto-admin-input-wrap">
                <input
                  id="depotRate"
                  name="depotRate"
                  type="number"
                  min="0.01"
                  step="any"
                  value={rates.depotRate}
                  onChange={handleChange}
                  placeholder="Ex. 4600"
                  required
                />
                <span>Ar / USDT</span>
              </div>
              <small>Coût en Ariary pour obtenir 1 USDT, avant frais.</small>
            </div>

            <div className="crypto-admin-field">
              <label htmlFor="retraitFee">Frais de retrait</label>
              <div className="crypto-admin-input-wrap">
                <input
                  id="retraitFee"
                  name="retraitFee"
                  type="number"
                  min="0"
                  max="99.99"
                  step="0.01"
                  value={rates.retraitFee}
                  onChange={handleChange}
                  required
                />
                <span>%</span>
              </div>
              <small>Pourcentage déduit du montant estimé reçu en Ariary.</small>
            </div>

            <div className="crypto-admin-field">
              <label htmlFor="depotFee">Frais de dépôt</label>
              <div className="crypto-admin-input-wrap">
                <input
                  id="depotFee"
                  name="depotFee"
                  type="number"
                  min="0"
                  max="99.99"
                  step="0.01"
                  value={rates.depotFee}
                  onChange={handleChange}
                  required
                />
                <span>%</span>
              </div>
              <small>Pourcentage déduit du montant estimé reçu en USDT.</small>
            </div>
          </div>

          <div className="crypto-admin-updated">
            <i className="far fa-clock" />
            Dernière mise à jour : {updatedAt}
          </div>

          {error && (
            <div className="crypto-admin-message error">
              <i className="fas fa-circle-exclamation" />
              {error}
            </div>
          )}

          {message && (
            <div className="crypto-admin-message success">
              <i className="fas fa-circle-check" />
              {message}
            </div>
          )}

          <div className="crypto-admin-actions">
            <button type="submit" className="crypto-btn-primary">
              <i className="fas fa-floppy-disk" /> Enregistrer les taux
            </button>

            <button
              type="button"
              className="crypto-admin-reset"
              onClick={resetRates}
            >
              Effacer les taux locaux
            </button>
          </div>
        </form>

        <div className="crypto-admin-help">
          <i className="fas fa-lightbulb" />
          <p>
            Après l’enregistrement, ouvrez la page publique dans ce même
            navigateur pour vérifier les valeurs affichées. Pour que tous
            les visiteurs voient les mêmes taux et pour sécuriser cet espace,
            il faudra ensuite connecter cette page au backend Symfony et à
            une authentification administrateur.
          </p>
        </div>
      </div>
    </main>
  )
}

export default AdminTauxCrypto