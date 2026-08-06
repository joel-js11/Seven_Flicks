import React, { useEffect, useRef } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import Packages from './components/Packages';
import Gallery from './components/Gallery';
import Reviews from './components/Reviews';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const progressRef = useRef(null);

  useEffect(() => {
    // Progress bar scroll
    const handleScroll = () => {
      const h = document.documentElement;
      const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = scrolled + '%';
      }
    };

    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      });
    }, { threshold: 0.12 });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="App">
      <div id="progress" ref={progressRef}></div>
      <Navbar />
      <Home />
      <Services />
      <Packages />
      <Gallery />
      <Reviews />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;