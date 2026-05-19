//App.tsx
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Techs } from './components/Techs/Techs';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer/Footer';
import { useSmoothScroll } from './hooks/useSmoothScroll';

function App() {
  useSmoothScroll();

  return (
    <>
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Techs />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
