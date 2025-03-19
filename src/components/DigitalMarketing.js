import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import Testimonial from './Testimonial';
import ContactForm from './ContactForm';
import Chart from './Chart';

const DigitalMarketing = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('/api/fetchDigitalMarketingDetails');
        setDetails(response.data);
      } catch (err) {
        setError('Error fetching digital marketing details.');
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

      <h2>Why Choose Our Digital Marketing Services?</h2>
      <ul className="benefits-list">
        {details.benefits.map((benefit, index) => (
          <li key={index}>
            <strong>{benefit.title}:</strong> {benefit.description}
          </li>
        ))}
      </ul>

      <h2>Our Digital Marketing Solutions</h2>
      <div className="services-grid">
        {details.services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>

      <h2>Success Stories</h2>
      <div className="testimonials">
        {details.testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>

      <h2>Performance Metrics</h2>
      <Chart data={details.chartData} />

      <a href="contact.html" className="cta-button">Get Started</a>

      <ContactForm />
    </div>
  );
};

export default DigitalMarketing;