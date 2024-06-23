import { useState } from "react";
import { Link, useOutletContext } from "react-router-dom";

const Name = () => {
  const [pageNum, setPageNum, eventDetails, setEventDetails, validate] =
    useOutletContext();

  console.log(typeof validate);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
    console.log(eventDetails);
  };

  return (
    <div className="w-full flex flex-col mx-auto items-center  py-8">
      <div className="text-5xl font-normal">Host an event!</div>
      <div className="text-lg">Enter event name to continue</div>
      <div className="flex flex-col gap-12 mt-12">
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="text"
            name="eventName"
            id="eventNameField"
            placeholder="Enter event name"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            value={eventDetails.eventName}
            onChange={handleChange}
          />
        </div>
        <Link
          to="description"
          className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Name;
