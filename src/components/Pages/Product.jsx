import React from "react";
import Layout from "../Layout/Layout";
import testimage from "../../Assets/Images/Bracelets/Bracelet10.png";
import { useParams } from "react-router-dom";
import { allJweldata } from "../../utils/data/JwellData";

function Product() {
  const { id } = useParams();
  var jid = id;

  return (
    <Layout>
      {allJweldata
        .filter((item) => item.id == jid)
        .map((list) => (
          <div
            className="flex flex-col md:flex-row md:py-20 py-10 justify-center  md:px-40
       items-center gap-4 "
          >
            <img
              src={list.image}
              alt=""
              className="border border-[#e0d5af] shadow shadow-[#e0d5af] w-72 h-80 md:h-96 md:w-80"
            />
            <div className="px-8 flex flex-col gap-3 text-[#15303e] md:w-1/2 md:gap-6">
              <h1 className="text-3xl md:text-5xl text-center font-org">
                {list.name}
              </h1>
              <p className="text-justify font-mubu text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus aut eligendi, aperiam neque sunt, unde repudiandae cum
                praesentium inventore debitis sint expedita. Nostrum veniam at
                obcaecati? Minus velit exercitationem totam.
              </p>
              <div className="flex items-center justify-between py-6">
                <h1 className="font-bold text-xl font-Numbers">
                  {list.price} AED{" "}
                </h1>
                <button
                  className="border-2 border-[#15303e] py-2 w-36
          rounded-full font- cursor-pointer drop-shadow-lg font-org font-bold"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        ))}
    </Layout>
  );
}

export default Product;
