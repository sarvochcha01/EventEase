import { useState } from "react";
import { Link } from "react-router-dom";

import PopupNavigation from "./PopupNavigation";

import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { HiOutlineTicket } from "react-icons/hi";
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";

const NavBar = () => {
  const [isPopupNavOpen, togglePopupNav] = useState(false);

  const togglePopupNavigation = () => {
    console.log(isPopupNavOpen);
    togglePopupNav((prevState) => !prevState);
  };

  return (
    <>
      <nav className="flex items-center justify-between w-full lg:max-w-screen-2xl self-center px-4 h-16 font-inter lg:px-24 ">
        {isPopupNavOpen && <PopupNavigation />}
        <Link to="/">
          <div className="logo flex text-3xl text-logo font-bold">
            EventEase
          </div>
        </Link>
        <div className="buttons">
          <ul className="flex">
            <li
              onClick={togglePopupNavigation}
              className="hover:cursor-pointer lg:hidden"
            >
              {isPopupNavOpen && (
                <IoMdClose size={30} className="text-gray-400" />
              )}
              {!isPopupNavOpen && (
                <CiMenuBurger size={30} className="text-gray-400" />
              )}
            </li>
            <li className="hidden lg:flex gap-2 rounded-lg hover:cursor-pointer hover:bg-gray-100">
              <Link className="flex self-center gap-2 p-3" to="/host">
                <div className="flex items-center">
                  <MdOutlineEvent size={20} />
                </div>
                <div className="label ">Host an Event</div>
              </Link>
            </li>
            <li className="hidden lg:flex gap-2 rounded-lg hover:cursor-pointer hover:bg-gray-100">
              <Link className="flex self-center gap-2 p-3" to="/events">
                <div className="flex items-center">
                  <HiOutlineTicket size={20} />
                </div>
                <div className="label ">Book Passes</div>
              </Link>
            </li>
            <li className="hidden lg:flex gap-2 rounded-lg hover:cursor-pointer hover:bg-gray-100">
              <Link className="flex self-center gap-2 p-3" to="profile">
                <div className="flex items-center">
                  <MdOutlineAccountCircle size={20} />
                </div>
                <div className="label ">Profile</div>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <hr className="w-[calc(100%-50px)] mx-auto" />
    </>
  );
};

export default NavBar;
