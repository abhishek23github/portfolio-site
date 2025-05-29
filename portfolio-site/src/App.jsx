import React, { useEffect, useState } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import GlobalStyle from "./styles/GlobalStyle";
import ScrollToTopButton from "./components/ScrollToTopButton";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const handleScroll = () => {
      setShowScroll(window.scrollY > 300); // show after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <ScrollToTopButton show={showScroll} /> {/* ✅ Pass show prop */}
    </>
  );
}

export default App;
