import './App.css';
import Company from './components/Company';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Overview from './components/Overview';
import Projects from './components/Projects';
import Skills from './components/Skills';

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Overview />
      <Skills />
      <Company />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
