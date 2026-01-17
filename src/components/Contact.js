import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! We will contact you soon 😊");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact">
      <h2>Contact Us</h2>

      <div className="contact-container">
        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Salon Address</h3>
          <p>Royal Salon, Main rod, dulaniya, Rajasthan</p>

          <h3>Phone</h3>
          <p>📞 +91 9876543210</p>

          <h3>Email</h3>
          <p>✉️ abcsalon@gmail.com</p>
        </div>

        {/* RIGHT FORM */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* GOOGLE MAP */}
      <div className="map">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=jaipur&output=embed"
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;