"use client"

// colors
// blue: #003E47
// yellow: #FFFB00
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      title: 'Healthcare Project, Delhi',
      text:
        "Amera's expertise in securing funding for our hospital expansion project was invaluable. Their professional approach and industry knowledge made the entire process smooth.",
      initial: 'R',
    },
    {
      name: 'Sanjay Mehta',
      title: 'Hospitality Venture, Mumbai',
      text:
        'The team at Amera helped us secure substantial funding for our hotel project. Their understanding of the hospitality sector and banking relationships proved crucial.',
      initial: 'S',
    },
    {
      name: 'Priya Singh',
      title: 'Education Institute, Bangalore',
      text:
        "Exceptional service and guidance throughout our educational institution's expansion funding process. Amera's team truly understands the education sector's needs.",
      initial: 'P',
    },
  ];

  const StarRating = () => (
    <div className="flex text-[#FFFB00]">
      {[...Array(5)].map((_, index) => (
        <svg
          key={index}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );

  return (
    <section id="testimonials" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate__animated animate__fadeIn">
          <h2 className="text-4xl font-bold text-[#003E47] mb-4 max-sm:text-3xl">
            Client Testimonials
          </h2>
          <div className="w-20 h-1 bg-[#FFFB00] mx-auto"></div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#003E47]/30 p-8 rounded-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#003E47] rounded-full flex items-center justify-center">
                    <span className="text-[#FFFB00] text-xl font-bold">
                      {testimonial.initial}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-neutral-900">
                      {testimonial.name}
                    </h4>
                    <p className="text-[#003E47]">{testimonial.title}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <StarRating />
                </div>
                <p className="text-[#003E47]">{testimonial.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

      </div>
    </section>
  );
};

export default Testimonials;
