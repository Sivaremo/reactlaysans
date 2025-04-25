import React from "react";

const benefits = [
  {
    img: "../../Static/Image/tech.jpeg",
    title: "Cutting-Edge Technology",
    desc: "We leverage the latest technologies to build innovative and scalable solutions.",
  },
  {
    img: "../../Static/Image/RCS.jpeg",
    title: "Robust Cybersecurity",
    desc: "Top-notch security measures ensure data protection and prevent cyber threats.",
  },
  {
    img: "../../Static/Image/cs.png",
    title: "24/7 IT Support",
    desc: "Dedicated support team is available round the clock for technical challenges.",
  },
  {
    img: "../../Static/Image/cloud.jpeg",
    title: "Cloud Solutions",
    desc: "Scalable and flexible cloud services for efficient business operations.",
  },
];

const WhyChooseUs = () => (
  <section className="us_section layout_padding">
    <div className="container">
      <div className="heading_container text-center mb-4">
        <h2>Why Choose Us</h2>
      </div>
      <div className="us_container">
        <div className="row justify-content-center">
          {benefits.map((b, index) => (
            <div key={index} className="col-lg-3 col-md-6 mb-4">
              <div className="box text-center">
                <div className="img-box py-3">
                  <img className="img-fluid" src={b.img} alt={b.title} style={{ maxHeight: "200px", objectFit: "cover" }} />
                </div>
                <div className="detail-box">
                  <h5>{b.title}</h5>
                  <p>{b.desc}</p>
                </div>
              </div>
            </div>
          ))}
          <div className="text-center mt-3">
            <a type="button" href="/about" className="btn btn-outline-dark">Read More</a>
          </div>
        </div>
      </div>
    </div>
    <br/>
  </section>
);

export default WhyChooseUs;
