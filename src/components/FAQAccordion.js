import { useState } from 'react';
import { motion } from 'framer-motion';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <motion.div
            className="faq-question"
            onClick={() => toggleFAQ(index)}
            initial={{ backgroundColor: '#f9f9f9' }}
            whileHover={{ backgroundColor: '#e9e9e9' }}
          >
            <h3>{faq.question}</h3>
            <span>{activeIndex === index ? '-' : '+'}</span>
          </motion.div>
          {activeIndex === index && (
            <motion.div
              className="faq-answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p>{faq.answer}</p>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQAccordion;