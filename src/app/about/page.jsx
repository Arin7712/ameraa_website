import React from 'react'
// colors
// blue: #003E47
// yellow: #FFFB00

const page = () => {
  return (
    <div className='mx-auto max-w-[1300px] py-14 text-center pb-24'>
      <h1 className='font-bold text-[#003E47] text-5xl max-sm:text-3xl'>Our Story</h1>
      <p className='max-w-6xl mx-auto mt-6 max-sm:mt-4 text-[#003E47] max-sm:text-justify max-sm:px-3 max-sm:text-sm'>Founded by <span className='font-semibold text-lg max-sm:text-base'>Vishal S. Kumar</span>, a first-generation entrepreneur with over 20 years of experience in banking and finance, AMERAA FINNWAY is built on a legacy of leadership and excellence. With a proven track record at institutions like <span className='font-semibold'>HDFC Bank</span>, <span className='font-semibold'>ICICI Bank</span>, <span className='font-semibold'>Jana Small Finance Bank</span>, and <span className='font-semibold'>Aditya Birla Finance</span>, Vishal brings deep expertise in MSME financing and project funding across key regions such as Jaipur, Delhi, Bihar, Jharkhand, Odisha, and Lucknow.
        <br />In 2023, AMERAA FINNWAY was founded to provide <span className='font-semibold text-lg max-sm:text-base'>High-Value Project Funding</span> (₹20 crore and above) across sectors like Hospitality, Healthcare, Real Estate, and Manufacturing—driving rural development, job creation, and sustainable economic growth.</p>

      <h1 className='font-bold text-[#003E47] text-4xl mt-14 mb-3 max-sm:text-3xl'>Our Key Services</h1>
      <div className="w-20 h-1 bg-[#FFFB00] mx-auto mb-6"></div>
      <div className='flex flex-wrap gap-6 justify-center mt-6 max-sm:px-3'>
        <div className='text-left bg-[#003E47]/10 text-[#003E47] rounded-sm w-5/12 max-sm:w-full p-6 max-sm:p-4 text-sm'>
            <p className='text-2xl font-semibold mb-3'>📌 Project Finance</p>
            <p>- Arranging loans of ₹20 crore+ through government banks.</p>
            <p>- Specialized in infrastructure, healthcare, hospitality, and industrial projects.</p>
            <p>- Strengthening rural and urban economies through job creation and development.</p>
        </div>
        <div className='text-left bg-[#003E47]/10 text-[#003E47] rounded-sm w-5/12 max-sm:w-full p-6 max-sm:p-4 text-sm'>
            <p className='text-2xl font-semibold mb-3'>📌 Trade Finance</p>
            <p>- Facilitating Letters of Credit (LC) and Bank Guarantees (BG) for global trade.</p>
            <p>- Enabling transactions of ₹10 crore+ via Indian banks.</p>
            <p>- Offering ₹1 crore+ transactions without property collateral via international channels.</p>
        </div>
        <div className='text-left bg-[#003E47]/10 text-[#003E47] rounded-sm w-5/12 max-sm:w-full p-6 max-sm:p-4 text-sm'>
            <p className='text-2xl font-semibold mb-3'>📌 Strategic Advisory</p>
            <p>- Delivering expert financial guidance to optimize business funding.</p>
            <p>- Assisting high-value clients in project structuring and risk management.</p>
            <p>- Providing insights to enhance returns and ensure long-term success.</p>
        </div>
      </div>

      <h1 className='font-bold text-[#003E47] text-4xl mt-14 mb-3 max-sm:text-3xl'>Our Guiding Philosophy</h1>
      <div className="w-20 h-1 bg-[#FFFB00] mx-auto mb-6"></div>
      <p className='mt-4 text-[#003E47]'>We believe that “Your network is your net worth.” By leveraging our industry connections and financial acumen, we empower businesses to unlock new opportunities and achieve sustainable growth.</p>

      <h1 className='font-bold text-[#003E47] text-4xl mt-14 mb-3 max-sm:text-3xl'>🤝 Let’s Work Together</h1>
      <div className="w-20 h-1 bg-[#FFFB00] mx-auto mb-6"></div>
      <p className='mt-4 text-[#003E47]'>Partner with AMERAA FINNWAY to fuel your next big project and create meaningful impact across India.</p>
    </div>
  )
}

export default page
