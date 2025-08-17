//App.tsx
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Techs } from './components/Techs/Techs';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Techs />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
