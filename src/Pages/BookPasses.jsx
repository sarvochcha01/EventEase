import React, { useEffect } from "react";
import EventCard from "../components/cards/EventCard";
import { useLoaderData } from "react-router-dom";

const BookPasses = () => {
  const data = useLoaderData();

  // data.forEach((doc) => {
  //   console.log(`${doc.id} => ${doc.data().formValues.city}`);
  // });

  // console.log(data);

  const events = [];

  data.forEach((doc) => {
    events.push(
      <EventCard
        key={doc.id}
        name={doc.data().eventDetails.eventName}
        price={doc.data().eventDetails.price}
        city={doc.data().eventDetails.city}
        state={doc.data().eventDetails.state}
        dateTime={doc.data().datetime}
        id={doc.data().id}
      />
    );
  });

  return (
    <div className="w-full flex flex-col p-2 mt-16 gap-y-4 lg:flex-row lg:justify-evenly lg:flex-wrap lg:gap-y-12">
      {events.length !== 0 && events}
      {events.length === 0 && (
        <div className="text-4xl font-bold">No events to display . . .</div>
      )}
    </div>
  );
};

export default BookPasses;
