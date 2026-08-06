import React from 'react';
import './Reviews.css';

const reviews = [
  { 
    stars: '★★★★★', 
    text: '"Seven Flicks captured our wedding better than we could\'ve imagined. Every frame felt intentional."',
    name: 'Madan & Nandhini',
    role: 'Wedding client'
  },
  { 
    stars: '★★★★★', 
    text: '"Professional, fast turnaround, and the portrait session felt effortless. Highly recommend."',
    name: 'Priya Bharathi B',
    role: 'Portrait client'
  },
  { 
    stars: '★★★★★', 
    text: '"Our product shoot came back looking like it belonged in a campaign twice our budget."',
    name: 'Joel Sugantharaj J',
    role: 'Commercial client'
  },
];

function Reviews() {
  return (
    <section id="reviews" className="reveal">
      <div className="head-row">
        <div>
          <div className="eyebrow">Reviews</div>
          <h2 className="section-title">What clients say</h2>
        </div>
        <p className="section-lede">100+ testimonials from 200+ clients across Madurai and beyond.</p>
      </div>
      <div className="rev-track">
        {reviews.map((review, index) => (
          <div className="rev-card" key={index}>
            <div className="stars">{review.stars}</div>
            <p>{review.text}</p>
            <div className="rev-name">{review.name}</div>
            <div className="rev-role">{review.role}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;