import "./App.css";
import Navbar from "./Sections/Navbar/Navbar";
import Hero from "./Sections/Hero/Hero";
import About from "./Sections/Aboutme/About";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";
import Contact from "./Sections/Contact/Contact";
import Footer from "./Sections/Footer/Footer";
import ScrollToTop from "./common/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
