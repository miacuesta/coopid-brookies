import Marquee from './components/Marquee';
import Nav from './components/Nav';
import Hero from './components/Hero';
import Brookie from './components/Brookie';
import Sabores from './components/Sabores';
import Marca from './components/Marca';
import Footer from './components/Footer';
import CloudDefs from './components/CloudDefs';
import useReveal from './hooks/useReveal';
import useSmoothScroll from './hooks/useSmoothScroll';
import useClearCaret from './hooks/useClearCaret';

export default function App() {
  useReveal();
  useSmoothScroll();
  useClearCaret();

  return (
    <>
      <Marquee />
      <Nav />
      <Hero />
      <Brookie />
      <Sabores />
      <Marca />
      <Footer />
      <CloudDefs />
    </>
  );
}
