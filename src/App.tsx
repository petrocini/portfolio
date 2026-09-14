import { About } from './components/About';
import { Contact } from './components/Contact';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SelectedWork />
        <Services />
        <Process />
        <Experience />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;
