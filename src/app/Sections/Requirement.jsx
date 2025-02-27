const FundingCard = ({ icon, title, description }) => {
  return (
    <div className="bg-neutral-800 rounded-lg p-6 border-l-4 border-yellow-400">
      <div className="flex items-center mb-4">
        <svg
          className="w-8 h-8 text-yellow-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {icon}
        </svg>
        <h3 className="text-xl font-bold text-white ml-4">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

const FundingSection = ({ cards }) => {
  return (
    <div className="space-y-6 animate__animated animate__fadeInLeft md:animate__fadeInRight">
      {cards.map((card, index) => (
        <FundingCard
          key={index}
          icon={card.icon}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

const Requirement = () => {
  const fundingCardsLeft = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 8h6m-5 0a3 3 0 110 6H9l3 3m-3-6h6m6 1a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      ),
      title: "Minimum Funding Size",
      description: "Minimum ticket size for debt funding: ₹20 crores and above",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      ),
      title: "Security Requirements",
      description: "Collateral security is mandatory for debt funding",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      ),
      title: "Financial Documents",
      description:
        "Audited balance sheets from the last two years and cash flow statements",
    },
  ];

  const fundingCardsRight = [
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
        />
      ),
      title: "Project Details",
      description:
        "Comprehensive project details and funding requirements documentation",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      ),
      title: "Company Profile",
      description:
        "Complete company profile and business background information",
    },
    {
      icon: (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      ),
      title: "Pitch Deck",
      description:
        "Professional pitch deck presenting your business case and growth potential",
    },
  ];

  return (
    <section id="requirements" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-white mb-4">
            Funding Requirements
          </h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <FundingSection cards={fundingCardsLeft} />
          <FundingSection cards={fundingCardsRight} />
        </div>

        <div className="mt-12 text-center animate__animated animate__fadeIn">
          <a
            href="#contact"
            className="inline-block bg-yellow-400 text-neutral-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300"
          >
            Apply for Funding
          </a>
        </div>
      </div>
    </section>
  );
};

export default Requirement;
