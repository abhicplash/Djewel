import React from "react";
import Layout from "../Layout/Layout";
import img1 from "../../Assets/Images/Bracelets/Bracelet11.png";
import { MdAdd } from "react-icons/md";
import { FaMinus, FaPlus } from "react-icons/fa";

function Cart() {
  return (
    <Layout>
      <div className="w-full gap-3 flex px-20 py-24">
        <div className="w-full  ">
          <div
            className="font-Numbers pl-56  md:flex hidden justify-center
           gap-36  h-16  items-center font-semibold  border"
          >
            {/* <h1>Product</h1> */}
            <h1>Product</h1>
            <h1 className="pl-28">Quantity</h1>
            <h1>Price</h1>
          </div>
          <div className="flex flex-col ">
            <div className="flex justify-between border h-60 font-Numbers">
              <img src={img1} alt="" className=" w-52 h-60 shado" />
              <div className="flex justify-between w-full px-12 items-start pt-6">
                <div className="w-52">
                  <h1 className="font-semibold text-lg">Dimond RichCut</h1>
                  <p className="text-xs text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime adipisci sapiente doloremque ipsa minima quibusdam
                    ipsam ullam nostrum, amet vero. Hic repellat est sapiente
                    similique? Sed vel veniam atque ipsum!
                  </p>
                </div>
                <div className="flex items-center  gap-2">
                  <FaPlus className="border rounded-full p-1 text-xl cursor-pointer" />
                  <input
                    type="text"
                    className="w-14 text-center border font-bold "
                    value="1"
                  />
                  <FaMinus className="border rounded-full p-1 text-xl cursor-pointer" />
                </div>
                <h1>10AED</h1>
              </div>
            </div>
            <div className="flex justify-between border h-60 font-Numbers">
              <img src={img1} alt="" className=" w-52 h-60 shado" />
              <div className="flex justify-between w-full px-12 items-start pt-6">
                <div className="w-52">
                  <h1 className="font-semibold text-lg">Dimond RichCut</h1>
                  <p className="text-xs text-justify">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Maxime adipisci sapiente doloremque ipsa minima quibusdam
                    ipsam ullam nostrum, amet vero. Hic repellat est sapiente
                    similique? Sed vel veniam atque ipsum!
                  </p>
                </div>
                <div className="flex items-center  gap-2">
                  <FaPlus className="border rounded-full p-1 text-xl cursor-pointer" />
                  <input
                    type="text"
                    className="w-14 text-center border font-bold "
                    value="1"
                  />
                  <FaMinus className="border rounded-full p-1 text-xl cursor-pointer" />
                </div>
                <h1>10AED</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="w-96 h-96 bg-blue-600"></div>
      </div>
    </Layout>
  );
}

export default Cart;
