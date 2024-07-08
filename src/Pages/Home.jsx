import React from "react";
import HomeScreenCard from "../components/cards/HomeScreenCard";
import { useSelector } from "react-redux";


const Home = () => {
  const authStatus=useSelector((state)=>(state.auth.status))
 
  return (
    <>
    <div className="block">
    <div className="flex justify-between bg-slate-100  rounded-2xl h-[500px]">
      <div> <h1 className="text-7xl font-bold mt-20  p-10 rounde-3xl ">WELCOME TO EVENTEASE</h1>
            <p className="text-lg p-10">Your ultimate destination for organizing and attending the best events in town. Whether you are looking to host an event or join one, we've got you covered.</p>
        </div>
      <img className="w-[700px]" src="event.png" alt="" />
    </div>
    {authStatus && 
    <div 
    className="content w-full lg:max-w-screen-2xl self-center">
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
      }
    
    </div>
        </>
  );
};

export default Home;
