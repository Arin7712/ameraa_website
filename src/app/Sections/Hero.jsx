export default function Hero() {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate__animated animate__fadeInLeft">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Securing <span className="text-yellow-400">High Value</span> Project Funding
            </h1>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              Specializing in project funding (₹10 Cr+) through Government Banks &amp; Private Investors for industries including Healthcare, Hospitality, Energy, and more across PAN India.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-8 py-4 bg-yellow-400 text-neutral-900 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Get Started
              </a>
              <a
                href="#services"
                className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 rounded-lg font-semibold hover:bg-yellow-400 hover:text-neutral-900 transition-colors duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
  
          <div className="animate__animated animate__fadeInRight">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-yellow-400 text-3xl font-bold mb-2">₹10Cr+</div>
                <div className="text-gray-300">Minimum Project Funding</div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-yellow-400 text-3xl font-bold mb-2">PAN</div>
                <div className="text-gray-300">India Coverage</div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-yellow-400 text-3xl font-bold mb-2">7+</div>
                <div className="text-gray-300">Industry Sectors</div>
              </div>
              <div className="bg-neutral-800/50 backdrop-blur-sm p-6 rounded-lg">
                <div className="text-yellow-400 text-3xl font-bold mb-2">LC/BG</div>
                <div className="text-gray-300">Financial Instruments</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  