'use client';

import { useEffect, useState } from 'react';

export default function Clients() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch('https://laysans-solutions-api.onrender.com/client/');
        if (!response.ok) throw new Error('Network response was not ok');
        const data = await response.json();
        setClients(data);
      } catch (error) {
        console.error('Error fetching clients:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  const renderPlaceholders = () => {
    return Array.from({ length: 6 }).map((_, index) => (
      <div key={index} className="col-lg-6 col-md-4 col-sm-12 portfolio-item filter-web mb-4">
        <div className="portfolio-wrap">
          <div
            className="placeholder-icon"
            style={{
              width: '100%',
              height: '300px',
              backgroundColor: '#e0e0e0',
              borderRadius: '4px',
              marginBottom: '15px',
            }}
          />
          <div className="portfolio-info text-center">
            <h4>
              <span
                className="placeholder-text"
                style={{
                  display: 'inline-block',
                  width: '80%',
                  height: '24px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                }}
              />
            </h4>
            <div className="portfolio-links">
              <span
                className="placeholder-text"
                style={{
                  display: 'inline-block',
                  width: '40%',
                  height: '18px',
                  backgroundColor: '#e0e0e0',
                  borderRadius: '4px',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    ));
  };

  const renderClients = () => {
    return clients.map((client, index) => (
      <div key={index} className="col-lg-6 col-md-4 col-sm-12 portfolio-item filter-web mb-4">
        <div className="portfolio-wrap">
          <iframe
            className="embed-responsive-item"
            src={client.Link}
            allowFullScreen
            scrolling="no"
            style={{ width: '100%', height: '300px' }}
            title={client.Productname}
          ></iframe>
          <div className="portfolio-info text-center">
            <h4>{client.Productname}</h4>
            <div className="portfolio-links">
              <a
                href={client.Link}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-lightbox"
                title={client.name}
              >
                <i className="fas fa-link"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  };

  return (
    <>
      <section>
        <div className="parllax1">
          <div className="about">
            <div className="info">
              <h3>Our Clients</h3>
            </div>
          </div>
        </div>
      </section>

      <section id="clients" className="services code">
        <a
          href="https://api.whatsapp.com/send?phone=919500272207"
          className="whatsapp-icon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-whatsapp"></i>
        </a>

        <div className="container my-4">
          <h2 className="text-center">Trusted by Leading Brands</h2>
          <div className="row portfolio-container" id="clientList">
            {loading ? renderPlaceholders() : renderClients()}
          </div>
        </div>
      </section>
    </>
  );
}
