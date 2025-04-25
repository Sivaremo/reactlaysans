import React from 'react';

const About = () => {
  return (
    <>
      <section>
        <div className="parllax1">
          <div className="about">
            <div className="info">
              <h3>About Us</h3>
            </div>
          </div>
        </div>
      </section>

      <section>
        <a href="https://api.whatsapp.com/send?phone=919500272207" className="whatsapp-icon" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
        <div className="work p-4">
          <div className="row">
            <div className="col-md-6">
              <div className="container related m-3 p-3">
                <h2>Who We Are</h2>
                <p className="ps-4 mb-3">
                  At Laysans Solutions, we are a leading IT solutions provider committed to delivering cutting-edge technology services
                  that drive business growth and innovation. With a team of highly skilled professionals, we specialize in offering customized
                  IT solutions that cater to businesses of all sizes, from startups to large enterprises.
                </p>
              </div>
              <div className="container related m-3 p-3">
                <h2>Our Mission</h2>
                <p className="ps-4 mb-3">
                  Our mission is to empower businesses with innovative IT solutions that enhance productivity, security, and efficiency.
                  We strive to bridge the gap between technology and business needs by providing reliable, scalable, and cost-effective IT services.
                </p>
              </div>
            </div>
            <div className="col-md-6 my-5">
              <img
                src="https://img.freepik.com/free-photo/creative-inspirational-resource_23-2149144214.jpg?semt=ais_hybrid"
                className="img-fluid d-none d-sm-block"
                alt="Creative Resource"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="works">
        <div className="work p-4">
          <div className="row">
            <div className="col-md-6">
              <img
                src="https://c0.wallpaperflare.com/preview/237/985/251/laptop-macbook-computer-work.jpg"
                className="img-fluid"
                alt="Creative Resource"
              />
            </div>
            <div className="col-md-6">
              <div className="container related mt-4">
                <h2 className="text-center mb-4">Why Choose Us?</h2>
                <div className="row">
                  {[
                    { title: 'Expertise & Innovation', text: 'Our team stays ahead of the latest industry trends to deliver innovative IT solutions.' },
                    { title: 'Customer-Centric Approach', text: 'We prioritize our clients’ needs and provide personalized support.' },
                    { title: 'Proven Track Record', text: 'With successful projects across multiple industries, we have built a reputation for excellence.' },
                    { title: 'Security & Compliance', text: 'We ensure top-tier security and compliance standards to safeguard your data.' }
                  ].map((item, index) => (
                    <div className="col-md-6" key={index}>
                      <div className="d-flex align-items-start mb-3">
                        <i className="fas fa-check-circle fa-2x me-3 text-success"></i>
                        <div>
                          <h5>✔ {item.title}</h5>
                          <p>{item.text}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container related mt-4">
          <h2 className="text-center mb-4">What We Do</h2>
          <p className="text-center mb-4">We offer a comprehensive range of IT services, including:</p>
          <div className="row">
            {[
              ['Software Development', 'Custom web and mobile applications tailored to your business needs.'],
              ['Cloud Computing', 'Secure and scalable cloud solutions for seamless operations.'],
              ['Cybersecurity', 'Advanced security solutions to protect your digital assets.'],
              ['AI & Automation Solutions', 'Intelligent automation to optimize workflows and boost efficiency.'],
              ['Digital Marketing and Branding', 'Innovative strategies to enhance your online presence and brand identity.'],
              ['IT Consulting', 'Strategic IT guidance to help businesses make informed technology decisions.'],
              ['Managed IT Services', 'End-to-end IT support to ensure smooth business operations.']
            ].map(([title, desc], idx) => (
              <div className="col-md-6 mb-3" key={idx}>
                <div className="d-flex align-items-start">
                  <i className="fas fa-check-circle fa-2x me-3 text-success"></i>
                  <div>
                    <h5>✅ {title}</h5>
                    <p>{desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
