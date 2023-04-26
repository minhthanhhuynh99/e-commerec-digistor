import React from "react";
import logo from "../assets/logo.png";
import icons from "../ultils/icons";
import { Link } from "react-router-dom";
import path from "../ultils/path";

const { RiPhoneFill, MdEmail, FaUserCircle, HiShoppingBag } = icons;
const Header = () => {
  return (
    <div className="w-main flex justify-between h-[110px] py-[35px]">
      <Link to={`/${path.HOME}`}>
        <img src={logo} alt="logo" className="w-[234px] object-contain" />
      </Link>
      <div className="flex text-[13px] ">
        <div className="flex-col px-6 border-r items-center">
          <span className="flex gap-4 items-center">
            <RiPhoneFill color="red" />
            <span className="font-semibold">(+1800) 000 8808</span>
          </span>
          <span>Mon-Sat 9:00AM - 8:00PM</span>
        </div>
        <div className="flex-col px-6 border-r items-center">
          <span className="flex gap-4 items-center">
            <MdEmail color="red" />
            <span className="font-semibold">SUPPORT@TADATHEMES.COM</span>
          </span>
          <span className="flex justify-center">Online Support 24/7</span>
        </div>
        <div className="flex px-6 border-r justify-center items-center gap-2">
          <HiShoppingBag color="red" />
          <span>0 item</span>
        </div>
        <div className="flex px-6 justify-center items-center">
          <FaUserCircle size={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
