import { motion } from 'framer-motion';

const HeroSection = () => (
  <section id="hero" className="content-section">
    <div className="container">
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Be a Global Citizen!
      </motion.h1>
      <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 0.5 }}>
        Empower Your Future with Peregrine T&C
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1 }}>
        In today's interconnected world, language skills and cultural understanding are more important than ever. Peregrine T&C offers a range of programs to help you unlock your potential and achieve your global aspirations.
      </motion.p>
      <motion.a href="#contact" className="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1, delay: 1.5 }}>
        Contact Us
      </motion.a>
    </div>
  </section>
);

export default HeroSection;