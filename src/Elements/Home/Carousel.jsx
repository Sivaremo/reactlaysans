import React from "react";
import { Carousel } from "react-bootstrap";

const carouselItems = [
  {
    img: "/Static/Image/slider1.jpg",
    title: "Innovative IT Solutions",
    text: "Laysans Solutions – Empowering businesses with cutting-edge technology for a smarter future.",
  },
  {
    img: "/Static/Image/slider2.jpg",
    title: "Secure & Scalable Cloud Computing",
    text: "Laysans Solutions – Seamless cloud integration to optimize business efficiency and data security.",
  },
  {
    img: "/Static/Image/Slider3.jpeg",
    title: "Next-Gen Cybersecurity",
    text: "Laysans Solutions – Protecting your digital assets with advanced security solutions and AI-driven threat detection.",
  },
];

const AskCarousel = () => {
  return (
    <Carousel fade interval={3000} pause={false}>
      {carouselItems.map((item, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={item.img}
            alt={item.title}
            style={{ maxHeight: "800px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h1 className="carousel-title">{item.title}</h1>
            <p className="carousel-text">{item.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default AskCarousel;
