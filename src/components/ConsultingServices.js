import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import ServiceCard from './ServiceCard';
import Modal from './Modal';
import ContactForm from './ContactForm';

const ConsultingServices = () => {
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('/api/fetchConsultingDetails');
        setDetails(response.data);
      } catch (err) {
        setError('Error fetching consulting details.');
      } finally {
        setLoading(false);
      }
    };

    fetchDetails();
  }, []);

  const handleServiceClick = (service) => {
    setSelectedService(service);
  };

  const closeModal = () => {
    setSelectedService(null);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <h1 className="page-title">{details.title}</h1>
      <p className="intro-paragraph">{details.intro}</p>

      <div className="services-overview">
        {details.services.map((service, index) => (
          <ServiceCard key={index} service={service} onClick={() => handleServiceClick(service)} />
        ))}
      </div>

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

      {selectedService && (
        <Modal onClose={closeModal}>
          <h2>{selectedService.title}</h2>
          <p>{selectedService.description}</p>
        </Modal>
      )}

      <ContactForm />
    </div>
  );
};

export default ConsultingServices;