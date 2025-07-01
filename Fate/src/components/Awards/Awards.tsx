import { Award, Trophy, Star, Crown, Heart, Sparkles } from 'lucide-react';
import './Awards.css';

const Awards = () => {
  const awards = [
    {
      icon: <Trophy />,
      title: 'Best Makeup Artist 2024',
      organization: 'Uganda Beauty Awards',
      year: '2024',
      description: 'Recognized for exceptional makeup artistry and client satisfaction'
    },
    {
      icon: <Crown />,
      title: 'Excellence in Bridal Makeup',
      organization: 'Bridal Excellence Awards',
      year: '2024',
      description: 'Outstanding achievement in bridal beauty services'
    },
    {
      icon: <Star />,
      title: 'Rising Star Award',
      organization: 'Young Entrepreneurs Uganda',
      year: '2023',
      description: 'Recognized as a promising young entrepreneur in beauty industry'
    },
    {
      icon: <Heart />,
      title: 'Customer Choice Award',
      organization: 'Beauty Services Review',
      year: '2024',
      description: 'Highest customer satisfaction ratings in makeup services'
    },
    {
      icon: <Sparkles />,
      title: 'Innovation in Beauty',
      organization: 'Beauty Innovation Awards',
      year: '2024',
      description: 'Creative approach to makeup techniques and client care'
    },
    {
      icon: <Award />,
      title: 'Professional Excellence',
      organization: 'Uganda Professional Association',
      year: '2023',
      description: 'Commitment to professional standards and continuous improvement'
    }
  ];

  return (
    <section id="awards" className="section awards">
      <div className="container">
        <h2 className="section-title">Awards & Recognition</h2>
        <p className="section-subtitle">
          Joyce Peace's dedication to excellence has been recognized through multiple awards 
          and accolades from industry professionals and satisfied clients.
        </p>
        
        <div className="awards-grid">
          {awards.map((award, index) => (
            <div key={index} className="award-card">
              <div className="award-icon">
                {award.icon}
              </div>
              <div className="award-content">
                <div className="award-year">{award.year}</div>
                <h3 className="award-title">{award.title}</h3>
                <p className="award-organization">{award.organization}</p>
                <p className="award-description">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="awards-stats">
          <div className="stat-item">
            <div className="stat-number">6+</div>
            <div className="stat-label">Awards Won</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">Happy Clients</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2</div>
            <div className="stat-label">Years Experience</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Awards;