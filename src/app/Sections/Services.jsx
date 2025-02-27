import { FaUsers, FaChartBar, FaCogs } from "react-icons/fa";
import * as motion from "motion/react-client"

const Services = () => {
  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2 
          className="text-3xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Our Services
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaUsers className="text-4xl text-blue-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Community Engagement</h3>
            <p className="text-gray-600">Building strong relationships with our community through events and activities.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaChartBar className="text-4xl text-green-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
            <p className="text-gray-600">Providing deep insights into market trends and customer behavior.</p>
          </motion.div>
          <motion.div 
            className="p-6 bg-white shadow-lg rounded-lg text-center"
            whileHover={{ scale: 1.05 }}
          >
            <FaCogs className="text-4xl text-red-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Technical Solutions</h3>
            <p className="text-gray-600">Offering innovative technology solutions tailored to your business needs.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
