import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Heart, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your booking request! Joyce will contact you soon to confirm your appointment.');
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <h2 className="section-title">Book Your Appointment</h2>
        <p className="section-subtitle">
          Ready to transform your look? Get in touch with Joyce Peace to schedule your 
          professional makeup session or consultation.
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-header">
              <Heart className="info-icon" />
              <h3>Let's Connect</h3>
            </div>
            
            <div className="contact-item">
              <Phone className="contact-icon" />
              <div className="contact-details">
                <h4>Phone</h4>
                <p>0757907126</p>
                <span>Call or WhatsApp anytime</span>
              </div>
            </div>
            
            <div className="contact-item">
              <Mail className="contact-icon" />
              <div className="contact-details">
                <h4>Email</h4>
                <p>peaceskincare@gmail.com</p>
                <span>We'll respond within 24 hours</span>
              </div>
            </div>
            
            <div className="contact-item">
              <MapPin className="contact-icon" />
              <div className="contact-details">
                <h4>Location</h4>
                <p>Bwaise, Near Christian Life Church</p>
                <span>Kampala, Uganda</span>
              </div>
            </div>
            
            <div className="contact-item">
              <Clock className="contact-icon" />
              <div className="contact-details">
                <h4>Working Hours</h4>
                <p>Monday - Saturday: 8:00 AM - 8:00 PM</p>
                <p>Sunday: 10:00 AM - 6:00 PM</p>
                <span>Flexible hours for special events</span>
              </div>
            </div>
            
            <div className="owner-info">
              <img 
                src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop" 
                alt="Tumusiime Joyce Peace"
                className="owner-image"
              />
              <div className="owner-details">
                <h4>Tumusiime Joyce Peace</h4>
                <p>Founder & Professional Makeup Artist</p>
                <p className="owner-quote">
                  "Passionate about enhancing your natural beauty with God's grace and artistic excellence."
                </p>
              </div>
            </div>
          </div>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Book Your Session</h3>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Service Type *</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="bridal">Bridal Makeup</option>
                  <option value="event">Event Makeup</option>
                  <option value="photoshoot">Photoshoot Makeup</option>
                  <option value="skincare">Skincare Treatment</option>
                  <option value="lessons">Makeup Lessons</option>
                  <option value="consultation">Beauty Consultation</option>
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="date">Preferred Date</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                />
              </div>
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Additional Details</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your event, preferred style, or any special requirements..."
                rows={4}
              ></textarea>
            </div>
            
            <button type="submit" className="submit-btn">
              <Send className="btn-icon" />
              Send Booking Request
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;