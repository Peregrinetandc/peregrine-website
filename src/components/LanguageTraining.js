import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import { motion } from 'framer-motion';
import LanguageSelector from './LanguageSelector';
import ScheduleFilter from './ScheduleFilter';

const LanguageTraining = () => {
  const { t } = useTranslation();
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        const response = await axios.get('/api/fetchLanguageTrainingDetails');
        setDetails(response.data);
      } catch (err) {
        setError('Error fetching language training details.');
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
      <LanguageSelector />
      <h1 className="page-title">{t('title')}</h1>
      <p className="intro-paragraph">{t('intro')}</p>

      <h2>{t('whyLearnWithUs')}</h2>
      <ul className="benefits-list">
        <li><strong>{t('benefits.experiencedInstructors')}:</strong> {details.benefits.experiencedInstructors}</li>
        <li><strong>{t('benefits.flexibleScheduling')}:</strong> {details.benefits.flexibleScheduling}</li>
        <li><strong>{t('benefits.customizedPrograms')}:</strong> {details.benefits.customizedPrograms}</li>
        <li><strong>{t('benefits.culturalImmersion')}:</strong> {details.benefits.culturalImmersion}</li>
      </ul>

      <h2>{t('offeredCourses')}</h2>
      <div className="services-grid">
        {details.courses.map((course, index) => (
          <motion.div className="service" key={index} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <h3>{course.flag} {course.name}</h3>
            <p>{course.description}</p>
          </motion.div>
        ))}
      </div>

      <h2>{t('trainingMethodology')}</h2>
      <p>{details.trainingMethodology}</p>

      <h2>{t('enrollmentInfo')}</h2>
      <ScheduleFilter schedules={details.schedules} />
      <a href="contact.html" className="button button-primary">{t('enrollNow')}</a>
    </div>
  );
};

export default LanguageTraining;