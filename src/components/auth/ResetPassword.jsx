import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
  const auth = getAuth();

  const [email, setEmail] = useState("");
  const [linkSent, setLinkSet] = useState(false);

  const sendResetEmail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log("Link sent");
        setLinkSet(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(`${errorCode}: ${errorMessage}`);
      });
  };

  return (
    <div className="w-full flex flex-col mx-auto items-center mt-16 bg-gray-100 rounded-lg py-8 lg:max-w-screen-2xl">
      <div className="text-5xl font-normal">Reset Password!</div>
      <div className="text-lg">Enter your email to continue</div>
      <div className="flex flex-col gap-12 mt-12">
        {!linkSent && (
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
        )}
        {linkSent && (
          <div className="flex w-full justify-center text-xl font-medium">
            {`Reset link sent to  ${email}`}
          </div>
        )}
        <button
          className="flex self-center justify-center bg-gray-950 text-white w-56 rounded-lg py-4 text-lg hover:bg-white hover:text-gray-950 hover:outline hover:outline-2 transition-all duration-150 hover:shadow-2xl "
          onClick={sendResetEmail}
        >
          Send Link
        </button>
        <span className="self-center text-center mt-[-32px]">
          Continue to
          <Link to="/login" className="font-extrabold underline pl-2">
            Log In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default ResetPassword;
