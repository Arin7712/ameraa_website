import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-neutral-900 pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-neutral-700">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <span className="text-yellow-400 font-bold text-2xl">AMERA</span>
            </div>
            <p className="text-neutral-300 mb-6">
              Specializing in high-value project funding and financial solutions across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                  />
                </svg>
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-yellow-300 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-300 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Project Funding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  LC &amp; BG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Equity Funding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  Import-Export
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-yellow-300 font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-neutral-400">Lucknow, Uttar Pradesh</li>
              <li className="text-neutral-400">info@amerafinance.com</li>
              <li className="text-neutral-400">+91 XXXXXXXXXX</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8">
          <div className="grid md:grid-cols-2 gap-4 items-center">
            <div className="text-neutral-400 text-sm">
              &copy; {currentYear} Amera. All rights reserved.
            </div>
            <div className="md:text-right">
              <ul className="flex space-x-6 md:justify-end">
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
