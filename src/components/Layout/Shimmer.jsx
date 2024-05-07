import React from "react";
import Layout from "./Layout";

function Shimmer() {
  const twenty = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2];
  return (
    <Layout>
      <div className="w-full h-96 bg-[#1d3230] flex justify-center items-center text-[#e0d5af]">
        <h1 className="text-5xl font-bold font-mubu">Shop</h1>
      </div>
      <div className=" flex flex-wrap gap-14 bg-blue-50 justify-center items-center py-20 ">
        {twenty.map((list) => (
          <div className="w-60 h-60 bg-gray-50 shadow-lg" />
        ))}
      </div>
    </Layout>
  );
}

export default Shimmer;
