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
import PdfViewer from "../Components/PDFViewer";
import ScrollToTop from "../Components/ScrollToTop";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Navbar is common for all routes except /portfolio */}
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/about-us" element={<AboutUsPage />} />
                <Route path="/services" element={<OurServicesPage />} />
                <Route path="/products" element={<OurProductsPage />} />
                <Route path="/achievements" element={<OurAchievements />} />
                <Route path="/contact-us" element={<ContactUsPage />} />  
              </Routes>
              <Footer />
              <ScrollToTop/>
            </>
          }
        />
        
        {/* /portfolio route without Navbar and Footer */}
        <Route path="/portfolio.pdf" element={<PdfViewer />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;
