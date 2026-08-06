import React from 'react';
import './Packages.css';

const packages = [
  { name: 'Birthday Package', price: '₹13,000', whatsapp: 'Birthday%20Package' },
  { name: 'Traditional Wedding', price: '₹35,000', whatsapp: 'Traditional%20Wedding%20package' },
  { name: 'Puberty Function', price: '₹15,000', whatsapp: 'Puberty%20Function%20package' },
  { 
    name: 'Candid Photography & Video Wedding', 
    price: 'Enquire', 
    note: 'Coverage tailored to your day',
    priceNote: 'Get a quote',
    whatsapp: 'Candid%20Photography%20%26%20Video%20Wedding',
    isQuote: true
  },
  { name: 'Ear Piercing', price: '₹30,000', whatsapp: 'Ear%20Piercing%20package' },
];

function Packages() {
  return (
    <section id="packages" className="reveal">
      <div className="head-row">
        <div>
          <div className="eyebrow">Pricing</div>
          <h2 className="section-title">Choose your coverage</h2>
        </div>
        <p className="section-lede">Straightforward pricing for every occasion — reach out on WhatsApp to confirm your date.</p>
      </div>
      <div className="pkg-list">
        {packages.map((pkg, index) => (
          <div className="pkg-line" key={index}>
            <span className="pnum">{pkg.num}</span>
            <span className="pname">
              {pkg.name}
              {pkg.note && <span className="pnote">{pkg.note}</span>}
            </span>
            <span className="pprice">
              {pkg.price}
              {pkg.priceNote && <small>{pkg.priceNote}</small>}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Packages;