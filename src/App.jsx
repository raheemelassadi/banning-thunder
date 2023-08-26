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
          <h1 className="px-28  text-2xl md:text-6xl text-white font-Jakarta font-semibold text-center drop-shadow-lg mb-11 mt-16">
            Thrift Today, <br /> Thrive Tomorrow
          </h1>
          <p className=" text-sm md:text-lg text-white w-2/5 text-center font-medium mb-20">
            Embrace thriftiness today to secure a better tomorrow. Discover
            unbeatable deals at our thrift shop, where you can find treasures at
            amazing prices. Plus, when you sell your items to us, you contribute
            to a sustainable cycle of thrift and support your future endeavors.
            Thrift Today, Thrive Tomorrow.
          </p>
          <button className="rounded-full bg-yellow-500 w-44 mb-20 py-3 px-9 hover:bg-opacity-80 box-border">
            Contact Us
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
