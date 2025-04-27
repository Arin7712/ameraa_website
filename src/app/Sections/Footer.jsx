// colors
// blue: #003E47
// yellow: #FFFB00

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="footer" className="bg-[#002a31] pt-16 pb-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-12 border-b border-[#FFFB00]">
          <div className="col-span-2 md:col-span-1 max-sm:col-span-1 max-sm:mb-12">
          <Link href="/" className="flex items-center">
              <Image src={"/logo2.png"} alt="logo" height={80} width={80} className="mr-4"/>
              <span className="text-[#FFFB00] font-bold text-2xl max-sm:text-xl">AMERAA FINNWAY</span>
            </Link>
            <p className="text-white mb-6 max-sm:text-sm">
              Specializing in high-value project funding and financial solutions across India.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/vishal-s-kumar-4272725a/"
                className="text-[#FFFB00] hover:text-yellow-400 transition-colors duration-300"
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
                href="https://www.instagram.com/ameraa_finnway/"
                className="text-[#FFFB00] hover:text-yellow-400 transition-colors duration-300"
              >
                <span className="sr-only">Instagram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm8.75 2.25a.75.75 0 0 1 .75.75v1a.75.75 0 0 1-1.5 0v-1a.75.75 0 0 1 .75-.75zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"
                  />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/ameraa.finnway"
                className="text-[#FFFB00] hover:text-yellow-400 transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 5 3.66 9.13 8.44 9.88v-6.99H7.9v-2.89h2.54V9.41c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 17 22 12z"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div className='max-sm:text-sm'>
            <h3 className="text-[#FFFB00] font-semibold mb-4 max-sm:text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className='max-sm:text-sm'>
            <h3 className="text-[#FFFB00] font-semibold mb-4 max-sm:text-base">Services</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Project Funding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  LC &amp; BG
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Equity Funding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Import-Export
                </a>
              </li>
            </ul>
          </div>

          <div className='max-sm:text-sm'>
            <h3 className="text-[#FFFB00] font-semibold mb-4 max-sm:text-base">Contact Info</h3>
            <ul className="space-y-2">
              <li className="text-white">2nd Floor, Nanda Bhawan,
              Sapru Marg, Hazratganj - Lucknow (Uttar Pradesh) - 226001</li>
              <li className="text-white">- info@ameraafinnway.com</li>
              <li className="text-white">- +91 9592171057</li>
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
                    className="text-white hover:text-[#FFFB00] transition-colors duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-[#FFFB00] transition-colors duration-300"
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
