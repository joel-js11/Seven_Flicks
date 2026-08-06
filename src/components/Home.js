import React from 'react';
import './Home.css';

function Home() {
  return (
    <section id="home">
      <div className="grain"></div>
      <div className="slash"></div>
      <div className="slash two"></div>
      <div className="hero-inner">
        <div className="eyebrow hero-eyebrow"> Seven Frames, One Story</div>
        <h1>We shoot the<br />moments <em>worth keeping.</em></h1>
        <div className="btn-row">
          <a href="https://wa.me/918903842158?text=Hi%20Seven%20Flicks%2C%20I%27d%20like%20to%20book%20a%20session" 
             target="_blank" rel="noopener noreferrer" className="btn primary">Book a Session</a>
          <a href="#gallery" className="btn ghost">View Gallery</a>
        </div>
      </div>
      <div className="hero-meta">
      </div>
    </section>
  );
}

export default Home;