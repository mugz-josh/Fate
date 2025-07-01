import { Heart, Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <Heart className="logo-icon" />
              <span>Peace SkinCare & Make up</span>
            </div>
            <p className="footer-description">
              Professional makeup and skincare services by Tumusiime Joyce Peace. 
              Transforming beauty with passion, expertise, and God's grace since 2023.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <Facebook />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <Instagram />
              </a>
              <a href="#" aria-label="Twitter" className="social-link">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Joyce</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#awards">Awards</a></li>
              <li><a href="#testimonials">Reviews</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Bridal Makeup</a></li>
              <li><a href="#services">Event Makeup</a></li>
              <li><a href="#services">Skincare Treatments</a></li>
              <li><a href="#services">Makeup Lessons</a></li>
              <li><a href="#services">Beauty Consultations</a></li>
              <li><a href="#services">Special Packages</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Contact Info</h4>
            <div className="contact-info">
              <div className="contact-item">
                <Phone className="contact-icon" />
                <span>0757907126</span>
              </div>
              <div className="contact-item">
                <Mail className="contact-icon" />
                <span>peaceskincare@gmail.com</span>
              </div>
              <div className="contact-item">
                <MapPin className="contact-icon" />
                <span>Bwaise, Near Christian Life Church<br />Kampala, Uganda</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-divider"></div>
          <div className="footer-bottom-content">
            <p>&copy; 2024 Peace SkinCare & Make up. All rights reserved.</p>
            <p>Founded by <strong>Tumusiime Joyce Peace</strong> - Professional Makeup Artist</p>
            <p className="footer-tagline">
              "Enhancing your natural beauty with passion, expertise, and God's grace"
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;