import React, { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "MRapunzel S",
      occupation: "Web Developer",
      content:
        "What a fun place to browse and find cool stuff at reasonable prices! Staff is friendly and welcoming, and knows their repeat customers. Will definitely do more shopping here soon! It changes every week!",
    },
    {
      id: 2,
      name: "Hesham H",
      occupation: "Designer",
      content:
        "What i really liked the most, the VIP corner, unbeatable prices less than the original prices by 60/70%, and still can negotiate for more, it became on of my favorite places!",
    },
    {
      id: 3,
      name: "Esther H",
      occupation: "Photographer",
      content:
        "Great deals, found plenty of items to purchase. Will keep going as long as they stay around.",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === testimonials.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? testimonials.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="px-6 md:px-6 box-border font-Jakarta">
      <section className="flex justify-center items-center box-border md:h-max-[500px] py-12 md:py-32">
        <div className="">
          <h2 className="mb-12 text-lg font-extrabold uppercase leading-relaxed ">
            What People Say
          </h2>

          <div className="relative pl-6 md:pl-20">
            <div className="w-full max-w-3xl mx-auto">
              <p className="text-lg md:text-3xl text-left font-bold mb-8">
                {testimonials[currentSlide].content}
              </p>
              <p className="text-xl font-bold ">
                -{testimonials[currentSlide].name}
              </p>
              <div className="flex justify-center mt-8">
                <button
                  onClick={prevSlide}
                  className="mr-20 hover:scale-125 transition-all text-black px-4 py-2 rounded"
                >
                  <svg
                    class="w-6 h-6 text-gray-800 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 5H1m0 0 4 4M1 5l4-4"
                    />
                  </svg>
                </button>
                <button
                  onClick={nextSlide}
                  className="hover:scale-125 transition-all  text-black px-4 py-2 rounded"
                >
                  <svg
                    class="w-6 h-6 text-gray-800 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
