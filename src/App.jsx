import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import QuickServices from './components/QuickServices'
import Projects from './components/Projects'
import WhyChooseMe from './components/WhyChooseMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

import AssistanceCrypto from './pages/AssistanceCrypto'
import AdminTauxCrypto from './pages/AdminTauxCrypto'

function HomePage() {
  return (
    <div className="app">
      <Navbar />

      <main>
        <Hero />
        <Services />
        <QuickServices />
        <Projects />
        <WhyChooseMe />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route
        path="/services/assistance-crypto"
        element={
          <div className="app">
            <Navbar />
            <AssistanceCrypto />
            <Footer />
          </div>
        }
      />

      <Route
        path="/admin/taux-crypto"
        element={<AdminTauxCrypto />}
      />

      <Route
        path="*"
        element={
          <div className="container py-5 text-center">
            <h1>Page introuvable</h1>
            <a href="/" className="btn btn-danger mt-3">
              Retour à l’accueil
            </a>
          </div>
        }
      />
    </Routes>
  )
}

export default App