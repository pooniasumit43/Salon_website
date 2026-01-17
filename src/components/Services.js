import React from "react";
import "./Services.css";

const servicesData = [
  {
    title: "Hair Cut",
    price: "₹150",
    desc: "Professional haircut for men",
  },
  {
    title: "Beard Styling",
    price: "₹100",
    desc: "Trendy beard shaping & trim",
  },
  {
    title: "Facial",
    price: "₹399",
    desc: "Glow & skin care treatment",
  },
  {
    title: "Hair Spa",
    price: "₹599",
    desc: "Relaxing hair spa therapy",
  },
  {
    title: "Makeup",
    price: "₹999",
    desc: "Party & bridal makeup",
  },
  {
    title: "Massage",
    price: "₹499",
    desc: "Stress relief body massage",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <p className="subtitle">Best Quality Services at Affordable Price</p>

      <div className="service-cards">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
            <span>{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;