import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./index.css";

import fbConfig from "./firebaseConfig.js";

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import NotFound404 from "./Pages/NotFound404.jsx";
import Home from "./Pages/Home.jsx";
import HostAnAvent from "./Pages/HostAnAvent.jsx";
import BookPasses from "./Pages/BookPasses.jsx";
import AboutUs from "./Pages/AboutUs.jsx";
import ContactUs from "./Pages/ContactUs.jsx";
import Profile from "./Pages/Profile.jsx";
import ProfileLoader from "./loaders/ProfileLoader.jsx";
import LogIn from "./components/auth/LogIn.jsx";
import SignUp from "./components/auth/SignUp.jsx";
import LoginPageLoader from "./loaders/LoginPageLoader.jsx";

// Add firebase config object in the firebaseConfig.js file
const app = initializeApp(fbConfig);
const auth = getAuth(app);

// main.jsx
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound404 />}>
      <Route index element={<Home />} />
      <Route path="host" element={<HostAnAvent />} />
      <Route path="book" element={<BookPasses />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="login" element={<LogIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="profile" element={<Profile />} loader={ProfileLoader} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
