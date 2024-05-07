import React from "react";
import { GiBigDiamondRing } from "react-icons/gi";
import { GiCrystalEarrings } from "react-icons/gi";
import { GiHeartNecklace } from "react-icons/gi";
import img from "../../Assets/Images/bennermodels/2.jpg";

const HomeAbout = () => {
  return (
    <div className="w-full h-[100vh] px-36 flex items-center justify-between  text-[#15303e] ">
      <div className="bg-five w-96 h-[30rem] bg-center bg-cover shadow-md shadow-[#e0d5af] relative" />
      <img src={img} alt="" className="w-56 h-80 shadow-lg shadow-[#e0d5af] absolute left-[29rem]" />
      <div className="flex flex-col gap-9">
        <h1 className="text-5xl uppercase font-org drop-shadow-lg">
          what we offers
        </h1>
        <div className="flex flex-col gap-5">
          <div>
            <h1 className="flex items-center text-xl font-org capitalize gap-3">
              <GiCrystalEarrings />
              capturing collections
            </h1>
            <p className="text-xs pl-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et
              corrupti sed, reiciendis error assumenda numquam
            </p>
          </div>
          <div>
            <h1 className="flex items-center text-xl font-org capitalize gap-3">
              <GiHeartNecklace />
              handmade craft
            </h1>
            <p className="text-xs pl-9">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Et
              corrupti sed, reiciendis error assumenda numquam
            </p>
          </div>
          <div>
            <h1 className="flex items-center text-xl font-org capitalize gap-3">
              <GiBigDiamondRing />
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
