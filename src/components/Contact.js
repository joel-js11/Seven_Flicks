import React from 'react';
import {
  FaWhatsapp,
  FaInstagram,
  FaMapMarkerAlt,
  FaCalendarAlt
} from 'react-icons/fa';

import './Contact.css';

function Contact() {
  const whatsappLink =
    'https://wa.me/918903842158?text=Hi%20Seven%20Flicks%2C%20I%20would%20like%20to%20book%20a%20photoshoot.';

  const instagramLink =
    'https://www.instagram.com/seven_flicks_photography/';

  const locationLink =
    'https://www.google.com/maps/search/?api=1&query=Anaiyur%2C+Officer+Town%2C+near+Bava+Clinic%2C+Madurai+625017';

  return (
    <section id="contact" className="reveal">
      <div className="eyebrow">Contact us</div>

      <div className="contact-wrap">
        <div className="contact-intro">
          <h2 className="section-title">
           Plan with us !</h2>
          <h2 className="section-title">memories is yours.</h2>
           
          

          <p className="contact-description">
            Message us on WhatsApp and we&apos;ll get back with
            availability and a custom quote.
          </p>
        </div>

        <div className="clist">
          {/* WhatsApp */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            aria-label="Chat with Seven Flicks on WhatsApp"
          >
            <span className="contact-icon">
              <FaWhatsapp aria-hidden="true" />
            </span>

            <span className="contact-content">
              <span className="k">WhatsApp</span>
              <span className="contact-value">
                +91 89038 42158
              </span>
            </span>

            <span className="contact-arrow">↗</span>
          </a>

          {/* Instagram */}
          <a
            href={instagramLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            aria-label="Open Seven Flicks Instagram profile"
          >
            <span className="contact-icon">
              <FaInstagram aria-hidden="true" />
            </span>

            <span className="contact-content">
              <span className="k">Instagram</span>
              <span className="contact-value">
                @seven_flicks_photography
              </span>
            </span>

            <span className="contact-arrow">↗</span>
          </a>

          {/* Location */}
          <a
            href={locationLink}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-item"
            aria-label="Open Seven Flicks studio location in Google Maps"
          >
            <span className="contact-icon">
              <FaMapMarkerAlt aria-hidden="true" />
            </span>

            <span className="contact-content">
              <span className="k">Studio</span>
              <span className="contact-value">
                Anaiyur, Officer Town, near Bava Clinic,
                Madurai – 625017
              </span>
            </span>

            <span className="contact-arrow">↗</span>
          </a>

          {/* Since */}
          <div className="contact-item contact-item-static">
            <span className="contact-icon">
              <FaCalendarAlt aria-hidden="true" />
            </span>

            <span className="contact-content">
              <span className="k">Since</span>
              <span className="contact-value">2024</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;