import React from 'react';
import image2 from '../assets/4.avif';

const About = () => {
  return (
    <div
      id="about"
      className="flex px-40 max-lg:px-20 items-center max-sm:flex-col max-md:px-6 my-15 gap-12 bg-white text-blue-500 max-md:pb-4"
    >
      <img
        src={image2}
        alt="Dental Clinic"
        className="sm:w-[400px] w-[250px] h-[200px] sm:h-[350px] rounded-tl-[200px] mt-12 rounded-tr-[200px]"
      />
      <div className="flex flex-col items-start gap-4 justify-center">
        <h3 className="text-lg text-blue-600 font-medium">About Our Clinic</h3>
        <h1 className="text-4xl font-[600] max-xl:text-2xl text-blue-800">
          Your Smile Starts Here
        </h1>
        <p className="text-gray-600 max-w-md">
          At our clinic, we provide the latest technologies to ensure the best
          dental care for you. Our experienced team is dedicated to offering a
          comfortable and safe experience. Let us help you achieve the smile you
          deserve.
        </p>
        <button className="h-fit w-fit bg-lightPrimary rounded-md p-2 transition-transform duration-300 ease-in-out hover:scale-105">
          Learn More About Us
        </button>
      </div>
    </div>
  );
};

export default About;
