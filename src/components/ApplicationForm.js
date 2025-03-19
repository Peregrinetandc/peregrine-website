import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

const ApplicationForm = () => {
  const [formStatus, setFormStatus] = useState('');

  const initialValues = {
    full_name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    program: '',
    cover_letter: '',
    resume: null,
  };

  const validationSchema = Yup.object({
    full_name: Yup.string().required('Full Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    phone: Yup.string(),
    college: Yup.string().required('College/Institute is required'),
    course: Yup.string().required('Course of Study is required'),
    year: Yup.string().required('Current Year of Study is required'),
    program: Yup.string().required('Program of Interest is required'),
    cover_letter: Yup.string().required('Cover Letter is required'),
    resume: Yup.mixed().required('Resume/CV is required').test(
      'fileFormat',
      'Unsupported Format',
      value => value && ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'].includes(value.type)
    ),
  });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    for (const key in values) {
      formData.append(key, values[key]);
    }

    try {
      const response = await axios.post('/api/submitApplication', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setFormStatus('Application submitted successfully!');
      resetForm();
    } catch (error) {
      setFormStatus('Error submitting application. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1 className="page-title">Apply to Peregrine T&C</h1>
      <p className="intro-paragraph">Submit your application using the form below. Please ensure all required fields are filled out accurately.</p>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
        {({ setFieldValue, isSubmitting }) => (
          <Form className="application-form">
            <div className="form-group">
              <label htmlFor="full-name" className="form-label">Full Name: <span className="required">*</span></label>
              <Field type="text" id="full-name" name="full_name" className="form-input" />
              <ErrorMessage name="full_name" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">Email Address: <span className="required">*</span></label>
              <Field type="email" id="email" name="email" className="form-input" />
              <ErrorMessage name="email" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">Phone Number:</label>
              <Field type="tel" id="phone" name="phone" className="form-input" />
              <ErrorMessage name="phone" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="college" className="form-label">College/Institute: <span className="required">*</span></label>
              <Field type="text" id="college" name="college" className="form-input" />
              <ErrorMessage name="college" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="course" className="form-label">Course of Study: <span className="required">*</span></label>
              <Field type="text" id="course" name="course" className="form-input" />
              <ErrorMessage name="course" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="year" className="form-label">Current Year of Study: <span className="required">*</span></label>
              <Field type="text" id="year" name="year" className="form-input" />
              <ErrorMessage name="year" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="program" className="form-label">Program of Interest: <span className="required">*</span></label>
              <Field as="select" id="program" name="program" className="form-select">
                <option value="" disabled>-- Select a Program --</option>
                <option value="internship">Internship Program</option>
                <option value="apprenticeship">Apprenticeship Program</option>
                <option value="language-training">Language Training</option>
                <option value="translation">Translation Services</option>
                <option value="career-counseling">Career Counseling</option>
                <option value="digital-marketing">Digital Marketing Services</option>
              </Field>
              <ErrorMessage name="program" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="cover-letter" className="form-label">Cover Letter: <span className="required">*</span></label>
              <Field as="textarea" id="cover-letter" name="cover_letter" className="form-textarea" />
              <ErrorMessage name="cover_letter" component="div" className="error-message" />
            </div>

            <div className="form-group">
              <label htmlFor="resume" className="form-label">Resume/CV: <span className="required">*</span></label>
              <input type="file" id="resume" name="resume" className="form-input" onChange={(event) => setFieldValue('resume', event.currentTarget.files[0])} />
              <ErrorMessage name="resume" component="div" className="error-message" />
              <small className="form-text">Supported file types: .pdf, .doc, .docx</small>
            </div>

            <div className="form-group">
              <button type="submit" className="button button-primary" disabled={isSubmitting}>Submit Application</button>
            </div>
          </Form>
        )}
      </Formik>
      {formStatus && <p className="form-status">{formStatus}</p>}
    </div>
  );
};

export default ApplicationForm;