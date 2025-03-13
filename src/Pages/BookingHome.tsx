import React from 'react';
import { useNavigate } from 'react-router-dom';
import image2 from '../assets/3.avif';

const BookingHome = () => {
  const navigate = useNavigate();


  return (
    <div className="flex px-40 max-lg:px-20 items-center max-sm:flex-col max-md:px-6 my-15 gap-12 bg-whiter text-blue-500 max-md:pb-4">
      <div className="flex flex-col items-start gap-4 justify-center">
        <h3 className="text-xl font-medium text-gray-600">
          Welcome to Our Clinic
        </h3>
        <h1 className="text-4xl font-[600] max-xl:text-2xl">
          Book Your Stay with Us
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mt-2">
          Discover the comfort and luxury at our Clinic. Choose from a variety of
          rooms and enjoy premium services tailored just for you. Book now for
          an unforgettable experience.
        </p>
        <button
          className="h-fit w-fit bg-stroke rounded-md p-2 mt-4 text-orange-500"
          onClick={() => navigate(`/bookings`)}
        >
          Book Now
        </button>
      </div>
      <img
        src={image2}
        alt="Clinic Room"
        className="sm:w-[400px] w-[250px] h-[200px] sm:h-[350px] rounded-tl-[200px] mt-12 rounded-tr-[200px]"
      />
    </div>
  );
};

export default BookingHome;
