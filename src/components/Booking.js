import React, { useState } from "react";
import "./Booking.css";

const Booking = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [minutes, setMinutes] = useState(20);
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || !service || !name || !mobile) {
      alert("Please fill in all fields");
      return;
    }
    alert(`Booking Confirmed
Date: ${date}
Time: ${time}
Service: ${service}
Duration: ${minutes} minutes
Name: ${name}
Mobile: ${mobile}`);
  };

  return (
    <section className="booking">
      <h2>Book Appointment</h2>
      <p>Select date & manage your time</p>
      <form className="booking-form" onSubmit={handleSubmit}>
        {/* Name */}
        <label>Your Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" required />

        {/* Mobile */}
        <label>Mobile Number</label>
        <input type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} placeholder="Mobile Number" required />

        {/* Service */}
        <label>Select Service</label>
        <select value={service} onChange={(e) => setService(e.target.value)} required>
          <option value="">Select Service</option>
          <option value="Hair Cut">Hair Cut</option>
          <option value="Hair Color">Hair Color</option>
          <option value="Nail Art">Nail Art</option>
          <option value="Facial">Facial</option>
        </select>

        {/* Date Picker (Calendar) */}
        <label>Select Date</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />

        {/* Time Picker */}
        <label>Select Time</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />

        {/* Minutes Allot */}
        <label>Service Duration (minutes)</label>
        <select value={minutes} onChange={(e) => setMinutes(e.target.value)}>
          <option value={20}>20 Minutes</option>
          <option value={40}>40 Minutes</option>
          <option value={60}>60 Minutes</option>
          <option value={90}>90 Minutes</option>
        </select>

        <button type="submit">Confirm Booking</button>
      </form>
    </section>
  );
};

export default Booking;