import React from 'react';
import { Palette, Sparkles, Heart, Crown, Star, Gift } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Palette />,
      title: 'Professional Makeup',
      description: 'Expert makeup application for all occasions - weddings, events, photoshoots, and special moments.',
      features: ['Bridal Makeup', 'Event Makeup', 'Photoshoot Makeup', 'Special Occasions'],
      price: 'From UGX 50,000'
    },
    {
      icon: <Sparkles />,
      title: 'Skincare Treatments',
      description: 'Personalized skincare solutions to enhance your natural beauty and maintain healthy, glowing skin.',
      features: ['Facial Treatments', 'Skin Analysis', 'Custom Skincare', 'Anti-Aging Care'],
      price: 'From UGX 30,000'
    },
    {
      icon: <Crown />,
      title: 'Bridal Packages',
      description: 'Complete bridal beauty packages including trials, wedding day makeup, and skincare preparation.',
      features: ['Bridal Trial', 'Wedding Day', 'Pre-Wedding Prep', 'Touch-up Kit'],
      price: 'From UGX 200,000'
    },
    {
      icon: <Star />,
      title: 'Makeup Lessons',
      description: 'Learn professional makeup techniques with personalized one-on-one or group training sessions.',
      features: ['Basic Techniques', 'Advanced Skills', 'Product Knowledge', 'Personal Style'],
      price: 'From UGX 80,000'
    },
    {
      icon: <Heart />,
      title: 'Beauty Consultations',
      description: 'Personalized beauty consultations to help you discover your perfect look and skincare routine.',
      features: ['Style Analysis', 'Color Matching', 'Product Recommendations', 'Routine Planning'],
      price: 'From UGX 25,000'
    },
    {
      icon: <Gift />,
      title: 'Special Packages',
      description: 'Customized beauty packages for groups, parties, and special events with exclusive rates.',
      features: ['Group Discounts', 'Party Packages', 'Corporate Events', 'Custom Solutions'],
      price: 'Contact for Quote'
    }
  ];

  return (
    <section id="services" className="section services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Discover our comprehensive range of professional beauty services, 
          each delivered with passion and expertise by Joyce Peace.
        </p>
        
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">
                {service.icon}
              </div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
              
              <ul className="service-features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              
              <div className="service-price">{service.price}</div>
              
              <a href="#contact" className="service-btn">Book Now</a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <div className="cta-content">
            <h3>Ready to Transform Your Look?</h3>
            <p>Book a consultation today and let Joyce Peace help you discover your most beautiful self.</p>
            <a href="#contact" className="btn-primary">Schedule Consultation</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;