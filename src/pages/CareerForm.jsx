import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const CareerForm = () => {
  const [searchParams] = useSearchParams();
  const [jobName, setJobName] = useState('Loading job name...');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    resume: null,
    jobName: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [response, setResponse] = useState({ message: '', type: '' });

  useEffect(() => {
    const jobParam = searchParams.get('name');
    if (jobParam) {
      const decodedJobName = decodeURIComponent(jobParam);
      setJobName(`Apply for ${decodedJobName}`);
      setFormData(prev => ({ ...prev, jobName: decodedJobName }));
    } else {
      setJobName('Job not found');
      setFormData(prev => ({ ...prev, jobName: 'Job not found' }));
    }
  }, [searchParams]);

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      setFormData(prev => ({ ...prev, resume: files[0] }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { name, email, jobName, message, resume } = formData;

    if (!name || !email || !jobName || !message || !resume) {
      alert('All fields are required.');
      return;
    }

    setSubmitting(true);
    setResponse({ message: '', type: '' });

    const data = new FormData();
    data.append('name', name);
    data.append('email', email);
    data.append('JobName', jobName);
    data.append('resume', resume);
    data.append('message', message);

    try {
      const res = await fetch('https://laysans-solutions-api.onrender.com/careermail/', {
        method: 'POST',
        body: data,
      });

      if (!res.ok) throw new Error('Submission failed');

      const result = await res.json();
      setResponse({ message: result.message || 'Application submitted!', type: 'success' });

      setFormData({ name: '', email: '', jobName, message: '', resume: null });

      setTimeout(() => setResponse({ message: '', type: '' }), 3000);
    } catch (err) {
      setResponse({ message: err.message, type: 'error' });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section>
        <div className="parllax1 text-center">
          <div className="about">
            <div className="info">
              <h3>{jobName}</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="d-flex align-items-center justify-content-center">
        <a href="https://api.whatsapp.com/send?phone=919500272207" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </section>

      <section id="about" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <main id="main">
            {/* You can add more content here if needed */}
          </main>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container" data-aos="fade-up">
          <div className="row mt-5">
            <div className="col-lg-4">
              <div className="info">
                <div className="address">
                  <i className="bi bi-geo-alt"></i>
                  <h4>Location:</h4>
                  <p>Sky Complex, Eastern Bypass Road, GKM Nagar, Tambaram, Perungalathur, Chennai, Tamil Nadu 600126</p>
                </div>

                <div className="email">
                  <i className="bi bi-envelope"></i>
                  <h4>Email:</h4>
                  <p>careers@laysans.com</p>
                </div>

                <div className="phone">
                  <i className="bi bi-phone"></i>
                  <h4>Call:</h4>
                  <p>+91-9500272207</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8 mt-5 mt-lg-0">
              <form onSubmit={handleSubmit} className="php-email-form" encType="multipart/form-data">
                <div className="row">
                  <div className="col-md-6 form-group">
                    <input type="text" name="name" className="form-control" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" name="email" className="form-control" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-group mt-3">
                  <input type="text" name="jobName" className="form-control" value={formData.jobName} readOnly />
                </div>

                <div className="form-group mt-3">
                  <input type="file" name="resume" className="form-control" onChange={handleChange} required />
                </div>

                <div className="form-group mt-3">
                  <textarea name="message" className="form-control" rows="5" placeholder="Message" value={formData.message} onChange={handleChange} required />
                </div>

                <div className="text-center mt-3">
                  <button className="btn btn-primary" type="submit" disabled={submitting}>
                    {submitting ? 'Submitting...' : 'Send Application'}
                  </button>
                </div>
              </form>

              {response.message && (
                <div className={`text-center justify-content-center p-2 mt-3 ${response.type === 'success' ? 'alert alert-success' : 'alert alert-danger'}`}>
                  {response.message}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerForm;
