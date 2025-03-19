import { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    college: '',
    course: '',
    year: '',
    attendance: '',
    questions: '',
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      await axios.post('/api/register', formData);
      setStatus('Registration successful!');
      setFormData({
        name: '',
        email: '',
        college: '',
        course: '',
        year: '',
        attendance: '',
        questions: '',
      });
    } catch (error) {
      setStatus('Error submitting registration. Please try again.');
    }
  };

  return (
    <form id="orientation-interest-form" method="post" className="registration-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name" className="form-label">Full Name: <span className="required">*</span></label>
        <input type="text" id="name" name="name" required className="form-input" value={formData.name} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="email" className="form-label">Email Address: <span className="required">*</span></label>
        <input type="email" id="email" name="email" required className="form-input" value={formData.email} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="college" className="form-label">College/Institute: <span className="required">*</span></label>
        <input type="text" id="college" name="college" required className="form-input" value={formData.college} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="course" className="form-label">Course of Study: <span className="required">*</span></label>
        <input type="text" id="course" name="course" required className="form-input" value={formData.course} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="year" className="form-label">Current Year of Study: <span className="required">*</span></label>
        <input type="text" id="year" name="year" required className="form-input" value={formData.year} onChange={handleChange} />
      </div>

      <div className="form-group">
        <label htmlFor="attendance" className="form-label">Will you be attending the orientation session? <span className="required">*</span></label>
        <select id="attendance" name="attendance" required className="form-select" value={formData.attendance} onChange={handleChange}>
          <option value="" disabled>-- Please Select --</option>
          <option value="yes">Yes, I will attend</option>
          <option value="no">No, I cannot attend</option>
          <option value="maybe">I'm not sure yet</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="questions" className="form-label">Any questions you'd like answered during the session? (Optional)</label>
        <textarea id="questions" name="questions" className="form-textarea" value={formData.questions} onChange={handleChange}></textarea>
      </div>

      <div className="form-group">
        <button type="submit" className="button button-primary">Register Now</button>
      </div>
      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default RegistrationForm;