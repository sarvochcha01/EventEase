import React from "react";
import HomeScreenCard from "../components/cards/HomeScreenCard";

const Home = () => {
  return (
    <div className="content w-full lg:max-w-screen-2xl self-center">
      <HomeScreenCard
        linkTo="/host"
        classToModify="mt-16"
        title="Welcome to EventEase"
        subtitle="Your one-stop solution for managing and attending events. Let's get started!"
        buttonText="Host an Event"
      />
      <HomeScreenCard
        linkTo="/events"
        classToModify="bg-gray-100 mt-16"
        title="Upcoming Events"
        subtitle="Check out the events coming up next and book your passes now!"
        buttonText="Book Passes"
      />
    </div>
  );
};

export default Home;
