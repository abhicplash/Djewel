import React, { useEffect, useState } from "react";
import Layout from "../Layout/Layout";
import { Link } from "react-router-dom";
import Shimmer from "../Layout/Shimmer";
import { allJweldata } from "../../utils/data/JwellData";
// import { CiCircleChevRight } from "react-icons/ci";
import JwelItems from "../Layout/JwelItems";

function Shop() {
  return allJweldata.length === 0 ? (
    <Shimmer />
  ) : (
    <Layout>
      <div className="pb-10">
        <div className="w-full h-72 bg-[#15303e]  flex justify-center items-center text-[#e0d5af]">
          <h1 className="text-5xl font-bold font-mubu ">Shop</h1>
        </div>
        <JwelItems />
      </div>
    </Layout>
  );
}

export default Shop;
