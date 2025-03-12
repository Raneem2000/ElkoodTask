// import Evento from './Evento';
import { CiSearch } from 'react-icons/ci';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoMdHeart } from 'react-icons/io';
import ToggleList from './ToggleList';
import elkood from '../assets/OIP (1).jpeg';
import { FaUser } from 'react-icons/fa';

const Navbar = () => {
  const navigate = useNavigate();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  return (
    <>
      <div className="flex w-full h-[80px] items-center text-blue-400 justify-between bg-white px-3.5 sm:px-5 text-base font-bold text-logo shadow-lg">
        {/* <Evento /> */}
        <ul className="hidden md:flex text-lightPrimary60 font-semibold font-heading gap-6 lg:gap-12">
          <li>
            <Link
              className={`hover:text-lightPrimary h-[80px] flex items-center `}
              to="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-lightPrimary flex h-[80px] items-center`}
              to="/categories"
            >
              Clinic
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-lightPrimary flex h-[80px] items-center`}
              to="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={`hover:text-lightPrimary flex h-[80px] items-center`}
              to="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
        <img src={elkood} className="w-30
           mx-auto" />
        <div className="flex gap-2 text-2xl sm:gap-4 text-stone-400 items-center">
          <CiSearch
            className="text-2xl cursor-pointer"
            onClick={toggleSearch}
          />
          <div
            className="flex items-center animate-pulse text-error cursor-pointer"
            onClick={() => navigate('/favourite')}
          >
            <IoMdHeart />
          </div>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => navigate('/order')}
          >
            <FaUser className='text-lg' />
            <span className="flex absolute -mt-5 ml-4">
              <span className="animate-ping absolute inline-flex h-3 w-3 bg-error rounded-full opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-error"></span>
            </span>
          </div>
          <div className="md:block hidden"> </div>
          <ToggleList />
        </div>
      </div>
      {/*  */}
    </>
  );
};

export default Navbar;
