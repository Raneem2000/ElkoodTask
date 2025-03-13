import React from 'react';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import About from './About';
import BookingHome from './BookingHome';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <About />
      <BookingHome />
      <Footer />
    </div>
  );
};

export default Home;
