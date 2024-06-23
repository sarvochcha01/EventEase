import React from "react";

import { HiOutlineTicket } from "react-icons/hi";
import { MdOutlineEvent } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const PopupNavigation = () => {
  return (
    <div className="absolute bg-gray-100 rounded-lg w-44 h-48 top-12 right-4">
      <ul className="flex flex-col w-full px-2 pt-4 gap-2">
        <li className="flex gap-2  align-middle p-2 rounded-lg hover:cursor-pointer hover:bg-gray-100">
          <Link className="flex self-center justify-center gap-2" to="/host">
            <div className="icon flex self-center">
              <MdOutlineEvent size={20} />
            </div>
            <div className="label ">Host an Event</div>
          </Link>
        </li>
        <li className="flex gap-2  align-middle p-2 rounded-lg hover:cursor-pointer hover:bg-gray-100">
          <Link className="flex self-center justify-center gap-2" to="/events">
            <div className="icon flex self-center">
              <HiOutlineTicket size={20} />
            </div>
            <div className="label ">Book Passes</div>
          </Link>
        </li>
        <hr />
        <li className="flex gap-2  align-middle p-2 rounded-lg hover:cursor-pointer hover:bg-gray-100">
          <Link className="flex self-center justify-center gap-2" to="/profile">
            <div className="icon flex self-center">
              <MdOutlineAccountCircle size={20} />
            </div>
            <div className="label ">Profile</div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default PopupNavigation;
