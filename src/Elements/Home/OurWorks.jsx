import React from "react";

const OurWorks = () => (
  <section className="works">
    <div className="related work p-4">
      <div className="row">
        <div className="col-md-6">
          <h2>Our Works</h2>
          <p>
                        Our mission is to empower businesses with innovative IT solutions that enhance productivity, security, and efficiency. We believe that technology should be an enabler, not a barrier, and we are dedicated to helping organizations harness its full potential to drive success.

We strive to bridge the gap between technology and business needs by providing reliable, scalable, and cost-effective IT services. Whether it’s optimizing existing infrastructure, securing digital assets, or implementing cutting-edge solutions, we work closely with our clients to ensure seamless integration and maximum impact.

By continuously evolving and embracing new technologies, we empower our clients to focus on what they do best—while we take care of their IT needs. Together, we drive progress, innovation, and sustainable growth.
                       </p>
        </div>
        <div className="col-md-6">
          <img
            style={{ height: "350px", width: "100%", objectFit: "cover" }}
            src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?fm=jpg&q=60&w=3000"
            className="img-fluid"
            alt="Our Works"
          />
        </div>
      </div>
    </div>
  </section>
);

export default OurWorks;
