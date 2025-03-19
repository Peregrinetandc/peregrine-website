import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import TrainingModule from './TrainingModule';
import Carousel from './Carousel';
import ContactForm from './ContactForm';

const CorporateTraining = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('/api/fetchCorporateTrainingDetails');
        setDetails(response.data);
      } catch (err) {
        setError('Error fetching corporate training details.');
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

      <h2>Our Training Modules</h2>
      <Carousel>
        {details.modules.map((module, index) => (
          <TrainingModule key={index} module={module} />
        ))}
      </Carousel>

      <h2>Testimonials</h2>
      <div className="testimonials">
        {details.testimonials.map((testimonial, index) => (
          <blockquote key={index}>
            <p>{testimonial.quote}</p>
            <cite>- {testimonial.author}</cite>
          </blockquote>
        ))}
      </div>

      <a href="#contact" className="button button-primary">Get Started</a>

      <ContactForm />
    </div>
  );
};

export default CorporateTraining;