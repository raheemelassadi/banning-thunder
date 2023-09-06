import { useState, useEffect } from "react";
import "./index.css";
import TestimonialSlider from "./TestimonialSlider";
import Contact from "./Contact";

function App() {
  const daysOfWeek = [
    { name: "Sunday", price: "$6", width: "w-32" },
    { name: "Monday", price: "$4", width: "w-32" },
    { name: "Tuesday", price: "$2", width: "w-32" },
    { name: "Wednesday", price: "$1", width: "w-32" },
    { name: "Thursday", price: "Restocking", width: "w-56" }, // Thursday with w-56
    { name: "Friday", price: "$10", width: "w-32" },
    { name: "Saturday", price: "$8", width: "w-32" },
  ];

  const currentDayIndex = new Date().getDay();

  const highlightClass = "bg-yellow-500";
  const textColorClass = "text-white"; // Class for white text

  const [highlightedDay, setHighlightedDay] = useState(null);

  useEffect(() => {
    setHighlightedDay(daysOfWeek[currentDayIndex].name);
  }, [currentDayIndex]);

  return (
    <>
      <div className=" bg-[url('/bg1.jpg')] bg-cover bg-center h-3/4 box-border overflow-x-hidden font-Jakarta scroll-smooth">
        <nav className="text-md md:text-xl text-white font-Jakarta font-semibold drop-shadow-lg flex justify-between pt-8 px-8 box-border">
          <h1 className="cursor-pointer transition-all delay-50 hover:border-b-4 box-border ">
            Banning Thunder Deals
          </h1>
          {/* <h1 className="cursor-pointer transition-all delay-50 hover:border-b-4 box-border">
            Menu
          </h1> */}
        </nav>
        <div className="flex justify-center flex-col items-center box-border min-h-[500px]">
          <h1 className="px-28 text-3xl md:text-5xl text-white font-Jakarta font-semibold text-center drop-shadow-lg mb-11 mt-52 md:w-[650px] w-[490px] box-border">
            Thrift Today, Thrive Tomorrow
          </h1>
          <p className=" text-xs w-full md:px-0 px-14 md:text-lg text-white md:w-2/5 text-center font-medium mb-16">
            Embrace thriftiness now for a brighter future. Explore incredible
            deals at our thrift shop for amazing treasures at unbeatable prices.
            Selling to us sustains thriftiness and supports your future.
          </p>

          <a
            href="#quote"
            class="relative inline-flex items-center md:px-12 md:py-3 overflow-hidden text-sm md:text-lg font-medium text-black rounded-full hover:text-yellow-500 group bg-yellow-500 mb-28 px-10 py-3 box-border"
          >
            <span class="absolute left-0 block w-full h-0 transition-all bg-black opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                class="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span class="relative">Get Quote</span>
          </a>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-56 font-Jakarta align-middle ">
        <p className="opacity-95 text-slate-500 text-md font-Jakarta font-bold tracking-wider uppercase ">
          About Us
        </p>
        <h1 className="md:text-5xl font-extrabold mt-14 text-center text-2xl">
          Why Choose Us?
        </h1>
        <h1 className="md:text-5xl font-extrabold mt-4 text-center mb-11 text-2xl">
          Discover Our Difference
        </h1>
        <p className="md:text-lg font-normal md:max-w-2xl text-center md:p-0 px-14">
          At Thunder Banning Deals, we're more than just a thrift shop; we're
          your gateway to a world of unique treasures, sustainable choices, and
          unbeatable value. When you choose us, you're choosing an exceptional
          shopping experience that goes beyond the ordinary. Here's why Thunder
          Banning Deals stands out from the rest:
        </p>

        <div className="flex justify-center gap-11 md:flex-row flex-col mt-20 px-32 box-border overflow-x-hidden max-w-3/4 md:max-w-auto ">
          <div className="md:max-w-[500px] min-w-[272px] ">
            <h1 className="font-extrabold md:text-3xl text-xl md:w-auto  mb-4">
              Curated Quality Selection
            </h1>
            <h3 className="md:font-medium md:text-lg text-md text-left font-normal ">
              Handpicked for quality, our collection features fashion-forward
              clothing and captivating home decor, all curated to provide
              exceptional value.
            </h3>
          </div>
          <div className=" md:max-w-[500px] min-w-[272px] shrink">
            <h1 className="font-extrabold md:text-3xl text-xl  mb-4 ">
              Unearth Unique Finds
            </h1>
            <h3 className="md:font-medium md:text-lg text-md text-left font-normal ">
              Farewell to generic items. Explore our trove of one-of-a-kind
              treasures that infuse life with personality. Find pieces that
              resonate with your uniqueness, making a distinct statement.
            </h3>
          </div>
          <div className=" md:max-w-[500px] min-w-[272px] shrink">
            <h1 className="font-extrabold md:text-3xl text-xl  mb-4 ">
              Sustainability in Style
            </h1>
            <h3 className="md:font-medium md:text-lg text-md text-left font-normal mb-44">
              Choose Thunder Banning Deals for a sustainable lifestyle. Join us
              in reducing waste, giving pre-loved items new life, and
              contributing to a greener future with guilt-free shopping that
              makes a positive impact.
            </h3>
          </div>
        </div>
      </div>
      <div
        class=" bg-black text-white flex box-border align-middle text-center gap-6 px-8 md:gap-20 py-28 justify-center flex-col font-Jakarta"
        id="something"
      >
        <h1 className="uppercase leading-loose opacity-50">Find Us On</h1>
        <div className="flex justify-center gap-8 md:gap-32 align-middle items-center box-border">
          <div className="">
            <img src="/google.svg" alt="" className="images w-48" />
          </div>

          <div className="w-48">
            <img
              src="https://companieslogo.com/img/orig/YELP_BIG.D-5a67c069.png?t=1671247816"
              alt=""
            />
          </div>

          <div className="w-48">
            <img src="/facebookthree.png" alt="" />
          </div>
        </div>
      </div>
      <div className="md:text-3xl font-Jakarta px-4 py-64">
        <div className="flex bg-white justify-start md:justify-center rounded-lg overflow-x-scroll md:overflow-x-hidden mx-auto py-4">
          {daysOfWeek.map((day, index) => (
            <div
              key={index}
              className={`flex group hover:bg-yellow-500 hover:shadow-lg hover-dark-shadow rounded-lg mx-1 transition-all duration-300 cursor-pointer justify-center ${
                day.name === "Thursday" ? day.width : "w-32"
              } ${
                day.name === highlightedDay
                  ? `${highlightClass} ${textColorClass}`
                  : ""
              }`}
            >
              <div className="flex items-center px-4 py-4">
                <div className="text-center">
                  <p
                    className={`text-gray-900 group-hover:text-gray-100 text-sm md:text-xl font-extrabold transition-all duration-300 ${
                      day.name === highlightedDay ? textColorClass : "" // Apply white text color to the current day
                    }`}
                  >
                    {day.name}
                  </p>
                  <p
                    className={`text-gray-900 group-hover:text-gray-100 mt-3 transition-all duration-300 ${
                      day.name === "Thursday" ? "font-light" : "font-light"
                    } ${
                      day.name === highlightedDay ? textColorClass : "" // Apply white text color to the current day's price
                    }`}
                  >
                    {day.price}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-yellow-500 ">
        <TestimonialSlider />
      </div>

      <div className="bg-white box-border grid md:flex">
        <div className="rounded-3xl py-10 mt-20 px-5 md:mt-0 md:w-1/2 md:p-20 flex justify-center">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.629915825799!2d-116.892467!3d33.924923299999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80db4346c6480bb3%3A0x4a98bc8e1de01c5b!2sBanning%20Thunder%20Deals!5e0!3m2!1sen!2sus!4v1693808361380!5m2!1sen!2sus"
            style={{ border: "0" }}
            allowfullscreen="true"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="w-80 h-[300px] md:w-full rounded-xl"
          ></iframe>
        </div>

        <div className="text-black w-auto md:w-1/2 p-20 md:p-20 font-Jakarta flex flex-col align-middle justify-center box-border ">
          <div className="flex mb-2 text-xl">
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 21"
            >
              <g
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M8 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                <path d="M13.8 12.938h-.01a7 7 0 1 0-11.465.144h-.016l.141.17c.1.128.2.252.3.372L8 20l5.13-6.248c.193-.209.373-.429.54-.66l.13-.154Z" />
              </g>
            </svg>
            <h1 className="text-xl ml-2">Address</h1>
          </div>
          <h1 className="mb-8"> 1434 W Ramsey St, Banning, CA 92220</h1>

          <div className=" flex mb-4">
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1v3m5-3v3m5-3v3M1 7h18M5 11h10M2 3h16a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
              />
            </svg>
            <h1 className="text-xl ml-2">Hours</h1>
          </div>
          <div className="flex flex-col mb-8">
            <p className="leading-loose tracking-wider">Fri-Tue: 9AM - 7PM</p>
            <p className="leading-loose tracking-wider">Wed: 9AM - 5PM</p>
            <p className="leading-loose tracking-wider">Thu: Restocking</p>
          </div>
          <div className="flex mb-4">
            <svg
              class="w-6 h-6 text-gray-800 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 18 18"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m16.344 12.168-1.4-1.4a1.98 1.98 0 0 0-2.8 0l-.7.7a1.98 1.98 0 0 1-2.8 0l-2.1-2.1a1.98 1.98 0 0 1 0-2.8l.7-.7a1.981 1.981 0 0 0 0-2.8l-1.4-1.4a1.828 1.828 0 0 0-2.8 0C-.638 5.323 1.1 9.542 4.78 13.22c3.68 3.678 7.9 5.418 11.564 1.752a1.828 1.828 0 0 0 0-2.804Z"
              />
            </svg>
            <h1 className="text-xl ml-2">Phone Number</h1>
          </div>
          <h1>(951) 524-0177</h1>
        </div>
      </div>

      <div className="text-xl bg-black p-20 text-white" id="quote">
        <Contact />
      </div>
    </>
  );
}

export default App;
