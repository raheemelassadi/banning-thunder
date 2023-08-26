import { useState } from "react";
import "./index.css";

function App() {
  return (
    <>
      <div className=" bg-[url('./bg1.jpg')] bg-cover bg-center h-3/4 box-border">
        <nav className="text-md md:text-xl text-white font-Jakarta font-semibold drop-shadow-lg flex justify-between pt-8 px-8 box-border">
          <h1 className="cursor-pointer">Banning Thunder Deals </h1>
          <h1 className="cursor-pointer">Menu</h1>
        </nav>
        <div className="flex justify-center flex-col items-center box-border">
          <h1 className="px-28 text-3xl md:text-5xl text-white font-Jakarta font-semibold text-center drop-shadow-lg mb-11 mt-28 md:w-[650px] w-[490px]">
            Thrift Today, Thrive Tomorrow
          </h1>
          <p className=" text-xs w-full md:px-0 px-14 md:text-lg text-white md:w-2/5 text-center font-medium mb-16">
            Embrace thriftiness now for a brighter future. Explore incredible
            deals at our thrift shop for amazing treasures at unbeatable prices.
            Selling to us sustains thriftiness and supports your future.
          </p>
          <button className="w-40 px-3 py-2 text-sm md:text-md rounded-full bg-yellow-500 md:w-44 mb-20 md:py-3 md:px-9 hover:bg-opacity-80 box-border">
            Contact Us
          </button>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
        <p>About Us</p>
        <div className="flex justify-center gap-11 md:flex-row flex-col">
          <h3 className="md:w-1/3 px-28 md:px-6">
            Embrace thriftiness today to secure a better tomorrow. Discover
            unbeatable deals at our thrift shop, where you can find treasures at
            amazing prices. Plus, when you sell your items to us, you contribute
            to a sustainable cycle of thrift and support your future endeavors.
            Thrift Today, Thrive Tomorrow.
          </h3>
          <h3 className="md:w-1/3 px-28 md:px-6">
            Embrace thriftiness today to secure a better tomorrow. Discover
            unbeatable deals at our thrift shop, where you can find treasures at
            amazing prices. Plus, when you sell your items to us, you contribute
            to a sustainable cycle of thrift and support your future endeavors.
            Thrift Today, Thrive Tomorrow.
          </h3>
          <h3 className="md:w-1/3 px-28 md:px-6">
            Embrace thriftiness today to secure a better tomorrow. Discover
            unbeatable deals at our thrift shop, where you can find treasures at
            amazing prices. Plus, when you sell your items to us, you contribute
            to a sustainable cycle of thrift and support your future endeavors.
            Thrift Today, Thrive Tomorrow.
          </h3>
        </div>
      </div>
    </>
  );
}

export default App;
