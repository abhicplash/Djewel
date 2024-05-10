import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";
import img from "../../Assets/Images/bennermodels/2.jpg";

const HomeAbout = () => {
  return (
    <div
      className="border-b border-[#e0d5af] w-full py-6 gap-5 md:gap-0
     md:py-0 md:h-[100vh] px-5 md:px-36 flex md:flex-row flex-col 
      items-center justify-between  text-[#2e728f] "
    >
      <div
        className=" md:flex bg-five w-80 md:w-96 h-80 md:h-[30rem]
       bg-center bg-cover shadow-md shadow-[#e0d5af] relative rounded-lg"
      />
      <img
        src={img}
        alt=""
        className="hidden md:flex w-56 h-80
         shadow-lg shadow-[#e0d5af] absolute left-[29rem] "
      />
      <div className="flex flex-col gap-9">
        <h1 className="text-5xl uppercase font-org drop-shadow-lg text-center md:text-left">
          what we offers
        </h1>
        <div className="flex flex-col gap-5 pl-5 ">
          <div>
            <h1 className="flex items-center text-xl
             font-org capitalize gap-3 font-bold">
              <GiCrystalEarrings className="text-[#c08f52]"/>
              capturing collections
            </h1>
            <p className="text-xs pl-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et
              corrupti sed, reiciendis error assumenda numquam
            </p>
          </div>
          <div>
            <h1 className="flex items-center text-xl font-org 
            capitalize gap-3 font-bold">
              <GiHeartNecklace className="text-[#c08f52]" />
              handmade craft
            </h1>
            <p className="text-xs pl-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et
              corrupti sed, reiciendis error assumenda numquam
            </p>
          </div>
          <div>
            <h1 className="flex items-center text-xl font-org capitalize
             gap-3 font-bold">
              <GiBigDiamondRing className="text-[#c08f52]"/>
              Aesthetic design
            </h1>
            <p className="text-xs pl-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et
              corrupti sed, reiciendis error assumenda numquam
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAbout;
