import { useState } from 'react';
import { Eye, Heart } from 'lucide-react';
import './Portofolio.css';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const portfolioItems = [
    {
      id: 1,
      image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'bridal',
      title: 'Elegant Bridal Look',
      description: 'Classic bridal makeup with soft glam finish'
    },
    {
      id: 2,
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'event',
      title: 'Evening Glamour',
      description: 'Bold and sophisticated evening makeup'
    },
    {
      id: 3,
      image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'natural',
      title: 'Natural Glow',
      description: 'Fresh and natural everyday look'
    },
    {
      id: 4,
      image: 'https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'bridal',
      title: 'Traditional Bridal',
      description: 'Beautiful traditional bridal styling'
    },
    {
      id: 5,
      image: 'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'event',
      title: 'Party Ready',
      description: 'Vibrant party makeup with bold colors'
    },
    {
      id: 6,
      image: 'https://images.pexels.com/photos/3762806/pexels-photo-3762806.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'natural',
      title: 'Soft & Sweet',
      description: 'Gentle makeup for a sweet, natural look'
    },
    {
      id: 7,
      image: 'https://images.pexels.com/photos/3785081/pexels-photo-3785081.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'bridal',
      title: 'Modern Bride',
      description: 'Contemporary bridal look with modern touches'
    },
    {
      id: 8,
      image: 'https://images.pexels.com/photos/3762795/pexels-photo-3762795.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      category: 'event',
      title: 'Red Carpet Ready',
      description: 'Glamorous makeup for special events'
    }
  ];

  const filters = [
    { key: 'all', label: 'All Work' },
    { key: 'bridal', label: 'Bridal' },
    { key: 'event', label: 'Events' },
    { key: 'natural', label: 'Natural' }
  ];

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <h2 className="section-title">Our Portfolio</h2>
        <p className="section-subtitle">
          Explore our stunning collection of makeup artistry and beauty transformations 
          that showcase Joyce Peace's exceptional skills and creativity.
        </p>
        
        <div className="portfolio-filters">
          {filters.map(filter => (
            <button
              key={filter.key}
              className={`filter-btn ${activeFilter === filter.key ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.key)}
            >
              {filter.label}
            </button>
          ))}
        </div>
        
        <div className="portfolio-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="portfolio-item">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} />
                <div className="portfolio-overlay">
                  <div className="overlay-content">
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                    <div className="overlay-actions">
                      <button className="action-btn">
                        <Eye size={20} />
                      </button>
                      <button className="action-btn">
                        <Heart size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="portfolio-cta">
          <p>Love what you see? Let's create your perfect look together!</p>
          <a href="#contact" className="btn-primary">Book Your Session</a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;