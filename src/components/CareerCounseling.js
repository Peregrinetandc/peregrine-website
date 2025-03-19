import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';

const CareerCounseling = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('/api/fetchCareerCounselingDetails');
        setDetails(response.data);
      } catch (err) {
        setError('Error fetching career counseling details.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="page-title">{details.title}</h1>
      <p className="intro-paragraph">{details.intro}</p>

      {details.sections.map((section, index) => (
        <motion.div
          key={index}
          className="info-block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
        >
          <h2 className="section-title">{section.title}</h2>
          {section.type === 'list' ? (
            <ul className={section.className}>
              {section.items.map((item, idx) => (
                <li key={idx}>
                  <span className="list-icon">✓</span> <strong>{item.title}:</strong> {item.description}
                </li>
              ))}
            </ul>
          ) : section.type === 'text' ? (
            <p>{section.content}</p>
          ) : section.type === 'testimonials' ? (
            <div className="testimonials">
              {section.items.map((item, idx) => (
                <blockquote key={idx}>
                  <p>{item.quote}</p>
                  <cite>- {item.author}</cite>
                </blockquote>
              ))}
            </div>
          ) : null}
        </motion.div>
      ))}

      <a href="#contact" className="button button-primary">Get Started</a>
    </div>
  );
};

export default CareerCounseling;