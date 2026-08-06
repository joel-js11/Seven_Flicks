import React from 'react';
import './Gallery.css';

const galleryItems = [
  { id: 'a', class: 'a', img: '/images/bride.jpeg', fallback: '/images/bride.jpeg', label: 'Bride' },
  { id: 'b', class: '', img: '/images/portrait.jpeg', fallback: '/images/portrait.jpeg', label: 'Portrait' },
  { id: 'c', class: '', img: '/images/wedding.jpeg', fallback: '/images/wedding.jpeg', label: 'Wedding' },
  { id: 'd', class: 'c', img: '/images/birthday.jpeg', fallback: '/images/birthday.jpeg', label: 'Birthday' },
  { id: 'e', class: '', img: '/images/model.jpeg', fallback: '/images/model.jpeg', label: 'Model' }, // <-- Fixed path
  { id: 'f', class: '', img: '/images/casualshoot.jpeg', fallback: '/images/casualshoot.jpeg', label: 'Commercial' },
];

function Gallery() {
  return (
    <section id="gallery" className="reveal">
      <div className="head-row">
        <div>
          <div className="eyebrow">Gallery</div>
          <h2 className="section-title">Our recent works</h2>
        </div>
      </div>
      <div className="gal-grid">
        {galleryItems.map((item) => (
          <div key={item.id} className={`gal-item ${item.class}`}>
            <img 
              src={item.img} 
              alt={item.label} 
              loading="lazy" 
              onError={(e) => { e.target.src = item.fallback; }} 
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;