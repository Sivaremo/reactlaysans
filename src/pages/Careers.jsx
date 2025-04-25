import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Careers = () => {
  const [careers, setCareers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [experienceFilter, setExperienceFilter] = useState('');

  // Fetch career data from API
  useEffect(() => {
    const fetchCareers = async () => {
      try {
        const response = await fetch('https://laysans-solutions-api.onrender.com/career/');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCareers(data);
      } catch (error) {
        console.error('Error fetching careers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCareers();
  }, []);

  // Handle search query change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // Handle experience level filter change
  const handleExperienceFilterChange = (e) => {
    setExperienceFilter(e.target.value);
  };

  // Filter careers based on search query and experience filter
  const filteredCareers = careers.filter((career) => {
    const matchesSearch = career.JobName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesExperience = experienceFilter ? career.exp === parseInt(experienceFilter) : true;
    return matchesSearch && matchesExperience;
  });

  return (
    <div>
      <section>
        <div className="parllax1">
          <div className="about">
            <div className="info">
              <h3>Careers</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="careers" className="d-flex align-items-center justify-content-center">
        <div className="container" data-aos="fade-up">
          <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="150">
            <form id="searchForm" className="row g-3 justify-content-center">
              <div className="col-md-5">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search for jobs..."
                  aria-label="Search"
                  value={searchQuery}
                  onChange={handleSearchChange}
                />
              </div>
              <div className="col-md-3">
                <select
                  className="form-select"
                  value={experienceFilter}
                  onChange={handleExperienceFilterChange}
                >
                  <option value="">Experience Level</option>
                  <option value="1">Entry Level</option>
                  <option value="2">Mid Level</option>
                  <option value="3">Senior Level</option>
                </select>
              </div>
              <div className="col-md-2">
                <button className="btn btn-outline-success w-100" type="submit">
                  Search
                </button>
              </div>
            </form>
          </div>
          <br />

          <div className="container my-4">
            <div className="row">
              {loading ? (
                  <div className="row">
                  {[...Array(6)].map((_, index) => (
                    <div key={index} className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch custom-shadow justify-content-center">
                      <div className="icon-box d-flex flex-column align-items-center text-center pb-3">
                        <Skeleton circle height={50} width={50} />
                        <Skeleton width="80%" />
                        <Skeleton width="60%" />
                        <Skeleton width="90%" />
                        <Skeleton width="70%" />
                        <a
          type="button"
          className="btn btn-danger"
          href='/'
        >Apply Now</a>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                filteredCareers.map((career) => (
                  <div
                    key={career.id}
                    className="col-lg-4 col-md-6 col-sm-12 d-flex align-items-stretch custom-shadow justify-content-center my-2"
                  >
                    <div className="icon-box d-flex flex-column align-items-center text-center pb-3">
                      <div className="icon">
                        <i className={career.Iconclassname}></i>
                      </div>
                      <h4>
                        <a href={`/careerform?id=${career.id}&name=${encodeURIComponent(career.JobName)}`}>
                          {career.JobName}
                        </a>
                      </h4>
                      <p><strong>Role:</strong> {career.RoleName}</p>
                      <p><strong>Exp:</strong> {career.exp} Yrs</p>
                      <p>{career.Aboutjob}</p>
                      <a
                        type="button"
                        className="btn btn-danger"
                        href={`/careerform?id=${career.id}&name=${encodeURIComponent(career.JobName)}`}
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <a
          href="https://api.whatsapp.com/send?phone=919500272207"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>
   
      </section>
      <br />
    </div>
  );
};

export default Careers;
