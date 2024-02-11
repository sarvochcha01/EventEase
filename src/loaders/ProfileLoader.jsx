// ProfileLoader.jsx

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Outlet, redirect } from "react-router-dom";

const ProfileLoader = () => {
  const auth = getAuth();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
    } else {
      console.log("User is not logged in");
      return redirect("/login");
    }
  });

  return <Outlet />;
};

export default ProfileLoader;
