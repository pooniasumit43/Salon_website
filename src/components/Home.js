import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <section className="home">
      <div className="home-overlay">
        <div className="home-content">
          <h1>Royal Salon</h1>
          <p>
            Best Hair • Beard • Facial • Spa Experience  
            <br />
            Look Good, Feel Confident
          </p>

          <div className="home-buttons">
            <a href="/booking" className="btn-primary">Book Appointment</a>
            <a href="/services" className="btn-secondary">Our Services</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;