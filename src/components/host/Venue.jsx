import { useEffect } from "react";
import { Form, Link, useNavigate, useOutletContext } from "react-router-dom";

import { GrLinkPrevious } from "react-icons/gr";

const Venue = () => {
  const [pageNum, setPageNum, eventDetails, setEventDetails] =
    useOutletContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEventDetails({ ...eventDetails, [name]: value });
    console.log(eventDetails);
  };

  const navigate = useNavigate();

  // useEffect(() => {
  //   if (pageNum === 0) {
  //     navigate("/host");
  //   }
  // }, []);

  // <Link to={`${navList[pageNum - 1]}`}>
  //   <GrLinkPrevious
  //     size={40}
  //     className="bg-gray-200 rounded-full p-2 hover:cursor-pointer"
  //     onClick={() => {
  //       setPageNum((prev) => prev - 1);
  //     }}
  //   />
  // </Link>;

  return (
    <div className="w-full flex flex-col mx-auto items-center  py-8">
      <div className="w-full flex items-center justify-center px-2">
        <Link to="/host/description" className="w-1/12">
          <GrLinkPrevious
            size={40}
            className="bg-gray-200 rounded-full p-2 hover:cursor-pointer flex"
            onClick={() => setPageNum((prev) => prev - 1)}
          />
        </Link>
        <div className="w-5/6 flex justify-center text-3xl font-normal">
          Enter Venue Details
        </div>
        <div className="w-1/12"></div>
      </div>
      <div className="flex w-full flex-col gap-12 mt-12 px-8">
        <div className=" gap-2 border-b-2 border-gray-950">
          <input
            type="text"
            name="venueName"
            id="eventVenueNameField"
            placeholder="Enter venue name"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(e) => handleChange(e)}
            value={eventDetails.venueName}
          />
        </div>
        <div className="gap-2 border-b-2 border-gray-950">
          <input
            type="text"
            name="addressL1"
            id="eventVenueAddressL1Field"
            placeholder="Address Line 1"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(e) => handleChange(e)}
            value={eventDetails.addressL1}
          />
        </div>
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="text"
            name="addressL2"
            id="eventVenueAddressL2Field"
            placeholder="Address Line 2 (optional)"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(e) => handleChange(e)}
            value={eventDetails.addressL2}
          />
        </div>
        <div className="flex flex-col gap-12">
          <div className="border-b-2 border-gray-950">
            <input
              type="text"
              name="city"
              id="eventVenueAddressCityField"
              placeholder="Enter city"
              className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
              onChange={(e) => handleChange(e)}
              value={eventDetails.city}
            />
          </div>
          <div className="gap-2 border-b-2 border-gray-950">
            <input
              type="text"
              name="state"
              id="eventVenueAddressCityField"
              placeholder="Enter state"
              className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
              onChange={(e) => handleChange(e)}
              value={eventDetails.state}
            />
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className="gap-2 border-b-2 border-gray-950">
            <input
              type="text"
              name="pinCode"
              id="eventVenueAddressCityField"
              placeholder="Enter pin code"
              className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
              onChange={(e) => handleChange(e)}
              value={eventDetails.pinCode}
            />
          </div>
          <div className="gap-2 border-b-2 border-gray-950">
            <input
              type="text"
              name="country"
              id="eventVenueAddressCityField"
              placeholder="Enter country"
              className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
              onChange={(e) => handleChange(e)}
              value={eventDetails.country}
            />
          </div>
        </div>
        <Link
          to="/host/price-date"
          className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          onClick={() => setPageNum((prev) => prev + 1)}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default Venue;
