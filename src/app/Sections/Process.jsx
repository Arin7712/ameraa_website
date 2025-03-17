import React from "react";

const Process = () => {
  return (
    <section id="process" className="py-20 pt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-[#003E47] mb-2">Our Process</h2>
          <div className="w-20 h-1 bg-[#FFFB00] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: "1",
              title: "Initial Consultation",
              description:
                "Discuss your project requirements and funding needs with our experts.",
            },
            {
              step: "2",
              title: "Documentation",
              description:
                "Prepare and submit required financial documents and project details.",
            },
            {
              step: "3",
              title: "Assessment",
              description:
                "Our team evaluates your proposal and identifies suitable funding options.",
            },
            {
              step: "4",
              title: "Funding",
              description:
                "Secure and disburse the approved funding through our banking partners.",
            },
          ].map((item, index) => (
            <div
              key={item.step}
              className="relative animate__animated animate__fadeInUp"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-[#FEFCBD] rounded-lg p-6 shadow-lg border-t-4 border-[#003E47]">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#003E47] rounded-full w-8 h-8 flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-[#003E47] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[#003E47]">{item.description}</p>
                </div>
              </div>
              {index < 3 && (
                <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-[#003E47] -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-[#003E47] rounded-lg p-8 animate__animated animate__fadeIn">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Get Started?
              </h3>
              <p className="text-gray-300 mb-6">
                Contact us today to discuss your funding requirements and begin the process.
              </p>
              <a
                href="#contact"
                className="inline-block bg-[#FFFB00] text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300"
              >
                Contact Now
              </a>
            </div>
            <div className="space-y-4">
              {[
                "Minimum funding of ₹20 Crores",
                "Pan India operations",
                "Expert financial guidance",
              ].map((text, idx) => (
                <div key={idx} className="flex items-center space-x-3 text-gray-300">
                  <svg
                    className="w-6 h-6 text-[#FFFB00]"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                  </svg>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
