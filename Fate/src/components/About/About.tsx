import { Heart, Award, Users, Calendar } from 'react-feather';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop" 
              alt="Tumusiime Joyce Peace - Professional Makeup Artist"
              className="about-main-image"
            />
            <div className="about-card floating">
              <div className="card-content">
                <Calendar className="card-icon" />
                <div>
                  <h4>Since 2023</h4>
                  <p>Professional Excellence</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="about-text">
            <h2 className="section-title">Meet Joyce Peace</h2>
            <p className="about-intro">
              A passionate makeup artist and skincare expert who has built everything from scratch 
              and is now widely recognized for her exceptional skills and dedication to beauty.
            </p>
            
            <div className="about-story">
              <p>
                <strong>Tumusiime Joyce Peace</strong> started her journey in 2023, immediately after 
                completing S6, with nothing but passion and determination. As a devoted Christian 
                born-again believer, she trusts God in every aspect of her business and life.
              </p>
              
              <p>
                Through dedication and exceptional service, Joyce has slowly but surely become an 
                expert in everything she does. Her passion extends beyond makeup to singing, 
                reflecting her artistic soul and creative spirit.
              </p>
              
              <p>
                Located in Bwaise near Christian Life Church, Peace SkinCare & Make up has become 
                a trusted name in professional beauty services, earning multiple awards for 
                outstanding work and customer satisfaction.
              </p>
            </div>
            
            <div className="about-highlights">
              <div className="highlight">
                <Heart className="highlight-icon" />
                <div>
                  <h4>Passion-Driven</h4>
                  <p>Every service delivered with love and dedication</p>
                </div>
              </div>
              
              <div className="highlight">
                <Award className="highlight-icon" />
                <div>
                  <h4>Award-Winning</h4>
                  <p>Multiple recognitions for excellence</p>
                </div>
              </div>
              
              <div className="highlight">
                <Users className="highlight-icon" />
                <div>
                  <h4>Trusted Expert</h4>
                  <p>Widely known for exceptional experience</p>
                </div>
              </div>
            </div>
            
            <div className="about-cta">
              <a href="#contact" className="btn-primary">Book Consultation</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;