import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { Navigate, useLoaderData, useNavigate } from "react-router-dom";

const Profile = () => {
  const profile = useLoaderData();

  const auth = getAuth();
  const navigate = useNavigate();

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>{`${profile.email} is ${
        profile.emailVerified ? "verified" : "not verified"
      }`}</div>
      <button onClick={logOut}>Log Out</button>
    </div>
  );
};

export default Profile;
