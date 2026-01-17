import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Booking from "./components/Booking";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";


/* Temporary Pages (error avoid karne ke liye) */





const Login = () => <h1 style={{ padding: "100px", color: "white" }}>Login</h1>;

function App() {
  return (
  
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Booking" element={<Booking />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;