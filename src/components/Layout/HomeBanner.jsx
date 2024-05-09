import React from "react";
import fgpic from "../../Assets/Images/bennermodels/7.jpg";
import bgpic from "../../Assets/Images/bennermodels/4.jpg";

function HomeBanner() {
  return (
    <div
      className="w-full md:h-[100vh] py-5
       md:py-0 bg-[#15303e] font-mub gap-3 flex md:flex-row 
    flex-col-reverse
    md:items-center md:pl-36  relative"
    >
      <div className="text-center md:text-left ">
        <h1 className="text-5xl text-[#e0d5af] font-org uppercase ">
          unique & authentic <br /> hand made Designed <br /> jewellery
        </h1>
        <p className="text-xl text-[#a7babb] font-mubu capitalize pt-5 md:pt-0 ">
          Each piece is born from Hands of our dedicated craftsmen,
          <br className="md:flex hidden" /> who embrace the art of jewelry
          making
        </p>
      </div>
      <div className="flex gap-3 relative  md:w-1/2 ">
        <img
          src={bgpic}
          alt=""
          className="rounded-lg md:rounded-sm shadow-sm 
           md:w-[25rem] md:h-[30rem] mt-5 md:mt-0 h-80 w-80 
            ml-5 md:ml-0 "
        />
        <img
          src={fgpic}
          alt=""
          className="absolute w-60 rounded-md md:h-72 
           shadow-lg right-16 top-24 hidden md:flex "
        />
      </div>
    </div>
  );
}

export default HomeBanner;
