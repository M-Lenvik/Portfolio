//App.tsx
import './App.css';
import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
