import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const LogIn = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [pass, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, pass)
      .then((userCredential) => {
        console.log(userCredential.user.email);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user
      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });

  return (
    <div className="w-full flex flex-col mx-auto items-center mt-16 bg-gray-100 rounded-lg py-8 lg:max-w-screen-2xl">
      <div className="text-5xl font-normal">Welcome!</div>
      <div className="text-lg">Sign in to continue</div>
      <div className="flex flex-col gap-12 mt-12">
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="email"
            name="email"
            id="emailField"
            placeholder="Enter email"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="flex flex-col gap-2 border-b-2 border-gray-950">
          <input
            type="password"
            name="email"
            id="passwordField"
            placeholder="Enter password"
            className="px-2 py-2 w-80 appearance-none bg-transparent outline-none focus:bg-none"
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <Link className=" w-32 text-sm p-0 mt-[-8px]" to="/reset-password">
          Forgot Password?
        </Link>
        <button
          className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          onClick={signIn}
        >
          Log In
        </button>
        <span className="self-center text-center mt-[-32px]">
          Don't have an account?
          <Link to="/signup" className="font-extrabold underline pl-2">
            Sign Up
          </Link>
        </span>
      </div>
    </div>
  );
};

export default LogIn;
