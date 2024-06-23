import React, { useState } from "react";
import {
  Link,
  Outlet,
  redirect,
  useNavigate,
  useOutletContext,
} from "react-router-dom";

const HostAnEvent = () => {
  const [pageNum, setPageNum] = useState(0);

  const [datetime, setDatetime] = useState("");

  const [eventDetails, setEventDetails] = useState({
    eventName: "",
    venueName: "",
    country: "",
    pinCode: "",
    state: "",
    city: "",
    addressL1: "",
    addressL2: "",
    price: 0,
    eventDescription: "",
  });

  const minLength = {
    eventName: 5,
    venueName: 3,
    country: 5,
    pinCode: 6,
    state: 5,
    addressL1: 25,
    addressL2: 0,
    eventDescription: 50,
  };

  const navigate = useNavigate();

  const onValidate = (name) => {
    return name.length > minLength[name];
  };

  const validate = (name, navigateTo) => {
    try {
      onValidate(name);
    } catch {
      console.log("Criteria not met");
    }
  };

  const [eventDates, setEventDates] = useState([]);

  return (
    <div className="w-full flex mt-16 bg-gray-100 lg:max-w-screen-2xl">
      <div className="lg:w-1/3 w-full flex justify-center mx-auto">
        <Outlet
          context={[
            pageNum,
            setPageNum,
            eventDetails,
            setEventDetails,
            datetime,
            setDatetime,
            validate,
          ]}
        />
      </div>
    </div>
  );
};

export default HostAnEvent;
