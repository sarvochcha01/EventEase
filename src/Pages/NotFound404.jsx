import React from "react";
import HomeScreenCard from "../components/cards/HomeScreenCard";
import NavBar from "../components/navigation/NavBar";
import Footer from "../components/navigation/Footer";

const NotFound404 = () => {
  return (
    <div>
      <NavBar />
      <HomeScreenCard
        title="Page Not Found!"
        subtitle="The page you are looking for could not be found!"
        buttonText="Home"
      />
      <Footer />
    </div>
  );
};

export default NotFound404;
