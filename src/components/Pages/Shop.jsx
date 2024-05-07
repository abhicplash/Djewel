import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Shimmer from "../Layout/Shimmer";
import { jweldata } from "../../utils/data/JwellData";
import { CiCircleChevRight } from "react-icons/ci";

function Shop() {
  return jweldata.length === 0 ? (
    <Shimmer />
  ) : (
    <Layout>
      <div>
        <div className="w-full h-72 bg-[#15303e]  flex justify-center items-center text-[#e0d5af]">
          <h1 className="text-5xl font-bold font-mubu ">Shop</h1>
        </div>
        <div className="w-full h-40 gap-20  flex  justify-center items-center ">
          <button className="border border-[#e0d5af] text-[#15303e] font-org px-6 py-1 rounded-full">All</button>
          <button className="border border-[#e0d5af] text-[#15303e] font-org px-6 py-1 rounded-full">Ring</button>
          <button className="border border-[#e0d5af] text-[#15303e] font-org px-6 py-1 rounded-full">Bracelet</button>
          <button className="border border-[#e0d5af] text-[#15303e] font-org px-6 py-1 rounded-full">Necklace</button>
          <button className="border border-[#e0d5af] text-[#15303e] font-org px-6 py-1 rounded-full">Earrings</button>
        </div>
        <div className="flex flex-wrap gap-9 px-32 justify-center pb-10   ">
          {jweldata.map((jwel) => {
            return (
              <div
                className="font-mubu w-56 h-96 bg-white flex flex-col  
                justify-center  items-center border border-[#e0d5af] shadow-sm shadow-[#e0d5af]"
              >
                <img src={jwel.image} alt="" className="h-72 w-full  " />
                <div className="flex justify-between items-center w-full p-3 ">
                  <div className="text-left flex flex-col gap-1 text-[#15303e]">
                    <h1 className="font-extrabold text-xl">{jwel.name}</h1>
                    <h1 className="font-org text-xs">by Dtopaz</h1>
                    <h1 className="text-xs">${jwel.price}</h1>
                  </div>
                  <CiCircleChevRight className="text-4xl text-[#e0d5af]" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
}

export default Shop;
