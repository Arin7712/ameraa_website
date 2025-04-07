import YButton from "../Components/YButton";

export default function Hero() {
  return (
    <div className="relative mx-auto px-4 sm:px-6 lg:px-8 z-10 py-20 max-sm:pt-10 pb-40 max-sm:pb-10 bg-[url('/money21.png')] max-sm:bg-[url('/money22.png')] bg-cover max-sm:bg-[center_bottom] sm:bg-[center_top_-240px] bg-no-repeat">
      <div className="mx-auto max-w-7xl">
        <p className="text-white font-bold max-sm:text-3xl text-6xl drop-shadow-[0_6px_6px_rgba(0,0,0,0.5)]">
          Securing <span className="text-[#FFFB00]">High Value</span> Project
          Funding
        </p>
        <p className="mt-8 mb-14 max-sm:text-sm max-w-[450px] text-[#003E47]">
          Ameraa Finnway, based in Lucknow, provides High Value Project Finance
          from Government Banks to Fuel Large-Scale Business Expansion and
          Infrastructure Development Across India. <br /> <br />
          Our funding Solutions Support Ambitious Projects Across Industries
          such as Hospitals, Infrastructure, Hotels, Energy, Agriculture, Real
          estate, Education, and Manufacturing. <br /> <br />
          Project Finance Amounts Range Starts From from ₹21 Cr to 500 Cr,
          including Mortgage and Working Capital Loans above ₹10 Cr. <br />
        </p>
        <div className="font-semibold max-sm:mb-60 text-black">
          <YButton text="Get Started" padding="px-16" />
        </div>

        <div className="mt-14 max-sm:hidden rounded-xl bg-[#B89300]/30 text-white w-fit pr-20 py-6 pl-3 backdrop-blur-md">
          <p className="text-xl">
            <span className="font-bold text-2xl pr-2">10Cr+</span> Project
            Funding
          </p>
          <p className="py-4 text-xl">
            <span className="font-bold text-2xl pr-2">PAN</span> India Coverage
          </p>
          <p className="text-xl">
            <span className="font-bold text-2xl pr-2">7+</span> Industry Sectors
          </p>
        </div>
      </div>
    </div>
  );
}
