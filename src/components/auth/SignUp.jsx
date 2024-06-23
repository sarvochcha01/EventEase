import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

const SignUp = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const navigate = useNavigate();

  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log(userCredential.user.email);
      })
      .then(() => {
        // sendVerificationEmail();
        console.log("Redirecting to home...");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        console.log(errorCode + " " + errorMessage);
      });
  };

  const sendVerificationEmail = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log("Verification email sent");
        navigate("/");
      })
      .catch(() => {
        console.log("Unable to send verification email");
      });
  };

  return (
    <div className="w-full flex flex-col mx-auto items-center mt-16 bg-gray-100 rounded-lg py-8 lg:max-w-screen-2xl">
      <div className="text-5xl font-normal">Hi!</div>
      <div className="text-lg">Create an account</div>
      <div className="flex flex-col gap-12 mt-12">
        {/* <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="username"
            name="username"
            id="username"
            placeholder="Enter username"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
          />
        </div> */}
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter email"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="password"
            name="email"
            id="password"
            placeholder="Enter password"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <button
          className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          onClick={createUser}
        >
          Sign Up
        </button>
        <span className="self-center text-center mt-[-32px]">
          Already have an account?
          <Link to="/login" className="font-extrabold underline pl-2">
            Log In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default SignUp;
