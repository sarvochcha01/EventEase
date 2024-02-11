import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex flex-col w-full">
      <hr className="w-[calc(100%-50px)] mx-auto mt-16" />
      <footer className="h-64 w-full items-center justify-between lg:max-w-screen-2xl self-center px-4 lg:px-20 flex lg:h-16 lg:my-4">
        <div className="logo  flex flex-col h-full w-1/2 justify-center text-3xl text-logo font-bold ">
          © EventEase <br />
          <span className="text-sm font-light">All rights reserved, 2024</span>
        </div>
        <div className="nav flex h-full w-1/2 justify-center text-center">
          <ul className="h-full flex flex-col lg:flex-row justify-center lg:items-center lg:gap-4">
            <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
              <Link to="/about-us">About Us</Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
              <Link to="/contact-us">Contact Us</Link>
            </li>
            <li className="mt-4 lg:mt-0 lg:ml-8 font-bold text-2xl">Socials</li>
            <hr />
            <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
              <Link to="https://www.instagram.com" target="_blank">
                Instagram
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
              <Link to="https://www.facebook.com" target="_blank">
                Facebook
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
              <Link to="https://www.twitter.com" target="_blank">
                Twitter
              </Link>
            </li>
            <li className="hover:underline hover:underline-offset-4 hover:cursor-pointer">
              <Link to="https://www.linkedin.com" target="_blank">
                LinkedIn
              </Link>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
