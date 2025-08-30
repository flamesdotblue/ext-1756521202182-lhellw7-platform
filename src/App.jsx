import Hero from './components/Hero';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-['IBM_Plex_Sans','Inter','system-ui']">
      <Hero />
      <Skills />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
