import React from "react";
import logo from "../assets/lg.png";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import WalletOutlinedIcon from "@mui/icons-material/WalletOutlined";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import DiscountIcon from "@mui/icons-material/Discount";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HelpIcon from "@mui/icons-material/Help";
import { ListItem } from "@mui/material";
import { useState } from "react";

export const Navbar = () => {
  const [sideBar, setSideBar] = useState(false);
  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* leftNav */}

      <div className="flex items-center justify-center ">
        <div onClick={() => setSideBar(!sideBar)} className="cursor-pointer">
          <MenuOutlinedIcon className="md:mr-1.5" style={{ fontSize: "30" }} />
        </div>

        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-6 h-6  md:w-7 md:h-7 ml-1.5"
          />
          <h1 className="text-lg px-1 md:text-2xl md:px-2 ">
            Food<span className="font-bold">Express</span>
          </h1>
        </div>

        <div className="hidden lg:flex items-center bg-gray-100 rounded-lg p-1 text-base">
          <p className="bg-black text-white rounded-lg p-2">Delivery</p>
          <p className="p-2">PickUp</p>
        </div>
      </div>

      {/* Search bar */}

      <div className="bg-gray-100 rounded-lg flex items-center px-2 w-[180px] sm:w-[400px] lg:w-[500px]">
        <SearchOutlinedIcon style={{ fontSize: "30" }} />
        <input
          className="bg-transparent p-2 w-[120px] sm:w-[400px] lg:w-[500px]  focus:outline-none "
          type="text"
          placeholder="Search here..."
        />
      </div>

      {/* cart */}
      <button className="bg-black text-white hidden md:flex items-center py-2 rounded-lg">
        <ShoppingCartOutlinedIcon style={{ fontSize: "25" }} className="mr-2" />{" "}
        Cart
      </button>

      {/* menu for mobile devices */}
      {/* black overlay */}
      {sideBar ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* menu slide */}
      <div
        className={
          sideBar
            ? "fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen z-10 bg-white duration-300"
        }
      >
        <CloseOutlinedIcon
          onClick={() => setSideBar(!sideBar)}
          style={{ fontSize: "30" }}
          className="cursor-pointer absolute right-4 top-4"
        />
        <h2 className="text-2xl p-4">
          Food<span className="font-bold">Express</span>
        </h2>
        <hr className="w-[100%] mx-auto border-gray-400/20 " />

        <nav>
          <ul className="p-4 text-gray-800">
            <ListItem className="text-xl mb-2">
              <WalletOutlinedIcon
                className="mr-4"
                style={{ fontSize: "30px" }}
              />
              Balance
            </ListItem>
            <hr className="w-[90%] mx-auto border-gray-400/20 " />

            <ListItem className="text-xl mb-2">
              <DeliveryDiningIcon
                className="mr-4"
                style={{ fontSize: "30px" }}
              />
              Delivery
            </ListItem>
            <hr className="w-[90%] mx-auto border-gray-400/20 " />

            <ListItem className="text-xl mb-2">
              <FavoriteOutlinedIcon
                className="mr-4"
                style={{ fontSize: "30px" }}
              />
              Favorite
            </ListItem>
            <hr className="w-[90%] mx-auto border-gray-400/20 " />

            <ListItem className="text-xl mb-2">
              <DiscountIcon className="mr-4" style={{ fontSize: "30px" }} />
              Coupon
            </ListItem>
            <hr className="w-[90%] mx-auto border-gray-400/20 " />

            <ListItem className="text-xl mb-2">
              <PeopleAltIcon className="mr-4" style={{ fontSize: "30px" }} />
              Invite Friends
            </ListItem>
            <hr className="w-[90%] mx-auto border-gray-400/20 " />

            <ListItem className="text-xl mb-2">
              <HelpIcon className="mr-4" style={{ fontSize: "30px" }} />
              Help
            </ListItem>
            <hr className="w-[90%] mx-auto border-gray-400/20 " />
          </ul>
        </nav>
      </div>
    </div>
  );
};
