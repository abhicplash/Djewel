import React, { useState } from "react";
import { allJweldata } from "../../utils/data/JwellData";
import { ringData } from "../../utils/data/ringData";
import { CiCircleChevRight } from "react-icons/ci";
import { neckData } from "../../utils/data/NeckData";
import { limitedData } from "../../utils/data/limitedData";
import { braceData } from "../../utils/data/braceletData";
import { earData } from "../../utils/data/earingData";
import { Link } from "react-router-dom";

function JwelItems() {
  const [jwelDataItems, setJwelDataItems] = useState(allJweldata);
  const [pageNumber, setPageNumber] = useState(1);
  const totalPages = [];
  for (let i = 1; i <= Math.ceil(jwelDataItems.length / 12); i++) {
    totalPages.push(i);
  }
  return (
    <div>
      <div
        className="w-full
       md:h-40 gap-6 md:gap-10 py-10 flex md:flex-row flex-col 
       justify-center items-center "
      >
        <button
          className="border border-[#e0d5af] text-[#15303e] 
           font-org w-40 py-1 rounded-full"
          onClick={() => {
            setJwelDataItems(allJweldata);
          }}
        >
          All
        </button>
        <button
          className="border border-[#e0d5af] text-[#15303e]
           font-org w-40 py-1 rounded-full"
          onClick={() => {
            setJwelDataItems(ringData);
          }}
        >
          Ring
        </button>
        <button
          className="border border-[#e0d5af] text-[#15303e] font-org w-40 py-1 rounded-full"
          onClick={() => {
            setJwelDataItems(braceData);
          }}
        >
          Bracelet
        </button>
        <button
          className="border border-[#e0d5af] text-[#15303e] font-org w-40 py-1 rounded-full"
          onClick={() => {
            setJwelDataItems(neckData);
          }}
        >
          Necklace
        </button>
        <button
          className="border border-[#e0d5af] text-[#15303e] font-org w-40 py-1 rounded-full"
          onClick={() => {
            setJwelDataItems(earData);
          }}
        >
          Earrings
        </button>
        <button
          onClick={() => {
            setJwelDataItems(limitedData);
          }}
          className="border border-[#e0d5af] text-[#15303e] font-org w-40 py-1 rounded-full"
        >
          Limited
        </button>
      </div>
      <div className="flex flex-wrap gap-9 md:px-32 justify-center pb-10   ">
        {jwelDataItems
          .filter((item) => item.page == pageNumber)
          .map((jwel) => {
            return (
              <div
                className="font-mubu w-56 h-96 bg-white flex flex-col  
                justify-center  items-center border border-[#e0d5af] shadow-sm shadow-[#e0d5af]"
              >
                <img src={jwel.image} alt="" className="h-72 w-full  " />
                <div className="flex justify-between items-center w-full p-3 ">
                  <div className="text-left flex flex-col gap-1 text-[#15303e]">
                    <h1 className="font-extrabold text-xl capitalize">
                      {jwel.name}
                    </h1>
                    <h1 className="font-org text-xs">by Dtopaz</h1>
                    <h1 className="text-xs">${jwel.price}</h1>
                  </div>
                  <Link to={`/product/${jwel.id}`}>
                    <CiCircleChevRight className="text-4xl text-[#e0d5af] font-extrabold" />
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
      <div className="w-full 0 px-10 md:px-32 flex flex-wrap gap-3 justify-center">
        {totalPages.map((page) => (
          <button
            className=" cursor-pointer border text-[#15303e] border-[#15303e] py-1 px-3 
            shadow-sm justify-center items-center active:text-red-600"
            onClick={(e) => {
              setPageNumber(e.target.innerText);
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
}

export default JwelItems;
