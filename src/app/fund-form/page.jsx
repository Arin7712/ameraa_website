'use client'

import { useState } from "react";
import React from 'react'
// colors
// blue: #003E47
// yellow: #FFFB00

const page = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    turnover: '',
    location: '',
    cibil_status: '',
    project_value: '',
    info: '',
    collateral_status: '',
    contribution: '',
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
      const response = await fetch('/api/fund_form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('Request sent successfully!');
        setFormData({
          name: '',
          email: '',
          turnover: '',
          location: '',
          cibil_status: '',
          project_value: '',
          info: '',
          collateral_status: '',
          contribution: '',
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
    <div className='mx-auto max-w-[1300px] text-center py-14 pb-20'>
      <h1 className='text-4xl text-[#003E47] font-bold max-sm:text-3xl'>Fill up the form for Fund Query</h1>

      <form onSubmit={handleSubmit} className='bg-[#003E47]/20 max-sm:bg-[#003E47]/40 max-sm:mx-2 p-10 max-sm:p-6 mt-10 flex flex-col gap-3 max-sm:gap-2 items-center max-w-4xl mx-auto'>
        <input 
          type="text"
          placeholder='Company Name'
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
        <input 
          type="text" 
          placeholder='Email'
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
        <div className='flex gap-3 max-sm:gap-2 w-full'>
            <input 
              type="text" 
              placeholder='Last 2 Year Turnover' 
              name='turnover'
              value={formData.turnover}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
            <input 
              type="text" 
              placeholder='Location Existing' 
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
        </div>
        <div className='flex gap-3 max-sm:gap-2 w-full'>
            <input 
              type="text" 
              placeholder='CIBIL status' 
              name="cibil_status"
              value={formData.cibil_status}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
            <input 
              type="text" 
              placeholder='Project Value' 
              name="project_value"
              value={formData.project_value}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
        </div>
        <input 
          type="text" 
          placeholder='New Project Information with Complete report' 
          name="info"
          value={formData.info}
          onChange={handleChange}
          required
          className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
        <div className='flex gap-3 max-sm:gap-2 w-full'>
            <input 
              type="text" 
              placeholder='Collateral Status' 
              name="collateral_status"
              value={formData.collateral_status}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
            <input 
              type="text" 
              placeholder='Own Contribution in Project' 
              name="contribution"
              value={formData.contribution}
              onChange={handleChange}
              required
              className='bg-white text-black rounded-xs py-3 pl-2 w-full' />
        </div>
        <textarea 
          placeholder='Message' 
          name="message"
          value={formData.message}
          onChange={handleChange}
          className='bg-white text-black h-32 rounded-xs py-3 pl-2 w-full' />

        <button type='submit' className='bg-[#FFFB00] rounded-xs py-3 pl-2 w-full text-[#003E47] font-bold hover:cursor-pointer'>
            Submit
        </button>

        {status && (
          <p className="mt-2 text-white font-semibold">{status}</p>
        )}
      </form>
    </div>
  )
}

export default page
