import YButton from "../Components/YButton";

export default function Hero() {
    return (
      <div className="relative mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20 max-sm:pt-10 pb-40 max-sm:pb-10 bg-[url('/money21.png')] max-sm:bg-[url('/money22.png')] bg-cover max-sm:bg-[center_bottom_0px] bg-[center_top_-240px] bg-no-repeat">
        <div className="mx-auto max-w-7xl">
          <p className="text-white font-bold max-sm:text-3xl text-6xl drop-shadow-[0_6px_6px_rgba(0,0,0,0.5)]">Securing <span className="text-[#FFFB00]">High Value</span> Project Funding</p>
          <p className="text-white mt-8 mb-14 max-sm:text-sm max-w-[700px]">Get ₹10Cr+ project funding from banks and investors. We arrange LCs & BGs for ₹10Cr+ import-export deals and ₹1Cr+ without property via international banks. Based in Lucknow, serving PAN India</p>
        <div className="font-semibold max-sm:mb-60 text-black">
            <YButton text="Get Started" padding="px-16" />
          </div>

          <div className="mt-14 max-sm:hidden rounded-xl  bg-[#FBDE0D]/20 text-white w-fit pr-20 py-6 pl-3 backdrop-blur-md ">
            <p className="text-xl"><span className="font-bold text-2xl pr-2">10Cr+</span> Project Funding</p>
            <p className="py-4 text-xl"><span className="font-bold text-2xl pr-2">PAN</span> India Coverage</p>
            <p className="text-xl"><span className="font-bold text-2xl pr-2">7+</span> Industry Sectors</p>
          </div>
        </div>
      </div>
    );
  }
  