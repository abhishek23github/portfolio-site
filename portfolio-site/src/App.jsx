import React from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTopButton from "./components/ScrollToTopButton";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000
    });
  }, []);

  return (
    <>
      <div id="scrollTopAnchor" style={{ position: 'absolute', top: 0 }}></div>
      <GlobalStyle />
      <Navbar />
      <HeroSection />
      <Projects />
      <About />
      <Contact />
      <ScrollToTopButton />
    </>
  );
}

export default App;
