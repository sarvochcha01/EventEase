import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

const EventPage = () => {
  const data = useLoaderData();

  const datetime = new Date(data.datetime);

  const day = datetime.getDate();
  const month = datetime.getMonth() + 1;
  const year = datetime.getFullYear();

  const hour = datetime.getHours();
  const min = datetime.getMinutes();

  const am = datetime.gett;

  return (
    // <div>
    //   <div>{data.eventDetails.eventName}</div>
    //   <div>{data.eventDetails.venueName}</div>
    //   <div>{data.eventDetails.country}</div>
    //   <div>{data.eventDetails.pinCode}</div>
    //   <div>{data.eventDetails.state}</div>
    //   <div>{data.eventDetails.city}</div>
    //   <div>{data.eventDetails.addressL1}</div>
    //   <div>{data.eventDetails.addressL2}</div>
    //   <div>{data.eventDetails.price}</div>
    //   <div>{data.datetime}</div>
    // </div>

    <div className="flex flex-col w-full mt-16 bg-gray-100 p-4 py-8">
      <div className="flex flex-col w-full ">
        <div className="text-3xl font-semibold">
          {data.eventDetails.eventName}
        </div>
        <div className="text-justify mt-2">
          {data.eventDetails.eventDescription}
        </div>
        <div className="text-xl  mt-4">
          Starts at {hour % 12}:{min} {hour > 12 ? "P.M." : "A.M."}
        </div>
        <div className="text-xl">
          On {day}/{month}/{year}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="text-xl mt-8">₹{data.eventDetails.price} onwards</div>
        <Link
          className=" w-full flex text-xl justify-center mt-2 bg-gray-950 text-white rounded-lg py-4 hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          to={`/events/`}
        >
          Continue to payment
        </Link>
      </div>
    </div>
  );
};

export default EventPage;
