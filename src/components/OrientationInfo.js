import { motion } from 'framer-motion';

const OrientationInfo = ({ details }) => (
  <section id="orientation-info" className="content-section">
    <div className="container">
      <p className="intro-text">{details.introText}</p>

      <div className="info-block">
        <h2 className="section-title">Mandatory Internship Rules - University of Calicut (FYUGP)</h2>
        <p className="info-subtitle">Essential to Complete the Course:</p>
        <ul className="guidelines-list">
          {details.guidelines.map((guideline, index) => (
            <li key={index}>
              <span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{guideline.title}:</strong> {guideline.description}
            </li>
          ))}
        </ul>
      </div>

      <div className="info-block">
        <h2 className="section-title">What to Expect from Us</h2>
        <ul className="expectations-list">
          {details.expectations.map((expectation, index) => (
            <li key={index}>
              <span className="list-icon"><i className="fas fa-check-circle"></i></span> <strong>{expectation.title}:</strong> {expectation.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default OrientationInfo;