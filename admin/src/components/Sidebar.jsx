import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
const Sidebar = () => {
  return (
    <div className="sm:w-[18%] w-[12%] min-h-screen border-r-2 text-gray-500">
      <div className="flex flex-col gap-4 pt-6 pl-[22%] text-[13px]">
        <NavLink
          className={`flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg`}
          to="/add"
        >
          <img className="w-7 h-6" src={assets.add_icon} alt="" />
          <p className="hidden md:block">Add Item</p>
        </NavLink>
        <NavLink
          className={`flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg`}
          to="/list"
        >
          <img className="w-7 h-6" src={assets.order_icon} alt="" />
          <p className="hidden md:block">List Items</p>
        </NavLink>
        <NavLink
          className={`flex items-center gap-3 border border-gray-300 border-r-0 px-3 py-2 rounded-lg`}
          to="/orders"
        >
          <img className="w-7 h-6" src={assets.order_icon} alt="" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
