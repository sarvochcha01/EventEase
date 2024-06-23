import React from "react";
import { Link } from "react-router-dom";

const HomeScreenCard = (props) => {
  return (
    <div
      className={`${props.classToModify} flex flex-col h-96 w-full justify-center gap-4 text-center`}
    >
      <h1 className="text-3xl lg:text-5xl font-semibold lg:font-bold flex justify-center">
        {props.title}
      </h1>
      <p className="flex lg:text-xl justify-center px-4">{props.subtitle}</p>
      <Link
        to={props.linkTo}
        className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
      >
        <button>{props.buttonText}</button>
      </Link>
    </div>
  );
};

export default HomeScreenCard;
