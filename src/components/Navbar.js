import React, { useEffect, useRef, useState } from 'react';
import './Navbar.css';

function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  useEffect(() => {
    const handleScroll = () => {
      const h = document.documentElement;
      if (navRef.current) {
        // Toggle 'scrolled' class only if scroll is greater than 40px
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

  // Close sidebar when a link is clicked
  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav id="nav" ref={navRef}>
        {/* LOGO - Always Static */}
        <a href="#home" className="logo-mark">
          <img src="/images/logo.jpeg" alt="Seven Flicks" className="logo-img" />
          <span>Seven Flicks</span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="navlinks">
          <a href="#home" data-sec="home" onClick={handleLinkClick}>Home</a>
          <a href="#services" data-sec="services" onClick={handleLinkClick}>Services</a>
          <a href="#packages" data-sec="packages" onClick={handleLinkClick}>Packages</a>
          <a href="#gallery" data-sec="gallery" onClick={handleLinkClick}>Gallery</a>
          <a href="#reviews" data-sec="reviews" onClick={handleLinkClick}>Reviews</a>
          <a href="#about" data-sec="about" onClick={handleLinkClick}>About</a>
          <a href="#contact" data-sec="contact" onClick={handleLinkClick}>Contact</a>
          
          {/* Book Now Button - Always on the right, stays white */}
          <a href="https://wa.me/918903842158?text=Hi%20Seven%20Flicks%2C%20I%27d%20like%20to%20book%20a%20session" 
             target="_blank" rel="noopener noreferrer" className="book">Book Now</a>
        </div>

        {/* MOBILE HAMBURGER ICON (3 lines) */}
        <button 
          className={`hamburger ${isOpen ? 'open' : ''}`} 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>

      {/* MOBILE SIDEBAR (Slide in from right) */}
      <div className={`mobile-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <span className="sidebar-title">Menu</span>
          <button className="close-btn" onClick={() => setIsOpen(false)}>✕</button>
        </div>
        <div className="sidebar-links">
          <a href="#home" data-sec="home" onClick={handleLinkClick}>Home</a>
          <a href="#services" data-sec="services" onClick={handleLinkClick}>Services</a>
          <a href="#packages" data-sec="packages" onClick={handleLinkClick}>Packages</a>
          <a href="#gallery" data-sec="gallery" onClick={handleLinkClick}>Gallery</a>
          <a href="#reviews" data-sec="reviews" onClick={handleLinkClick}>Reviews</a>
          <a href="#about" data-sec="about" onClick={handleLinkClick}>About</a>
          <a href="#contact" data-sec="contact" onClick={handleLinkClick}>Contact</a>
          <a href="https://wa.me/918903842158?text=Hi%20Seven%20Flicks%2C%20I%27d%20like%20to%20book%20a%20session" 
             target="_blank" rel="noopener noreferrer" className="book-mobile">Book Now</a>
        </div>
      </div>
      
      {/* Overlay to close sidebar when tapping outside */}
      {isOpen && <div className="sidebar-overlay" onClick={() => setIsOpen(false)}></div>}
    </>
  );
}

export default Navbar;