import React from "react";
import { IoLocation, IoCall } from "react-icons/io5";
import { FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      className="bg-[#15303e] text-[#a7babb]  
    font-mubu border-t border-[#e0d5af] w-full md:h-72   md:flex-row flex-col
    flex justify-between md:px-32 items-center gap-10 py-12 md:py-0 "
    >
      <div>
        <Link to={"/"}>
          <h1 className="text-4xl font-bold text-[#e0d5af] text-center md:text-left">
            DJ
          </h1>
        </Link>
        <p className="w-64 text-[#a7babb] ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
          cumque repellat voluptatum itaque molestiae, inventore reprehenderit
        </p>
      </div>
      <div>
        <h1 className="font-bold text-xl">Links</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Shop</li>
          <li>Cart</li>
        </ul>
      </div>
      <div>
        <h1 className="font-bold text-xl">Contact US</h1>
        <h1 className="flex  items-center gap-3">
          <IoLocation /> Dubai ,UAE-57068
        </h1>
        <h6 className="flex  items-center gap-3">
          <IoCall /> +973 356249
        </h6>
        <h3 className="flex items-center gap-3">
          <FaEnvelope />
          hello@example.com
        </h3>
      </div>
    </div>
  );
}

export default Footer;
