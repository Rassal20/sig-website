import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import PartnershipsSection from './components/PartnershipsSection'
import VisionSection from './components/VisionSection'
import LicensingSection from './components/LicensingSection'
import GamesSection from './components/GamesSection'
import ParticleBackground from './components/ParticleBackground'
import FloatingElements from './components/FloatingElements'
import './App.css'

function App() {
  return (
    <div className="App">
      <ParticleBackground />
      <FloatingElements />
      <HeroSection />
      <ServicesSection />
      <PartnershipsSection />
      <VisionSection />
      <LicensingSection />
      <GamesSection />
      
      {/* Copyright Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-sm py-6 mt-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} Schamz International Gaming LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
