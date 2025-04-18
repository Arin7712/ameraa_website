// colors
// blue: #002a31
// yellow: #FFFB00
'use client'

import { useState } from "react";
import { IoIosMail } from "react-icons/io";
import { IoMdCall } from "react-icons/io";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    industry: '',
    amount: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Request sent successfully!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          industry: '',
          amount: '',
          message: '',
        });
      } else {
        setStatus('Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('Error! Unable to send.');
    }
  };

  return (
    <section id="contact" className="py-20 max-sm:pt-10 bg-[#003E47]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 max-sm:mb-10 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-white mb-4 max-sm:text-3xl">Contact Us</h2>
          <div className="w-20 h-1 bg-[#FFFB00] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate__animated animate__fadeInLeft">
            <div className="rounded-lg">
              <h3 className="text-4xl font-bold text-white mb-6 max-sm:text-3xl">Get in Touch & Let's Start</h3>
              <div className="space-y-6">
                <p className="text-white max-sm:text-sm">We're here to help you find the right staffing solutions for your needs. Whether you're a company looking to hire top talent or a candidate seeking your next career opportunity</p>
              </div>
            </div>

            <div className="bg-white rounded-md w-11/12 flex items-center gap-3 mt-10 p-6 max-sm:p-2">
              <p className="bg-[#FFFB00] rounded-full w-12 h-12 max-sm:w-8 max-sm:h-8 flex items-center justify-center"><IoMdCall className="text-3xl max-sm:text-lg text-[#002a31]" /></p>
              <p className="font-bold text-[#003E47] text-2xl max-sm:text-base">+91 9592171057</p>
            </div>

            <div className="bg-white rounded-md w-11/12 flex items-center gap-3 mt-10 max-sm:mt-4 p-6 max-sm:p-2">
              <p className="bg-[#FFFB00] rounded-full w-12 h-12 max-sm:w-8 max-sm:h-8 flex items-center justify-center"><IoIosMail className="text-3xl max-sm:text-lg text-[#002a31]" /></p>
              <div className="flex flex-col">
              <p className="font-bold text-[#003E47] text-2xl max-sm:text-base mb-1">vishal@amerafinnway.com</p>
              <p className="font-bold text-[#003E47] text-2xl max-sm:text-base">info@amerafinnway.com</p>
          
              </div>
            </div>
            <div></div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <form className="space-y-4 max-sm:space-y-2" onSubmit={handleSubmit}>
              <div>
                <input 
                  placeholder="Name" 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="pl-3 mt-1 block w-full h-12 max-sm:h-10 rounded-sm bg-white border-transparent focus:border-yellow-400 focus:ring-0 text-black" 
                  required 
                />
              </div>
              
              <div>
                <input 
                  placeholder="Email" 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-3 mt-1 block w-full rounded-sm h-12 max-sm:h-10 bg-white border-transparent focus:border-yellow-400 focus:ring-0 text-black" 
                  required 
                />
              </div>

              <div>
                <input 
                  placeholder="Phone" 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-3 mt-1 block w-full rounded-sm h-12 max-sm:h-10 bg-white border-transparent focus:border-yellow-400 focus:ring-0 text-black" 
                  required
                />
              </div>

              <div>
                <select
                  name="industry"
                  value={formData.industry}
                  onChange={handleChange}
                  className="pl-3 mt-1 block w-full rounded-sm  bg-white h-12 max-sm:h-10 border-transparent focus:border-yellow-400 focus:ring-0 text-[#003E47]"
                  required  
                >
                  <option value="">Select Industry</option>
                  <option>Healthcare</option>
                  <option>Hospitality</option>
                  <option>Education</option>
                  <option>Real Estate</option>
                  <option>Manufacturing</option>
                  <option>Agriculture</option>
                  <option>Energy</option>
                </select>
              </div>

              <div>
                <input 
                  placeholder="Funding Required" 
                  type="number" 
                  name="amount"
                  value={formData.amount}
                  onChange={handleChange}
                  className="pl-3 mt-1 block w-full rounded-sm h-12 max-sm:h-10 bg-white border-transparent focus:border-yellow-400 focus:ring-0 text-black" min="20" 
                  required 
                />
              </div>

              <div>
                <textarea 
                  placeholder="Message" 
                  rows="4" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="pl-3 pt-3 mt-1 block w-full rounded-sm  bg-white border-transparent focus:border-yellow-400 focus:ring-0 text-black" 
                  required
                ></textarea>
              </div>

              <div>
                <button type="submit" className="w-full bg-[#FFFB00] text-neutral-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                  Submit Request
                </button>
              </div>

              {status && (
                <p className="mt-2 text-white font-semibold">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
