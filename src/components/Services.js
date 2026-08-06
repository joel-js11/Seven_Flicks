import React, { useEffect } from 'react';
import './Services.css';

const services = [
  {
    num: '01', // <--- Added this!
    title: 'Wedding',
    desc: 'Full-day coverage from prep to reception, candid and directed.',
    image: '/images/services/wedding.jpeg',
  },
  {
    num: '02',
    title: 'Portraits',
    desc: 'Studio or on-location portrait sessions for individuals and families.',
    image: '/images/services/Portraits.jpeg',
  },
  {
    num: '03',
    title: 'Events',
    desc: 'Corporate functions, launches, and celebrations, fully documented.',
    image: '/images/services/Events.jpeg',
  },
  {
    num: '04',
    title: 'Commercial',
    desc: 'Product and brand photography for campaigns and catalogues.',
    image: '/images/services/Commercial.jpeg',
  },
  {
    num: '05',
    title: 'Editorial',
    desc: 'Fashion and lifestyle shoots with a magazine-ready finish.',
    image: '/images/services/Editorial.jpeg',
  },
  {
    num: '06',
    title: 'Video Flicks',
    desc: 'Short-form highlight reels cut from every session we shoot.',
    image: '/images/services/video-flicks.jpeg',
  },
  {
    num: '07',
    title: 'Retouching',
    desc: 'Colour grading and retouch delivered in our signature tone.',
    image: '/images/services/retouching.jpeg',
  },
  {
    num: '08',
    title: 'Album',
    desc: 'Printed, archival-grade albums designed frame by frame.',
    image: '/images/services/album.jpeg',
  },
];

function Services() {
  
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;

    if (isMobile) {
      const cards = document.querySelectorAll('.svc-card');

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Flip open
            entry.target.classList.add('scroll-flip');
            
            // SAFETY NET: Force it to flip back after 2.5 seconds automatically!
            setTimeout(() => {
              entry.target.classList.remove('scroll-flip');
            }, 2500);
            
          } else {
            // Flip back when scrolling away
            entry.target.classList.remove('scroll-flip');
          }
        });
      }, { threshold: 0.3 });

      cards.forEach((card) => observer.observe(card));

      return () => {
        cards.forEach((card) => observer.unobserve(card));
      };
    }
  }, []);
  

  return (
    <section id="services" className="reveal">
      <div className="head-row">
        <div>
          <div className="eyebrow">What we shoot</div>
          <h2 className="section-title">Services built around your story</h2>
        </div>
        <p className="section-lede">Eight disciplines, one consistent eye — from the first frame to the final print.</p>
      </div>

      <div className="svc-grid">
        {services.map((service, index) => (
          <article className="svc-card" key={index} tabIndex="0">
            <div className="svc-card-inner">
              {/* Front side */}
              <div className="svc-card-face svc-card-front">
                <div className="num">{service.num}</div>
                <div className="svc-front-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
                <span className="svc-view-text">
                  View service <span aria-hidden="true">↗</span>
                </span>
              </div>

              {/* Back side */}
              <div className="svc-card-face svc-card-back">
                <img
                  src={service.image}
                  alt={`${service.title} photography service`}
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300/F2871E/FFFFFF?text=' + service.title;
                  }}
                />
                <div className="svc-back-overlay" />
                <div className="svc-back-content">
                  <span className="svc-back-num">{service.num}</span>
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
    
  );
}

export default Services;