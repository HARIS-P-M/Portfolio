import { useState } from 'react';
import './index.css';
import LoadingScreen from './components/LoadingScreen';
import CustomCursor from './components/CustomCursor';
import ScrollProgress from './components/ScrollProgress';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Terminal from './components/Terminal';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Loading screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          {/* Global UI elements */}
          <CustomCursor />
          <ScrollProgress />
          <ParticleBackground />

          {/* Layout */}
          <Navbar />
          <main>
            <Hero />
            <About />
            <Terminal />
            <Skills />
            <Projects />
            <Achievements />
            <Contact />
          </main>
          <Footer />

          {/* Floating AI widget */}
          <FloatingWidget />
        </>
      )}
    </>
  );
}

export default App;
