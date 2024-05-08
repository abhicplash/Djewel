import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import limited1 from "../../Assets/Images/others/2.jpg";
import limited2 from "../../Assets/Images/others/8.jpg";
import limited3 from "../../Assets/Images/others/6.jpg";

function HomeLimited() {
  return (
    <div
      className="w-full md:h-[100vh] flex md:flex-row flex-col 
      md:px-32 text-[#15303e] py-16 items-center "
    >
      <div className="md:w-1/4 h-96 flex flex-col gap-12 md:text-left text-center  items-center ">
        <h1 className="font-org text-5xl  capitalize drop-shadow-xl">
          Our <br /> Limited <br className="md:Hidden" /> editions
        </h1>
        <button className="border border-[#15303e] rounded-full px-6 justify-center w-40 font-mubu
         text-2xl font-extrabold flex items-center gap-4">
          Explore
          <FaAnglesRight className="text-lg" />
        </button>
      </div>
      <div className="md:w-3/4 md:h-[25rem] flex md:flex-row flex-col gap-12 md:gap-5 justify-center items-center">
        <div className="border md:w-56 border-[#e0d5af] flex flex-col shadow-xl shadow-[#e0d5af]">
          <img src={limited1} alt="" className=" w-56 h-80  " />
          <div className="w-56 h-20 font-mubu  text-center flex flex-col justify-end pb-2">
            <h1 className="font-extrabold text-2xl">Customized Lockets</h1>
            <h1 className="font-extrabold text-[#e0d5af]">by Dtopaz</h1>
          </div>
        </div>
        <div className="border md:w-56 border-[#e0d5af] flex flex-col shadow-xl shadow-[#e0d5af]">
          <img src={limited2} alt="" className=" w-56 h-80  " />
          <div className="w-56 h-20 font-mubu  text-center flex flex-col justify-end pb-2">
            <h1 className="font-extrabold text-2xl">Customized Glasses</h1>
            <h1 className="font-extrabold text-[#e0d5af]">by Dtopaz</h1>
          </div>
        </div>
        <div className="border md:w-56 border-[#e0d5af] flex flex-col shadow-xl shadow-[#e0d5af]">
          <img src={limited3} alt="" className=" w-56 h-80  " />
          <div className="w-56 h-20 font-mubu  text-center flex flex-col justify-end pb-2">
            <h1 className="font-extrabold text-2xl">Customized Keys</h1>
            <h1 className="font-extrabold text-[#e0d5af]">by Dtopaz</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeLimited;
