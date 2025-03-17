'use client'

import * as motion from "motion/react-client"
import ServiceBox from "../Components/ServiceBox";
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa";


const Services = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="py-8 pt-16" id="service">
      <div className="mx-auto px-6">
        <motion.h2 
          className="text-4xl text-[#003E47] font-bold text-center mb-8 max-sm:text-3xl"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="flex flex-wrap gap-4 justify-center">
          <ServiceBox id={1} name="Healthcare" description="We fund rural healthcare projects, improving medical access, creating jobs, and boosting economic growth." img="/healthcare.jpg" />
          <ServiceBox id={2} name="Hospitality" description="We fund hospitality projects, building hotels and resorts while driving rural tourism and economic development." img="/hospitality.jpg" />
          <ServiceBox id={3} name="Real Estate" description="We fund infrastructure and real estate projects, creating jobs, strengthening economies, and adhering to regulations." img="/realEstate.jpg" />
          <ServiceBox id={4} name="Education" description="We fund rural educational institutions, raising education standards, creating jobs, and driving community development." img="/education.jpg" />
          

          <AnimatePresence>
            {showMore && (
              <motion.div 
                className="flex flex-wrap gap-4 justify-center w-full"
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.4 }}
              >
                <ServiceBox id={5} name="Manufacturing Unit" description="We fund manufacturing and energy projects, boosting industrial capacity, employment, and sustainable growth." img="/manufacturing.jpg" />
                <ServiceBox id={6} name="Equity Funding" description="We enable equity funding to strengthen businesses, share risks, and drive large-scale growth without debt." img="/coins.jpg" />
                <ServiceBox id={7} name="Import Export Finance" description="We fund import-export and trade finance services, supporting business liquidity and enhancing India’s trade economy." img="/import.jpg" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="w-full flex justify-center">
          <button 
            onClick={() => setShowMore(!showMore)} 
            className="mt-4 h-14 w-14 flex items-center justify-center rounded-full bg-[#003E47] text-[#FFFB00] text-2xl hover:cursor-pointer"
          >
            {showMore ? <FaAngleUp /> : <FaAngleDown />}
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default Services;
