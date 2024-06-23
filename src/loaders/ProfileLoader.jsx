// ProfileLoader.jsx

import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Outlet, redirect } from "react-router-dom";

const ProfileLoader = async () => {
  const auth = getAuth();
  // const user = auth.currentUser;

  // if (user) {
  //   return user;
  // } else {
  //   return redirect("/login");
  // }

  return await new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        unsubscribe();
        resolve(user);
      } else {
        reject(redirect("/login"));
      }
    });
  });

  // onAuthStateChanged(auth, (user) => {
  //   if (user) {
  //     const uid = user.uid;
  //     console.log(uid);
  //   } else {
  //     console.log("User is not logged in");
  //     return redirect("/login");
  //   }
  // });

  // return <Outlet />;
};

export default ProfileLoader;
