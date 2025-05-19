import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SearchBar from './components/SearchBar';
import TransparentNavbar from './components/TransparentNavbar';
import Card from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from './components/HeroSection';
import ServicesGrid from './components/ServicesGrid';
import ScrollableCardRow from './components/ScrollableCardRow';
import ImageCardCarousel from './components/ImageCardCarousel';
import LoginPage from './pages/LoginPage'; // <- Import your login page
import ServiceGrid from './components/ServiceGrid';
import SignIn from './pages/SignIn';
import UserDashboard from './pages/UserDashboard';

function App() {
  const handleSearch = (text) => {
    console.log("Searching for:", text);
  };

  return (
    <>
      <TransparentNavbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection/>
                <div className="d-flex justify-content-center p-4">
                <div className="d-flex gap-4">
                  <Card />
                  <ImageCardCarousel />
                </div>
              </div>
              <ServiceGrid />
              <ServicesGrid />
            </>
          } />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<UserDashboard />} />

        </Routes>
</BrowserRouter>

    </>
  );
}

export default App;
