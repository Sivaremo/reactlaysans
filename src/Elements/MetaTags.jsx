import React from 'react';
import { Helmet } from 'react-helmet';
import Icon from "../Static/Image/icon.jpeg"; // local image

const MetaTags = () => (
  <Helmet>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <title>Laysans Solutions | IT Services, Cloud & Cybersecurity</title>
    <link rel="icon" type="image/png" href={Icon} />
    
    <meta name="description" content="Laysans Solutions delivers expert IT services, specializing in cloud computing, cybersecurity, and scalable digital solutions. Partner with us to drive innovation and secure your digital future." />
    <meta name="robots" content="index, follow" />
    <meta name="author" content="Laysans Solutions" />
    <meta name="keywords" content="IT solutions, cloud computing, cybersecurity, software development, managed IT services, digital transformation" />
    
    {/* Open Graph Meta Tags */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Laysans Solutions | IT Services, Cloud & Cybersecurity" />
    <meta property="og:description" content="Get secure and innovative IT solutions with Laysans Solutions. Cloud computing, cybersecurity & more." />
    <meta property="og:image" content="https://www.laysans.com/Static/Image/icon.jpeg" />
    <meta property="og:url" content="https://www.laysans.com" />
    
    {/* Twitter Card Meta Tags */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Laysans Solutions | IT Services, Cloud & Cybersecurity" />
    <meta name="twitter:description" content="Expert IT services from Laysans Solutions—cloud, cybersecurity, and more." />
    <meta name="twitter:image" content="https://www.laysans.com/Static/Image/icon.jpeg" />
    <meta name="twitter:url" content="https://www.laysans.com" />
  </Helmet>
);

export default MetaTags;
