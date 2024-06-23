import { useEffect, useState } from "react";
import { Form, Link, useOutletContext, useNavigate } from "react-router-dom";

import { CiCirclePlus } from "react-icons/ci";

import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../../firebaseConfig";

import { v4 as uuid } from "uuid";

import { GrLinkPrevious } from "react-icons/gr";

const PriceAndDate = () => {
  const [
    pageNum,
    setPageNum,
    eventDetails,
    setEventDetails,
    datetime,
    setDatetime,
  ] = useOutletContext();

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

  const getUser = () => {
    const user = auth.currentUser;
    if (user != null) return auth.currentUser.uid;
    else return "";
  };

  const addToDatabase = async () => {
    try {
      const docRef = await addDoc(collection(db, "events"), {
        createdBy: getUser(),
        eventDetails,
        datetime,
        id: uuid(),
        createdAt: serverTimestamp(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  // const [dates, setDates] = useState([
  //   <DateTimePicker
  //     onChange={onChange}
  //     value={value}
  //     className="border-b-2 border-gray-950"
  //     key={uuid()}
  //   />,
  // ]);

  return (
    <div className="w-full flex flex-col mx-auto items-center  py-8">
      <div className="w-full flex items-center justify-center px-2">
        <Link to="/host/venue" className="w-1/12">
          <GrLinkPrevious
            size={40}
            className="bg-gray-200 rounded-full p-2 hover:cursor-pointer flex"
            onClick={() => setPageNum((prev) => prev - 1)}
          />
        </Link>
        <div className="w-5/6 flex justify-center text-3xl font-normal">
          Set Price and Date
        </div>
        <div className="w-1/12"></div>
      </div>
      <div className="flex w-full flex-col gap-12 mt-12 px-8">
        <div className="border-b-2 border-gray-950">
          <input
            type="text"
            name="price"
            id="priceField"
            placeholder="Set price for tickets"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(e) => handleChange(e)}
            value={eventDetails.price}
          />
        </div>
        {/* {dates} */}
        <div className="text-xl font-extralight">Select date and time:</div>

        <input
          name="dateTime"
          type="datetime-local"
          className="border-b-2 border-gray-950 appearance-none bg-transparent outline-none focus:bg-none mt-[-24px] w-full"
          onChange={(e) => setDatetime(e.target.value)}
          value={datetime}
        />

        {/* <div className="flex justify-center">
          <CiCirclePlus
            size={40}
            onClick={() => {
              setDates((oldArray) => [
                ...oldArray,
                <DateTimePicker
                  onChange={onChange}
                  value={value}
                  className="border-b-2 border-gray-950"
                  key={uuid()}
                />,
              ]);
              console.log(dates);
            }}
          />
        </div> */}
        <Link
          to={"/"}
          className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          onClick={() => {
            addToDatabase();
            setPageNum((prev) => prev + 1);
          }}
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default PriceAndDate;
