import './styles/globals.css';
import { useTheme } from './hooks/useTheme';
import Navbar from './components/sections/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Metrics from './components/sections/Metrics';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Philosophy from './components/sections/Philosophy';
import Education from './components/sections/Education';
import CodingProfiles from './components/sections/CodingProfiles';
import Contact from './components/sections/Contact';
import Footer from './components/sections/Footer';

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <About />
        <Metrics />
        <Skills />
        <Experience />
        <Projects />
        <Philosophy />
        <Education />
        <CodingProfiles />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
