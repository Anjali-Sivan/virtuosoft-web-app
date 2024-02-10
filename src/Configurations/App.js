// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Components/Navbar";
import LandingPage from "../Routes/LandingPage";
import AboutUsPage from "../Routes/AboutusPage";
import OurProductsPage from "../Routes/OurProductsPage";
import OurAchievements from "../Routes/OurAchievements";
import ContactUsPage from "../Routes/ContactUsPage";
import Footer from "../Components/Footer";
import OurServicesPage from "../Routes/OurServicesPage";

const App = () => {

  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/services" element={<OurServicesPage />} />
          <Route path="/products" element={<OurProductsPage />} />
          <Route path="/achievements" element={<OurAchievements />} />
          <Route path="/contact-us" element={<ContactUsPage />} />  
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
};

export default App;
