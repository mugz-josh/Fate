import { Star, Quote } from 'lucide-react';
import './Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Nakamya',
      role: 'Bride',
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Joyce made my wedding day absolutely perfect! Her attention to detail and artistic skills are unmatched. I felt like a princess, and the makeup lasted all day. Highly recommend!'
    },
    {
      name: 'Grace Mukisa',
      role: 'Event Client',
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I have been Joyce\'s client for over a year now. Her professionalism and talent are exceptional. She always knows exactly what look will work best for each occasion.'
    },
    {
      name: 'Mary Namutebi',
      role: 'Regular Client',
      image: 'https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Joyce is not just a makeup artist, she\'s an artist! Her work is always flawless and she makes you feel so comfortable. Her Christian values shine through in everything she does.'
    },
    {
      name: 'Rebecca Ssali',
      role: 'Photoshoot Client',
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with Joyce for my photoshoot was amazing. She understood my vision perfectly and created looks that were both stunning and camera-ready. True professional!'
    },
    {
      name: 'Jennifer Nambi',
      role: 'Corporate Client',
      image: 'https://images.pexels.com/photos/3762795/pexels-photo-3762795.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'Joyce did makeup for our corporate event and everyone was impressed. She\'s reliable, talented, and her prices are very reasonable. Will definitely book again!'
    },
    {
      name: 'Patricia Nalwoga',
      role: 'Makeup Student',
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
      rating: 5,
      text: 'I took makeup lessons with Joyce and learned so much! She\'s patient, knowledgeable, and passionate about teaching. Her techniques are professional and easy to follow.'
    }
  ];

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">
          Don't just take our word for it - hear from our satisfied clients who have 
          experienced Joyce Peace's exceptional makeup artistry and professional service.
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="client-image"
                />
                <div className="client-info">
                  <h4 className="client-name">{testimonial.name}</h4>
                  <p className="client-role">{testimonial.role}</p>
                  <div className="rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="star filled" />
                    ))}
                  </div>
                </div>
                <Quote className="quote-icon" />
              </div>
              
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
          ))}
        </div>
        
        <div className="testimonials-cta">
          <h3>Ready to Join Our Happy Clients?</h3>
          <p>Experience the difference that professional makeup artistry can make</p>
          <a href="#contact" className="btn-primary">Book Your Appointment</a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;