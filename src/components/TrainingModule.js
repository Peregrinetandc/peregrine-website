const TrainingModule = ({ module }) => (
  <motion.div
    className="training-module"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <h3>{module.title}</h3>
    <p>{module.description}</p>
  </motion.div>
);

export default TrainingModule;