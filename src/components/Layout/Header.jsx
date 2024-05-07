import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="font-mubu drop-shadow-sm bg-[#15303e] border-b border-[#e0d5af] px-36 w-full h-12 flex items-center justify-between ">
      <Link to={"/"}>
        <h1 className="text-3xl text-[#e0d5af] hover:scale-105 duration-700 font-bold ">
          DJ
        </h1>
      </Link>
      <ul className="flex gap-12 text-lg items-center font-bold ">
        <Link to={"/"}>
          <li className="text-[#a7babb] hover:text-[#e0d5af]">Home</li>
        </Link>
        <Link to={"/shop"}>
          <li className="text-[#a7babb] hover:text-[#e0d5af]">Shop</li>
        </Link>
        <Link to={"/contact"}>
          <li className="text-[#a7babb] hover:text-[#e0d5af]">Contact us</li>
        </Link>
        <Link to={"/cart"}>
          <FaShoppingCart className="text-[#e0d5af] hover:text-[#e0d5af]" />
        </Link>
      </ul>
    </div>
  );
}

export default Header;
