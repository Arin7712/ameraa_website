import React from "react";

const SectionTitle = ({ title }) => (
  <div className="text-center mb-16 animate__animated animate__fadeIn">
    <h2 className="text-3xl font-bold text-neutral-900 mb-4">{title}</h2>
    <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
  </div>
);

const FeatureCard = ({ title, description }) => (
  <div className="bg-[#F9F5E7] p-6 rounded-lg shadow-lg border-l-4 border-yellow-400 animate__animated animate__fadeInLeft">
    <h3 className="text-xl font-semibold text-neutral-900 mb-3">{title}</h3>
    <p className="text-neutral-600">{description}</p>
  </div>
);

const IndustryList = ({ industries }) => (
  <div className="bg-[#361500] p-8 rounded-lg animate__animated animate__fadeInRight">
    <h3 className="text-2xl font-bold text-yellow-400 mb-6">Industries We Serve</h3>
    <div className="grid grid-cols-2 gap-4">
      {industries.map((industry, index) => (
        <div key={index} className="flex items-center space-x-3 text-white">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
          </svg>
          <span>{industry}</span>
        </div>
      ))}
    </div>
  </div>
);

const AboutSection = () => {
  const features = [
    { title: "Our Expertise", description: "We specialize in securing high-value project funding through Government Banks & Private Investors, with a focus on major industries across India." },
    { title: "Financial Solutions", description: "Providing comprehensive funding solutions including LCs and BGs for Import-Export transactions, with flexible options for businesses." },
    { title: "Pan India Presence", description: "Based in Lucknow, we serve clients across India, ensuring professional financial services nationwide." },
  ];

  const industries = ["Healthcare", "Hospitality", "Energy", "Agriculture", "Real Estate", "Education"];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title="About Amera" />
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} title={feature.title} description={feature.description} />
            ))}
          </div>
          <IndustryList industries={industries} />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
