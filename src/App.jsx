import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import QuickServices from './components/QuickServices'
import Projects from './components/Projects'
import WhyChooseMe from './components/WhyChooseMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
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
        <Footer/>
      </main>
    </div>
  )
}

export default App