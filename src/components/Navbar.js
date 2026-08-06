import React, { useEffect, useRef } from 'react';
import './Navbar.css';

function Navbar() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      if (navRef.current) {
        navRef.current.classList.toggle('scrolled', h.scrollTop > 40);
      }
    };

    // Nav active state
    const navLinks = document.querySelectorAll('.navlinks a[data-sec]');
    const sections = document.querySelectorAll('section[id]');
    const navIo = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(l => l.classList.remove('active'));
          const active = document.querySelector(`.navlinks a[data-sec="${entry.target.id}"]`);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-45% 0px -45% 0px' });
    sections.forEach(s => navIo.observe(s));

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navIo.disconnect();
    };
  }, []);

  return (
    <nav id="nav" ref={navRef}>
      <a href="#home" className="logo-mark">
        <img src="/images/logo.jpeg" alt="Seven Flicks" className="logo-img" />
        <span>Seven Flicks</span>
      </a>
      <div className="navlinks">
        <a href="#home" data-sec="home">Home</a>
        <a href="#services" data-sec="services">Services</a>
        <a href="#packages" data-sec="packages">Packages</a>
        <a href="#gallery" data-sec="gallery">Gallery</a>
        <a href="#reviews" data-sec="reviews">Reviews</a>
        <a href="#about" data-sec="about">About</a>
        <a href="#contact" data-sec="contact">Contact</a>
        <a href="https://wa.me/918903842158?text=Hi%20Seven%20Flicks%2C%20I%27d%20like%20to%20book%20a%20session" 
           target="_blank" rel="noopener noreferrer" className="book">Book Now</a>
      </div>
    </nav>
  );
}

export default Navbar;