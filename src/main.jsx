import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound404 from "./Pages/NotFound404.jsx";
import Home from "./Pages/Home.jsx";
import HostAnEvent from "./Pages/HostAnEvent.jsx";
import BookPasses from "./Pages/BookPasses.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Profile from "./Pages/Profile.jsx";
import ProfileLoader from "./loaders/ProfileLoader.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import LoginPageLoader from "./loaders/LoginPageLoader.jsx";
import ResetPassword from "./components/auth/ResetPassword.jsx";
import Name from "./components/host/Name.jsx";
import Venue from "./components/host/Venue.jsx";
import VenueAction from "./actions/VenueAction.js";
import PriceAndDate from "./components/host/PriceAndDate.jsx";
import BookPassesLoader from "./loaders/BookPassesLoader.js";
import EventPage from "./Pages/EventPage.jsx";
import EventPageLoader from "./loaders/EventPageLoader.js";
import EventDescription from "./components/host/EventDescription.jsx";

// main.jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound404 />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostAnEvent />}>
        <Route index element={<Name />} />
        <Route path="description" element={<EventDescription />} />
        <Route path="venue" element={<Venue />} />
        <Route path="price-date" element={<PriceAndDate />} />
      </Route>
      <Route path="events" element={<BookPasses />} loader={BookPassesLoader} />
      <Route
        path="events/:id"
        element={<EventPage />}
        loader={EventPageLoader}
      />

      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} loader={ProfileLoader} />
      <Route path="reset-password" element={<ResetPassword />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
