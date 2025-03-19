import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % children.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + children.length) % children.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-control prev" onClick={prevSlide}>‹</button>
      <AnimatePresence>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          {children[currentIndex]}
        </motion.div>
      </AnimatePresence>
      <button className="carousel-control next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default Carousel;