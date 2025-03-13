import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-blue-500 py-8">
      <div className="container mx-auto text-center">
        <p className="text-lg">© 2025 Your Clinic Name. All rights reserved.</p>
        <div className="flex justify-center gap-6 mt-4">
          <a href="#" className="hover:text-lightPrimary text-lg">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-lightPrimary text-lg">
            Terms &amp; Conditions
          </a>
          <a href="#" className="hover:text-lightPrimary text-lg">
            Contact Us
          </a>
        </div>
        <div className="mt-4 text-sm text-gray-400">
          <p>Built with love and care.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
