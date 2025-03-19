import { motion } from 'framer-motion';

const ServiceCard = ({ service }) => (
  <motion.div className="service-card" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
    <a href={service.link}>
      {service.isNew && <span className="new-badge">New</span>}
      <h3>{service.title}</h3>
    </a>
    <p>{service.description}</p>
  </motion.div>
);

export default ServiceCard;