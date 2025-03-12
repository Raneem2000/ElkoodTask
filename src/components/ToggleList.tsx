import React, { useState, useEffect } from 'react';
import {
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaPhone,
  FaShippingFast,
} from 'react-icons/fa';
import elkood from '../assets/OIP.jpeg';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { FaUser } from 'react-icons/fa6';
import { SlLogout } from 'react-icons/sl';
// import Dialog from './Dialog';

function ToggleList() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };
  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  return (
    <>
      <button
        type="button"
        className=" w-10 h-10 block md:hidden  text-sm  hover:text-primary focus:outline-none z-50"
        aria-expanded={isOpen}
        onClick={toggleMenu}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div
            className={`fixed inset-y-0 text-base w-64 bg-slate-500 text-whiten  p-4 md:hidden`}
          >
            <button
              type="button"
              className={`absolute top-4 border rounded border-white text-white p-1.5 hover:text-gold hover:border-gold `}
              onClick={handleClose}
            >
              <svg
                className="w-6 h-6 "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <h2 className="mt-20 my-auto text-center   font-bold text-xl">
              <img src={elkood} className="w-15 mx-auto text-center" />
              Elkood
            </h2>
            <ul className="font-medium flex flex-col gap-2.5 p-4 mt-2">
              <li>
                <Link
                  to="/"
                  className={`py-2 px-3  hover:text-gold flex items-center `}
                >
                  <FaHome className="mx-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/categories"
                  className={`py-2 px-3  hover:text-gold flex items-center`}
                >
                  <FaServicestack className="mx-2" />
                  Category
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`py-2 px-3  hover:text-gold flex items-center `}
                >
                  <FaInfoCircle className="mx-2" />
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`py-2 px-3  hover:text-gold flex items-center `}
                >
                  <FaPhone className="mx-2" />
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}

export default ToggleList;
