import React from "react";
import { FaAnglesRight } from "react-icons/fa6";
import limited1 from '../../Assets/Images/others/2.jpg'
import limited2 from '../../Assets/Images/others/8.jpg'
import limited3 from '../../Assets/Images/others/6.jpg'

function HomeLimited() {
  return (
    <div className="w-full h-[100vh] flex  px-36 text-[#15303e] py-16">
      <div className="w-1/4 h-96 flex flex-col gap-12">
        <h1 className="font-org text-5xl capitalize drop-shadow-xl">
          Our <br /> Limited editions
        </h1>
        <button className="border border-[#15303e] rounded-full px-6 justify-center w-40 font-mubu text-2xl font-extrabold flex items-center gap-4">
          Explore
          <FaAnglesRight className="text-lg" />
        </button>
      </div>
      <div className="w-3/4 h-96 flex gap-5">
        <img src={limited1} alt="" className=" w-56 h-96 border border-[#e0d5af] shadow-sm shadow-[#e0d5af]" />
        <img src={limited2} alt="" className=" w-56 h-96 border border-[#e0d5af] shadow-sm shadow-[#e0d5af]" />
        <img src={limited3} alt="" className=" w-56 h-96 border border-[#e0d5af] shadow-sm shadow-[#e0d5af]" />
      </div>
    </div>
  );
}

export default HomeLimited;
