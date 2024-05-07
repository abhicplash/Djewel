import React from "react";
import fgpic from "../../Assets/Images/bennermodels/7.jpg";
import bgpic from "../../Assets/Images/bennermodels/4.jpg";

function HomeBanner() {
  return (
    <div className="w-full h-[100vh] bg-[#15303e] font-mub gap-3 flex items-center pl-36 ">
      <div>
        <h1 className="text-5xl text-[#e0d5af] font-org uppercase ">
          unique & authentic <br /> hand made Designed <br /> jewellery
        </h1>
        <p className="text-xl text-[#a7babb] font-mubu capitalize ">
          Each piece is born from Hands of our dedicated craftsmen,
          <br /> who embrace the art of jewelry making
        </p>
      </div>
      <div className="flex gap-3 relative w-1/2">
        <img
          src={bgpic}
          alt=""
          className="rounded-sm shadow-sm  w-[25rem] h-[30rem]"
        />
        <img
          src={fgpic}
          alt=""
          className="absolute w-60 rounded-md h-72 shadow-lg right-16 top-24"
        />
      </div>
    </div>
  );
}

export default HomeBanner;
