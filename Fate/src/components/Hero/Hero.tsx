import React from 'react';
import { Sparkles, Award, Users } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </div>
      
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-line">Transform Your Beauty</span>
              <span className="title-line">With Expert Care</span>
            </h1>
            <p className="hero-subtitle">
              Professional makeup and skincare services by Tumusiime Joyce Peace. 
              Experience the artistry that has earned recognition and trust since 2023.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <Award className="stat-icon" />
                <span>Award Winning</span>
              </div>
              <div className="stat">
                <Users className="stat-icon" />
                <span>500+ Happy Clients</span>
              </div>
              <div className="stat">
                <Sparkles className="stat-icon" />
                <span>Expert Artistry</span>
              </div>
            </div>
            <div className="hero-buttons">
              <a href="#services" className="btn-primary">Book Appointment</a>
              <a href="#portfolio" className="btn-secondary">View Portfolio</a>
            </div>
          </div>
          
          <div className="hero-image">
            <div className="image-container">
              <img 
                src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
                alt="Professional Makeup Artist Tumusiime Joyce Peace"
                className="main-image floating"
              />
              <div className="image-decoration">
                <div className="decoration-circle"></div>
                <div className="decoration-dots"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;