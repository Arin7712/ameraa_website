

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate__animated animate__fadeIn">
          <h2 className="text-3xl font-bold text-white mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="animate__animated animate__fadeInLeft">
            <div className="bg-neutral-800 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="ml-4 text-gray-300">Lucknow, Uttar Pradesh</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="ml-4 text-gray-300">info@amerafinance.com</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="ml-4 text-gray-300">+91 XXXXXXXXXX</span>
                </div>
              </div>
            </div>
          </div>

          <div className="animate__animated animate__fadeInRight">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-300">Name</label>
                <input type="text" className="mt-1 block w-full rounded-md bg-neutral-800 border-transparent focus:border-yellow-400 focus:ring-0 text-white" required />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" className="mt-1 block w-full rounded-md bg-neutral-800 border-transparent focus:border-yellow-400 focus:ring-0 text-white" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Phone</label>
                <input type="tel" className="mt-1 block w-full rounded-md bg-neutral-800 border-transparent focus:border-yellow-400 focus:ring-0 text-white" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Project Type</label>
                <select className="mt-1 block w-full rounded-md bg-neutral-800 border-transparent focus:border-yellow-400 focus:ring-0 text-white">
                  <option>Healthcare</option>
                  <option>Hospitality</option>
                  <option>Education</option>
                  <option>Real Estate</option>
                  <option>Manufacturing</option>
                  <option>Agriculture</option>
                  <option>Energy</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Funding Required (in Crores)</label>
                <input type="number" className="mt-1 block w-full rounded-md bg-neutral-800 border-transparent focus:border-yellow-400 focus:ring-0 text-white" min="20" required />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300">Message</label>
                <textarea rows="4" className="mt-1 block w-full rounded-md bg-neutral-800 border-transparent focus:border-yellow-400 focus:ring-0 text-white" required></textarea>
              </div>

              <div>
                <button type="submit" className="w-full bg-yellow-400 text-neutral-900 py-3 px-6 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300">
                  Submit Request
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
